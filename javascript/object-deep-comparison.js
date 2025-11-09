function compareObject(obj1, obj2) {


    const flatObj1 = convertToFlatObj(obj1);
    const flatObj2 = convertToFlatObj(obj2);

    const res = Object.keys(flatObj1).length == Object.keys(flatObj2).length ? Object.keys(flatObj1).filter((key) => flatObj2[key] && flatObj1[key] === flatObj2[key])
        : [];
    console.log(res);
    return res.length == Object.keys(flatObj1).length
}

console.log(compareObject({ b: '6', a: 'a', c: { d: 'f', h: { r: 4 } }, l: { d: { h: { r: 5 } } } }, { b: '6', a: 'a', c: { d: 'f', h: { r: 4 } }, l: { d: { h: { r: 5 } } } }))


function convertToFlatObj(obj, parentKey, flatObj1 = {}) {

    for (var [key, value] of Object.entries(obj)) {
        let newKey = parentKey ? parentKey + "_" + key : key;
        if (typeof value == 'object') convertToFlatObj(value, newKey, flatObj1)
        else flatObj1[newKey] = value;
    }
    return flatObj1;
}

//console.log(convertToFlatObj({ b: '6', a: 'a', c: { d: 'f', h: { r: 4 } }, l: { d: { h: { r: 5 } } } }));
//console.log(flatObj1);
