function groupByProperty(obj, prop) {
    const result = {};
    for(let p of obj) {
        if(result[p[prop]]) {
            result[p[prop]].push(p);
        } else {
            result[p[prop]] = [p];
        }
        
    }
    return result;
}

const people = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
    ];
console.log(groupByProperty(people, 'age'));


const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
];
const result = users.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {});


// Single liner solution
const result1 = Object.fromEntries(users.map(u => [u.id, u]));


// Output
// {
//   1: { id: 1, name: "A" },
//   2: { id: 2, name: "B" },
//   3: { id: 3, name: "C" }
// }


const data = [
  { category: "fruit", item: "apple" },
  { category: "fruit", item: "banana" },
  { category: "veg", item: "carrot" },
  { category: "veg", item: "beans" }
];
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const groupKey = item[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);
    return acc;
  }, {});
}
const grouped = groupBy(data, "category");
console.log(grouped);

// Single liner solution
const grouped1 = data.reduce((a, c) => ((a[c.category] ??= []).push(c), a), {});


// Output
// {
//   fruit: [
//     { category: "fruit", item: "apple" },
//     { category: "fruit", item: "banana" }
//   ],
//   veg: [
//     { category: "veg", item: "carrot" },
//     { category: "veg", item: "beans" }
//   ]
// }


const grouped2 = Object.groupBy(data, obj => obj.category);

Object.groupBy(["apple", "banana", "avocado"], x => x[0]);
