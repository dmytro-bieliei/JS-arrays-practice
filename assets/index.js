// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
const concArr1 = [1,2,3];
const concArr2 = [4,5,6];
const concatedArr = concArr1.concat(concArr2);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const revArr = [1,2,3];
const reversedArr = revArr.reverse();

//  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const pushTaskArr = [1,2,3];
const pushedArr = pushTaskArr.push(4,5,6);

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const unshTaskArr = [1,2,3];
const unshiftedArr = unshTaskArr.unshift(4,5,6);

//  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
// shift
const shiftTaskArr = ['js','css','jq'];
const shiftedArr = shiftTaskArr.shift();
//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
// pop
const popTaskArr = ['js','css','jq'];
const popedArr = popTaskArr.pop();

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const sliceTaskArr = [1,2,3,4,5];
const slicedArr = sliceTaskArr.slice(0,3);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const slicedArr1 = sliceTaskArr.slice(3);
const slicedArr2 = sliceTaskArr.slice(-2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const splicedTaskArr1 = [1,2,3,4,5];
const splicedArr1 = splicedTaskArr1.splice(2,1); 
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const splicedTaskArr2 = [1,2,3,4,5];
const splicedArr2 = splicedTaskArr2.splice(1,3);
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const splicedTaskArr3 = [1,2,3,4,5];
const splicedArr3 = splicedTaskArr3.splice(3,0,'a','b','c');
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const splicedTaskArr4 = [1,2,3,4,5];
const splicedArr4 = splicedTaskArr4.splice(1,0,'a','b',);
const splicedArr5 = splicedTaskArr4.splice(-1,0,'c');
const splicedArr6 = splicedTaskArr4.splice(splicedTaskArr4.length,0,'e');

// Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.
const sortTaskArr1 = [3,4,1,2,7];
const sortedArr1 = sortTaskArr1.sort(function(a, b) { return a - b });

// Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
const forEachTaskArr1 = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},	
  {firstName: `Test'ya`, lastName: 'Testovna', age: 16, gender: 'female',},
  {firstName: 'Logina', lastName: `Consol'evna`, age: 42, gender: 'female',} 	
];
const callback = function(value) {
  console.log(`User ${value.firstName}  ${value.lastName} is ${value.gender} ${value.age}  years old`);
};
forEachTaskArr1.forEach(callback);

  // Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).
  const mapTaskArr = [
    {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',},
    {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},	
    {firstName: `Test'ya`, lastName: 'Testovna', age: 16, gender: 'female',},
    {firstName: 'Logina', lastName: `Consol'evna`, age: 42, gender: 'female',} 	
  ];
  const addTelephoneNumber = function (currentElem, index, arr){
    return ;
  };

  // Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
const filterTaskArr = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',},
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},
  {firstName: `Test'ya`, lastName: 'Testovna', age: 16, gender: 'female',},
  {firstName: 'Logina', lastName: `Consol'evna`, age: 42, gender: 'female',},
  {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},
  {firstName: 'Null', lastName: 'Nullovich', gender: 'male'}
];

  // Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
  const flatTaskArr = [
    [1,2,3],
    [10,20,30],
    [100,200,300],
    [1000,2000,3000]
  ];
  const flatedArr = flatTaskArr.flat(flatTaskArr.length);



