// concat
const concArr1 = [1,2,3];
const concArr2 = [4,5,6];
const concatedArr = concArr1.concat(concArr2);

// reverse
const revArr = [1,2,3];
const reversedArr = revArr.reverse();

// push, unshift
const pushTaskArr = [1,2,3];
const pushedArr = pushTaskArr.push(4,5,6);

const unshTaskArr = [1,2,3];
const unshiftedArr = unshTaskArr.unshift(4,5,6);

// shift
const shiftTaskArr = ['js','css','jq'];
const shiftedArr = shiftTaskArr.shift();

// pop
const popTaskArr = ['js','css','jq'];
const popedArr = popTaskArr.pop();

// slice
const sliceTaskArr = [1,2,3,4,5];
const slicedArr = sliceTaskArr.slice(0,3);

const slicedArr1 = sliceTaskArr.slice(3);
const slicedArr2 = sliceTaskArr.slice(-2);

// splice
const splicedTaskArr1 = [1,2,3,4,5];
const splicedArr1 = splicedTaskArr1.splice(2,1);

const splicedTaskArr2 = [1,2,3,4,5];
const splicedArr2 = splicedTaskArr2.splice(1,3);

const splicedTaskArr3 = [1,2,3,4,5];
const splicedArr3 = splicedTaskArr3.splice(3,0,'a','b','c');

const splicedTaskArr4 = [1,2,3,4,5];
const splicedArr4 = splicedTaskArr4.splice(1,0,'a','b',);
const splicedArr5 = splicedTaskArr4.splice(-1,0,'c');
const splicedArr6 = splicedTaskArr4.splice(splicedTaskArr4.length,0,'e');

// sort
const sortTaskArr1 = [3,4,1,2,7];
const sortedArr1 = sortTaskArr1.sort();

// forEach
const forEachTaskArr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},	
  {firstName: `Test'ya`, lastName: 'Testovna', age: 16, gender: 'female',},
  {firstName: 'Logina', lastName: `Consol'evna`, age: 42, gender: 'female',} 	
];
const callback = function (currentElem, index, arr){
  console.log('firstName: ',currentElem);
  // console.log(`index:  ${index}`);
  // console.log(`array:`);
  // console.log(arr);
};
forEachTaskArr1.forEach(callback);

  // flat
  const flatTaskArr = [
    [1,2,3],
    [10,20,30],
    [100,200,300],
    [1000,2000,3000]
  ];
  const flatedArr = flatTaskArr.flat(flatTaskArr.length);