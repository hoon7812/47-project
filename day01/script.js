

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






console.log(fruits);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);