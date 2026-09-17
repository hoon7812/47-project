//객체(Object)란?

const user = {
    name: '철수',
    age: 42,
    job: '웹퍼블리셔',
    city : '서울'
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.job);
console.log(user.city);




const key = 'name';
console.log(user[key]);





user.age = 43;

console.log(user);





user.job = '프론트엔드 개발자';

console.log(user.job);






const users = [
    { name: '철수', age: 25 },
    { name: '영희', age: 35 },
    { name: '민수', age: 42 }
];


console.log(users[0]);
console.log(users[0].name);
console.log(users[1].age);
console.log(users[2].name);




console.log(users[1].name);
console.log(users[2].age);





const result = users.filter(person => person.age >= 40);

console.log(result);






const result2 = users
    .filter(user => user.age >= 30)
    .map(user => user.name);

console.log(result2);





// 배열
//  ↓
// 객체
//  ↓
// 배열 안의 객체
//  ↓
// filter()로 객체 선택
//  ↓
// map()으로 필요한 값 추출


const products = [
    { name: '키보드', price: 50000 },
    { name: '마우스', price: 30000 },
    { name: '모니터', price: 300000 },
    { name: 'USB', price: 10000 }
];


const result3 = products
    .filter(product => product.price >= 50000)
    .map(product => product.name);

console.log(result3);




// map()
// 👉 "각각 바꿔서 새로운 배열 만들어줘"

// filter()
// 👉 "조건에 맞는 것만 골라줘"

// forEach()
// 👉 "하나씩 가져와서 이 작업 해줘"


products.forEach(product => {
    console.log(product.name);
});


// ${}는 문자열 안에 변수 값을 넣는 방법

products.forEach(product => {
    console.log(`${product.name} : ${product.price}원`);
});



// user가 내가 정한 변수명이라는 것
// 객체는 user.name, user.age처럼 접근한다는 것
// 배열 안에 객체를 넣을 수 있다는 것
// filter()로 객체를 골라낼 수 있다는 것
// map()으로 원하는 값만 뽑을 수 있다는 것
// forEach()로 하나씩 작업할 수 있다는 것