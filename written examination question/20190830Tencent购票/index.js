/**
 * 购票系统
 * 
 * 1. 座位：为4个扇形区域ABCD，第一排50个座位，最后一排100个座位
 * 
 * 2. 需求：
 *         a. 用户一次性购买1-5张票;
 *         b. 系统随机分配座位
 * 
 * 3. 假设：
 *         a. 用户一次性购买的票，座位尽量连座
 *         b. 用户预定之后，付钱完毕表示该座位锁定成功，未付钱30分钟后订单失效
 *         c. 退票
 *         f. 处理可能发生的高并发问题?
 */

class BookingSystem {
    constructor() {
        let { remain, region, remainSum } = this._initSectorRegion();
        this.remain = remain;
        this.region = region;
        this.remainSum = remainSum;
    }

    // 暴露的订票接口
    booking(user, num) {
        return this._booking(user, num, []);
    }

    _booking(user, num, multiRows = []) {
        const { remain, region, remainSum } = this;
        if (remainSum < num) {
            throw new Error('抱歉，暂无足够座位');
            // console.error('抱歉，已无足够座位');
            // return -1;
        }

        if (remain[remain.length - 1].num < num) {
            return this._handleMultiRows(remain, region, user, num, multiRows);
        }
       
        return this._handleSignleRow(remain, region, user, num);
    }

    // 初始化扇形区域，四个区域放一起进行随机分配
    _initSectorRegion() {
        const region = [];
        const remain = [];
        let remainSum = 0;
        // const rowLength = (100 - 50) / 2 + 1;
        const rowLength = 5 - 5 + 1;
        for(let i = 0; i < rowLength * 4; i++) {
            region[i] = [];
            // const columnLength = 50 + Math.floor(i / 4) * 2;
            const columnLength = 5 + Math.floor(i / 4) * 1;
            remain[i] = {
                rowNo: i,
                num: columnLength
            };
            remainSum += columnLength;
            for(let j = 0; j < columnLength; j++) {
                region[i][j] = '';
            }
        }
        return {
            region,
            remain,
            remainSum
        };
    }

    // 处理无法连座时，分配多行不连座的座位
    _handleMultiRows(remain, region, user, num, multiRows = []) {
        const max = remain[remain.length - 1].num;
        const userInfo = this._handleSignleRow(remain, region, user, max);
        multiRows = [...multiRows, ...userInfo] ;
        // 递归调用单行处理
        if (num - max > 0) {
            let remainUserInfo = this._booking(user, num - max, multiRows);
            multiRows = [...multiRows, ...remainUserInfo];
        }
        return multiRows;
    }

    // 处理单行连座情况
    _handleSignleRow(remain, region, user, num) {
        const { randomRow, remainIndex, remainNum } = this._getRandomRow(remain, num);
        const { newRegion, userInfo } = this._saveUserSeatInfo(region, randomRow, remainNum, num, user);
        this.region = newRegion; // todo delete in function
        remain[remainIndex].num = remain[remainIndex].num - num;
        this.remainSum = this.remainSum - num;
        this.remain = this._sortRemain(remain, remainIndex);
        return userInfo;
    }

    // 获取随机的一行进行座位分配
    _getRandomRow(remain, num) {
        // 多行处理规避了返回值为-1的情况
        const startIndex = this._search(remain, num, 0, remain.length - 1);
        const randowIndex = Math.floor(Math.random() * (remain.length - 1 - startIndex + 1) + startIndex);
        const randomRow = remain[randowIndex].rowNo;
        return { randomRow, remainIndex: randowIndex, remainNum: remain[randowIndex].num, remainMax: remain[remain.length - 1] };
    }
    
    // 保存座位信息到region数组中，返回给购票用户座位信息
    _saveUserSeatInfo(region, rowIndex, remainNum, num, user) {
        const userInfo = [];
        const start = region[rowIndex].length - remainNum;
        for(let i = start; i < start + num; i++ ) {
            region[rowIndex][i] = user;
            const regionName = REGION_NAME[rowIndex % 4];
            userInfo.push({
                user,
                regionName,
                rowIndex: Math.floor(rowIndex / 4) + 1, // 加1显示符合用户期望
                columnIndex: i + 1
            });
        }
        return { newRegion: region, userInfo };
    }

    // 剩余座位数升序排列：二分插入保持有序
    _sortRemain(remain, index) {
        const target = remain[index];
        const targetIndex = this._search(remain, target, 0, index); // 传入的index规避了返回值为-1的情况
        remain.splice(index, 1);
        remain.splice(targetIndex, 0 , target);

        return remain;
    }

    // 找出arr中大于等于target的最小索引值
    _search(arr, target, left, right) {
        let index = Math.floor((left + right) / 2);
        if (left > right) {
            if (left < arr.length) {
                return left;
            }
            return -1;
        }
        const temp = typeof arr[index] === 'number' ? arr[index] : arr[index].num;
        target = typeof target === 'number' ? target : target.num;
        if(temp < target) {
            return this._search(arr, target, index + 1, right);
        }
        if(temp >= target) {
            return this._search(arr, target, left, index - 1);
        }
    }
}

const REGION_NAME = ['A', 'B', 'C', 'D'];

const sys = new BookingSystem();
for(let i = 1; ; i++) {
    const res = sys.booking(`name${i}`, 4);
    console.log(JSON.stringify(res));
}

// export default BookingSystem;