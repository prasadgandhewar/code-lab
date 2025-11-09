const multiDimArray = [[1, 2], [3, 4], [5, 6]];
const oneDimArray = multiDimArray.reduce((acc, val) => acc.concat(val), []);
// oneDimArray will be [1, 2, 3, 4, 5, 6]


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCounts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// fruitCounts will be { apple: 3, banana: 2, orange: 1 }

const users = [{ id: 'a1', name: 'John' }, { id: 'b2', name: 'Jane' }];
const groupUsers = users.reduce((acc, user)=> {
    acc[user.id] = user;
    return acc;
}, {});
/* userMap will be:
    {
      'a1': { id: 'a1', name: 'John' },
      'b2': { id: 'b2', name: 'Jane' }
    }
    */

const asyncOperations = [
    () => Promise.resolve('Step 1'),
    () => Promise.resolve('Step 2'),
    () => Promise.resolve('Step 3'),
];

asyncOperations.reduce((promiseChain, currentOperation) => {
    return promiseChain.then(currentOperation);
}, Promise.resolve())
.then(result => console.log(result)); // Logs 'Step 3' after all operations complete