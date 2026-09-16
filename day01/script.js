

// 배열, splice 스터디

const fruits = ['사과', '바나나', '복숭아', '포도', '수박'];

//splice(어디서, 몇 개 삭제, 뭘 넣을지)
fruits.splice(2, 1); //2번 위치에서 1개 삭제해라.;
fruits.splice(2, 1, '딸기'); //2번 위치에서 1개 삭제 복숭아를 딸기로 교체:;
fruits.splice(2, 0, '딸기'); //2번 위치에서 0개 삭제하고 딸기를 넣어라:;

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits.length);




// map 스터디

const result = fruits.map(function (fruit) {
    return fruit + ' 🍎';
});

console.log(fruits);




const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.map(function (number) {
    return number * 2;
});




// 화살표 함수로 변경 가능
const result2 = numbers.map((number) => {
    return number * 2;
});




// 더 줄이기
const result3 = numbers.map(number => number * 2);




console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);






//filter 스터디

//map = 바꾼다, 변환
//filter = 고른다, 선택

const result4 = numbers.filter(number => number >= 3);

console.log(result4);




const users = [
    { name: '철수', age: 25 },
    { name: '영희', age: 35 },
    { name: '민수', age: 42 }
];

const result5 = users.map(user => user.name);

const result6 = users.filter(user => user.age >= 40);

const result7 = users
    .filter(user => user.age >= 40)
    .map(user => user.name);


console.log(result5);
console.log(result6);
console.log(result7);


const numbers2 = [10, 23, 35, 42, 57, 68];
const result8 = numbers2.filter(number => number >= 50);
console.log(result8);




const users2 = [
    { name: '철수', age: 25 },
    { name: '영희', age: 35 },
    { name: '민수', age: 42 },
    { name: '지수', age: 51 }
];

const result9 = users2
    .filter(user => user.age >= 40)
    .map(user => user.name);

console.log(result9);


// 이런 걸 메서드 체이닝(method chaining)
// users2
//     .filter(...)
//     .map(...)

// 배열을 반환하는 메서드 뒤에 또 다른 메서드를 붙이는 방식
