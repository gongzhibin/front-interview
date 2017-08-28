var data = [
  {
    "id": '1',
    "children": [
      {
        "id": '1-1',
        "children": [],
        "value": "a-1",
      },
      {
        "id": '1-2',
        "children": [],
        "value": "a-2",
      },
    ],
    "value": "a",
  },
  {
    "id": '2',
    "children": [
      {
        "id": '2-1',
        "children": [
          {
            "id": '2-1-1',
            "children": [],
            "value": "c-1",
          },
        ],
        "value": "b-1",
      },
    ],
    "value": "b",
  },
  {
    "id": '3',
    "children": [
    ],
    "value": "c",
  },
];

var id = [];
var relatedID;
function TraversalObject(obj) {
  for (var attr in obj) {
    if (attr == "children" && !obj[attr][0]) {
      id.push[obj["id"]];
    } else if(typeof (obj[attr]) == "object") {
      TraversalObject(obj[attr]); //递归遍历
    }
  }
}

TraversalObject(data);
console.log[id];