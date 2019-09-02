/**
 * 购票系统(类似铁路购票系统)
 *
 * 1. 座位：为4个扇形区域ABCD，第一排50个座位，最后一排100个座位
 *
 * 2. 需求：
 *         a. 用户一次性购买1-5张票;
 *         b. 系统随机分配座位
 *
 * 3. 假设：
 *         a. 预定：用户一次性预定的票，座位尽量连座
 *         b: 超时：预定完成未付钱30分钟后订单失效（座位状态处理）
 *         b. 支付成功：用户预定之后，付钱完毕表示该座位锁定成功（座位状态处理）
 *         c. 退票：座位回复初始状态（座位状态处理）
 *         f. 处理可能发生的高并发问题?
 */

const REGION_NAME = ['A', 'B', 'C', 'D'];
const SEAT_STATUS = ['init', 'assigning', 'assigned'];
// const SECTOR = [50, 100, 2]; // 第一排， 最后一排， 递增值
const SECTOR = [5, 5, 1];
// const TIME = 30 * 60;

class BookingSystem {
    constructor() {
        const { remain, connectedRemain, region, remainSum } = this._initSectorRegion();
        this.remain = remain;
        this.connectedRemain = connectedRemain;
        this.region = region;
        this.remainSum = remainSum;
        this.orderList = {};
        this.orderId = 0;
    }

    // 暴露的座位分配接口
    booking(user, num) {
        this.orderId += 1;
        const orderInfo = this._booking({ user, num, multiRows: {} });
        if (!orderInfo) {
            return false;
        }

        const { orderId } = orderInfo;
        this.orderList[orderId] = orderInfo;

        this._print(orderInfo);

        // NEXT: 监听订单状态，定时触发释放座位并进行座位状态处理

        // TEST: 有1/4概率触发超时失效，支付成功后， 有1/4触发退款
        let newOrderInfo;
        const emitTimeoutFlag = Math.floor(Math.random() * 4 + 1) % 4 === 0;
        if (emitTimeoutFlag) {
            newOrderInfo = this._releaseSeats({ orderId });
            this._print(newOrderInfo);
        } else {
            newOrderInfo = this.pay({ orderId });
            this._print(newOrderInfo);

            const emitRefundFlag = Math.floor(Math.random() * 4 + 1) % 4 === 0;
            if (emitRefundFlag) {
                newOrderInfo = this.refund({ orderId });
                this._print(newOrderInfo);
            }
        }

        this.orderList[orderId] = newOrderInfo;
        return newOrderInfo;
    }

    // 超时失效订单和座位信息调整
    _timeout({ orderId }) {
        const orderInfo = this.orderList[orderId];
        const { status } = orderInfo;
        if (status !== SEAT_STATUS[1]) {
            return [];
        }

        console.warn(`订单${orderId}失效`);
        const newOrderInfo = this._releaseSeats({ orderId });
        this._print(newOrderInfo);
        return newOrderInfo;
    }

    // 暴露的支付接口
    pay({ orderId }) {
        const orderInfo = this.orderList[orderId];
        const { user, seatsInfo, status } = orderInfo;
        if (status !== SEAT_STATUS[1]) {
            return [];
        }

        // NEXT: 调用支付接口
        console.log(`支付订单${orderId}`);

        // 座位状态锁定
        seatsInfo.forEach(({ raw }, index) => {
            const [rowIndex, columnIndex] = raw;
            this.region[rowIndex][columnIndex] = { user, status: SEAT_STATUS[2] };
        });
        // 清除定时触发函数
        orderInfo.status = SEAT_STATUS[2];
        return orderInfo;
    }

    // 暴露的退款接口
    refund({ orderId }) {
        // 释放座位
        const orderInfo = this.orderList[orderId];
        const { status } = orderInfo;
        if (status !== SEAT_STATUS[2]) {
            return;
        }
        console.warn(`退款订单${orderId}`);
        const newOrderInfo = this._releaseSeats({ orderId });
        // NEXT: 处理退款
        return newOrderInfo;
    }

    // 初始化扇形区域，四个区域放一起进行随机分配
    _initSectorRegion() {
        const [start, end, step] = SECTOR;
        const region = [];
        const remain = [];
        const connectedRemain = [];
        let remainSum = 0;
        const rowLength = (end - start) / step + 1;
        for (let i = 0; i < rowLength * 4; i += 1) {
            region[i] = [];
            const columnLength = start + Math.floor(i / 4) * step;
            // remain结构
            remain[i] = { rowIndex: i, remainNum: columnLength };

            // connectedRemain结构
            connectedRemain[i] = {
                rowIndex: i,
                sections: [
                    { start: 0, end: columnLength - 1, num: columnLength }
                ],
                remainNum: columnLength
            };
            remainSum += columnLength;
            for (let j = 0; j < columnLength; j += 1) {
                // region结构
                region[i][j] = { user: '', status: SEAT_STATUS[0] };
            }
        }
        return { region, remain, connectedRemain, remainSum };
    }

    // 实际调用的预定函数，可供多行座位选择时进行递归调用
    _booking({ user, num, multiRows = {} }) {
        const { remain, connectedRemain, region, remainSum } = this;
        if (remainSum < num) {
            console.error('抱歉，已无足够座位');
            return false;
        }

        // 处理单行连座
        const rowMaxConnectedNum = connectedRemain[connectedRemain.length - 1].remainNum;
        if (rowMaxConnectedNum >= num) {
            return this._handleSigleRowConnectedSeats({ remain, connectedRemain, region, user, num });
        }

        // 处理单行不连座
        const rowMaxNum = remain[remain.length - 1].remainNum;
        if (rowMaxNum >= num) {
            return this._handleSigleRow({ remain, connectedRemain, region, user, num });
        }

        // 处理多行
        return this._handleMultiRows({ remain, connectedRemain, region, user, num, multiRows });
    }

    // 释放订单中的座位，并处理对应座位信息
    _releaseSeats({ orderId }) {
        const { remain } = this;
        const orderInfo = this.orderList[orderId];
        const { status, seatsInfo } = orderInfo;
        let sum = 0;
        if (status !== SEAT_STATUS[0]) {
            orderInfo.status = SEAT_STATUS[0];
            seatsInfo.forEach(({ raw }) => {
                const [rowIndex, columnIndex] = raw;
                // region调整
                this.region[rowIndex][columnIndex] = { user: '', status: SEAT_STATUS[0] };

                // remain调整
                const remainIndex = this._getRemainIndexByRegionIndex({ remain: this.remain, regionRowIndex: rowIndex });
                remain[remainIndex].remainNum += 1;
                this.remain = this._sortRemain({ remain, remainIndex, end: remain.length - 1 });

                // connectedRemain调整
                const connectedRemainIndex = this._getRemainIndexByRegionIndex({ remain: this.connectedRemain, regionRowIndex: rowIndex });
                const connectedRemainRow = this.connectedRemain[connectedRemainIndex];
                const { sections } = connectedRemainRow;
                sections.sort((sectionA, sectionB) => sectionA.start - sectionB.start);
                let left;
                let right;
                let newSectionIndex;
                const flag = sections.some(({ start }, index) => {
                    if (columnIndex < start) {
                        if (index !== 0) {
                            left = sections[index - 1];
                        }
                        right = sections[index];
                        newSectionIndex = index;
                        return true;
                    }
                    return false;
                });
                if (!flag) {
                    newSectionIndex = sections.length;
                    left = sections[sections.length - 1];
                }

                if (left && (left.end + 1 === columnIndex) && right && (right.start - 1 === columnIndex)) {
                    const newSection = { start: left.start, end: right.end, num: right.end - left.start + 1 };
                    sections.splice(newSectionIndex - 1, 2, newSection);
                } else if (left && (left.end + 1 === columnIndex)) {
                    const newSection = { start: left.start, end: left.end + 1, num: left.end + 1 - left.start + 1 };
                    sections.splice(newSectionIndex - 1, 1, newSection);
                } else if (right && (right.start - 1 === columnIndex)) {
                    const newSection = { start: right.start - 1, end: right.end, num: right.end - right.start + 1 + 1 };
                    sections.splice(newSectionIndex, 1, newSection);
                } else {
                    const newSection = { start: columnIndex, end: columnIndex, num: 1 };
                    sections.splice(newSectionIndex, 0, newSection);
                }
                sections.sort((sectionA, sectionB) => sectionA.num - sectionB.num);

                this.connectedRemain[connectedRemainIndex].sections = sections;
                this.connectedRemain = this._sortConnectedRemain({ connectedRemain: this.connectedRemain, connectedRemainIndex });
                sum += 1;
            });

            // reaminSum调整
            this.remainSum += sum;
        }
        return orderInfo;
    }

    // 处理单行连座情况
    _handleSigleRowConnectedSeats({ remain, connectedRemain, region, user, num }) {
        // 获取随机的一行进行座位分配
        const { randowRemainIndex } = this._getRandomRow({ remain: connectedRemain, num });
        const { rowIndex, sections } = connectedRemain[randowRemainIndex];
        const { start, end } = sections[sections.length - 1];

        // 分配并保存座位信息
        const { orderInfo, newRegion } = this._saveSeatsInfo({ region, rowIndex, start, num, user, status: SEAT_STATUS[1] });

        // 更新座位表
        this.region = newRegion;
        const remainIndex = this._getRemainIndexByRegionIndex({ remain, regionRowIndex: rowIndex });

        // 处理connectReamin排序
        sections[sections.length - 1] = { start: start + num, end, num: end - start - num + 1 };
        const remainNum1 = (sections[sections.length - 2] && sections[sections.length - 2].num) || 0;
        const remainNum2 = ((sections[sections.length - 1] && sections[sections.length - 1].num)) || 0;
        connectedRemain[randowRemainIndex].remainNum = Math.max(remainNum1, remainNum2);
        this.connectedRemain = this._sortConnectedRemain({ connectedRemain, connectedRemainIndex: randowRemainIndex });

        // 处理remain排序
        remain[remainIndex].remainNum -= num;
        this.remain = this._sortRemain({ remain, remainIndex });
        // 处理reaminSum
        this.remainSum = this.remainSum - num;

        return orderInfo;
    }

    // 根据座位号寻找对应的在remain中的存储位置
    _getRemainIndexByRegionIndex({ remain, regionRowIndex }) {
        let remainIndex = 0;
        remain.some(({ rowIndex }, index) => {
            remainIndex = index;
            return rowIndex === regionRowIndex;
        });
        return remainIndex;
    }

    // 对连座剩余座位排序
    _sortConnectedRemain({ connectedRemain, connectedRemainIndex, sectionIndex }) {
        // 每一行的最长连座排序
        const { sections } = connectedRemain[connectedRemainIndex];
        const sectionTarget = sections[sectionIndex || sections.length - 1];
        const sectionTargetIndex = this._search({ arr: sections, sortBy: 'num', target: sectionTarget, left: 0, right: sections.length - 1 });
        sections.splice(sectionIndex || sections.length - 1, 1);
        sections.splice(sectionTargetIndex, 0, sectionTarget);
        connectedRemain[connectedRemainIndex].remainNum = sections[sections.length - 1].num || 0;

        // 所有剩余连座行排序
        const connectedRemainTarget = connectedRemain[connectedRemainIndex];
        const connectedRemainTargetIndex = this._search({ arr: connectedRemain, sortBy: 'remainNum', target: connectedRemainTarget, left: 0, right: connectedRemain.length - 1 });
        connectedRemain.splice(connectedRemainIndex, 1);
        connectedRemain.splice(connectedRemainTargetIndex, 0, connectedRemainTarget);

        return connectedRemain;
    }

    // 处理单行不连座情况
    _handleSigleRow({ remain, connectedRemain, region, user, num }) {
        const { remainNum } = connectedRemain[connectedRemain.length - 1];

        // 递归调用单行连座
        if (remainNum < num) {
            const connectedOrderInfo = this._handleSigleRowConnectedSeats({ remain, connectedRemain, region, user, num: remainNum });
            const otherOrderInfo = this._handleSigleRow({ remain, connectedRemain, region, user, num: num - remainNum });
            return { ...connectedOrderInfo, num: (connectedOrderInfo.num + otherOrderInfo.num), seatsInfo: [...connectedOrderInfo.seatsInfo, ...otherOrderInfo.seatsInfo] };
        }

        const orderInfo = this._handleSigleRowConnectedSeats({ remain, connectedRemain, region, user, num: remainNum });
        return orderInfo;
    }

    // 处理无法连座时，分配多行不连座的座位
    _handleMultiRows({ remain, connectedRemain, region, user, num, multiRows = {} }) {
        const rowMax = remain[remain.length - 1].remainNum;
        const sigleOrderInfo = this._handleSigleRow({ remain, connectedRemain, region, user, num: rowMax });
        // 递归调用单行处理
        const remainOrderInfo = num - rowMax > 0
            ? this._booking({ user, num: num - rowMax, multiRows })
            : {};
        return { ...sigleOrderInfo, num: (multiRows.num || 0 + sigleOrderInfo.num + remainOrderInfo.num), seatsInfo: [...(multiRows.seatsInfo || []), ...sigleOrderInfo.seatsInfo, ...remainOrderInfo.seatsInfo] };
    }

    // 获取随机的一行进行座位分配
    _getRandomRow({ remain, num }) {
        // 多行处理规避了返回值为-1的情况
        const remainStartIndex = this._search({ arr: remain, sortBy: 'remainNum', target: num, left: 0, right: remain.length - 1 }); // 符合条件的有序数组的起始值
        const randowRemainIndex = Math.floor(Math.random() * (remain.length - 1 - remainStartIndex + 1) + remainStartIndex); // 生成最终的分配座位行的索引
        return { randowRemainIndex };
    }

    // 保存连座座位信息到region数组中，返回给购票用户座位信息
    _saveSeatsInfo({ region, rowIndex, start, num, user, status }) {
        const orderInfo = { orderId: this.orderId, user, num, status, seatsInfo: [] };
        for (let i = start; i < start + num; i += 1) {
            region[rowIndex][i] = { user, status };
            const regionName = REGION_NAME[rowIndex % 4];
            orderInfo.seatsInfo.push({
                regionName,
                raw: [rowIndex, i],
                rowIndex: Math.floor(rowIndex / 4) + 1, // 加1显示符合用户期望
                columnIndex: i + 1
            });
        }
        return { newRegion: region, orderInfo };
    }

    // 剩余座位数升序排列：二分插入保持有序
    _sortRemain({ remain, remainIndex, end }) {
        const target = remain[remainIndex];
        const targetIndex = this._search({ arr: remain, sortBy: 'remainNum', target, left: 0, right: end || remainIndex }); // 传入的remainIndex规避了返回值为-1的情况
        remain.splice(remainIndex, 1);
        remain.splice(targetIndex, 0, target);

        return remain;
    }

    // 找出arr中大于等于target的最小索引值
    _search({ arr, sortBy, target, left, right }) {
        const index = Math.floor((left + right) / 2);
        if (left > right) {
            if (left < arr.length) {
                return left;
            }
            return -1;
        }

        const temp = typeof arr[index] === 'number' ? arr[index] : arr[index][sortBy];
        target = typeof target === 'number' ? target : target[sortBy];
        if (temp < target) {
            return this._search({ arr, sortBy, target, left: index + 1, right });
        }
        if (temp >= target) {
            return this._search({ arr, sortBy, target, left, right: index - 1 });
        }
    }

    // 打印订单信息
    _print(orderInfo = {}) {
        const { orderId, num, user, status, seatsInfo } = orderInfo;
        const seats = seatsInfo.reduce((ac, { regionName, rowIndex, columnIndex }) => `${ac}${regionName}[${rowIndex}][${columnIndex}], `, '');
        const print = `${user}订单${orderId}状态为${status}, 座位共${num}个: ${seats} 剩余总座位数共${this.remainSum}个`;
        console.log(print);
    }
}

const sys = new BookingSystem();
let canBooking = true;
let i = 1;
while (canBooking) {
    const name = `name${i}`;
    const num = Math.floor(Math.random() * 5 + 1); // 随机生成1-5个座位进行处理
    // const num = 5;
    canBooking = sys.booking(name, num);
    if (!canBooking) {
        console.log('跳出循环');
    }
    i += 1;
}

// export default BookingSystem;
