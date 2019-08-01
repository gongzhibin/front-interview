var data = [
    {
        'id': '1',
        'children': [
            {
                'id': '1-1',
                'children': [],
                'value': 'a-1',
            },
            {
                'id': '1-2',
                'children': [],
                'value': 'a-2',
            },
        ],
        'value': 'a',
    },
    {
        'id': '2',
        'children': [
            {
                'id': '2-1',
                'children': [
                    {
                        'id': '2-1-1',
                        'children': [],
                        'value': 'c-1',
                    },
                ],
                'value': 'b-1',
            },
        ],
        'value': 'b',
    },
    {
        'id': '3',
        'children': [
        ],
        'value': 'c',
    },
];

var id = [];
function TraversalObject(obj) {
    for (var attr in obj) {
        if (attr == 'children' && isOwnEmpty(obj[attr])) {
            id.push(obj['id']);
        } else if (typeof (obj[attr]) == 'object') {
            TraversalObject(obj[attr]); //递归遍历
        }
    }
}

/*
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法只既检测对象本身的属性，不检测从原型继承的属性。
 */
function isOwnEmpty(obj) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}
TraversalObject(data);
//修改原data
for (var index = 0; index < id.length; index++) {
    if (id[index].length != 1) {
        insertID = parseInt(id[index].slice(0, 1)) - 1;
        relatedID = id[index];
        //不存在就添加
        if (!data[insertID].relatedID) {
            data[insertID].relatedID = relatedID;
        }
    }
}

console.log(id);

// json和string转换
// JSON.stringify(obj);
// JSON.parse(string);
console.log(JSON.stringify(data));

