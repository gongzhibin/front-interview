/**
 * 购票系统
 * 
 * 1. 座位：为4个扇形区域ABCD，第一排50个座位，最后一排100个座位
 * 2. 需求：
 *         a. 用户一次性购买1-5张票;
 *         b. 系统随机分配座位
 * 3. 假设：
 *         a. 用户一次性购买的票座位尽量连坐
 *         b. 处理可能发生的高并发问题
 * @param  {number} num
 */

class BookingSystem {
    constructor() {
        let { remain, region, remainSum } = initSectorRegion();
        this.remain = remain;
        this.region = region;
        this.remainSum = remainSum;
    }

    booking(user, num, multiRows = []) {
        const { remain, region, remainSum } = this;
        if (remainSum < num) {
            throw new Error('抱歉，已无足够座位');
            // console.error('抱歉，已无足够座位');
            // return -1;
        }

        if (remain[remain.length - 1].num < num) {
            return this._handleMultiRows(remain, region, user, num, multiRows = []);
        }
       
        return this._handleSignleRow(remain, region, user, num);
    }

    _handleSignleRow(remain, region, user, num) {
        const { randomRow, remainIndex, remainNum } = getRandomRow(remain, num);
        const { newRegion, userInfo } = saveUserSeatInfo(region, randomRow, remainNum, num, user);
        this.region = newRegion; // todo delete in function
        remain[remainIndex].num = remain[remainIndex].num - num;
        this.remainSum = this.remainSum - num;
        this.remain = sortRemain(remain, remainIndex);
        return userInfo;
    }

    _handleMultiRows(remain, region, user, num, multiRows) {
        const max = remain[remain.length - 1].num;
        const userInfo = this._handleSignleRow(remain, region, user, max);
        multiRows = [...multiRows, ...userInfo] ;
        if (num - max > 0) {
            const other = this.booking(user, num - max, multiRows);
            if(other === -1) {
                return [];
            }
            multiRows = [...multiRows, ...other];
        }
        return multiRows;
    }
}

// 初始化扇形区域，四个区域放一起进行随机分配
function initSectorRegion() {
    const region = [];
    const remain = [];
    let remainSum = 0;
    const rowLength = (100 - 50) / 2 + 1;
    // const rowLength = 5 - 5 + 1;
    for(let i = 0; i < rowLength * 4; i++) {
        region[i] = [];
        const columnLength = 50 + Math.floor(i / 4) * 2;
        // const columnLength = 5 + Math.floor(i / 4) * 1;
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

function getRandomRow(remain, num) {
    // getRandomMultiRows处理规避了返回值为-1的情况
    const startIndex = search(remain, num, 0, remain.length - 1);
    const randowIndex = Math.floor(Math.random() * (remain.length - 1 - startIndex + 1) + startIndex);
    const randomRow = remain[randowIndex].rowNo;
    return { randomRow, remainIndex: randowIndex, remainNum: remain[randowIndex].num, remainMax: remain[remain.length - 1] };
}

function saveUserSeatInfo(region, rowIndex, remainNum, num, user) {
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

// remain 二分插入保持有序
function sortRemain(remain, index) {
    const target = remain[index];
    const targetIndex = search(remain, target, 0, index); // 传入的index规避了返回值为-1的情况
    remain.splice(index, 1);
    remain.splice(targetIndex, 0 , target);

    return remain;
}

// 找出arr中大于等于target的最小索引值
function search(arr, target, left, right) {
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
        return search(arr, target, index + 1, right);
    }
    if(temp >= target) {
        return search(arr, target, left, index - 1);
    }
}

const REGION_NAME = ['A', 'B', 'C', 'D'];

// export default BookingSystem;

const sys = new BookingSystem();
for(let i = 1; ; i++) {
    const res = sys.booking(`name${i}`, Math.floor(Math.random() * 5 + 1));
    console.log(JSON.stringify(res));
}
