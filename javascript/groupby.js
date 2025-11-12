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