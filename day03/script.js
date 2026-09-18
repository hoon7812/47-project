const products = [
    { name: '키보드', price: 50000 },
    { name: '마우스', price: 30000 },
    { name: '모니터', price: 300000 },
    { name: 'USB', price: 10000 }
];

const productList = document.querySelector('#productList');


//ex1
// const li = document.createElement('li');

// li.textContent = products[0].name;

// productList.appendChild(li);


//ex2 메서드 체이닝 > filter, foreach 연결
// products
//     .filter(product => product.price >= 50000)
//     .forEach(product => {
//         const li = document.createElement('li');

//         // li.textContent = product.name;
//         li.textContent = `${product.name} : ${product.price.toLocaleString()}원`;  //toLocaleString 숫자 세자리 콤마

//         li.addEventListener('click', () => {
//             // alert(`${product.name} : ${product.price.toLocaleString()}원`);
//             // console.log(product);
//             // li.textContent = '클릭했습니다!';
//             // li.textContent = `${product.name}의 가격은 ${product.price.toLocaleString()}원입니다.`
//             li.remove();
//         });

//         productList.appendChild(li);
//     });

products
    .filter(product => product.price >= 50000)
    .forEach(product => {
        const list = document.createElement('li');
        
        list.textContent = `${product.name} : ${product.price.toLocaleString()}원`

        list.addEventListener('click', () => {
            list.remove();
        }); 

        productList.appendChild(list);
    });


console.log(productList);









function sayHello() {
    console.log('안녕하세요!');
}

sayHello();


function sayHello2(naming) { //naming이 매개변수(parameter)
    console.log(`${naming}님 안녕하세요!`);
}

sayHello2('철수');
sayHello2('영희');



function multiply(a, b) {
    return a * b;
}

const result = multiply(3, 15);

console.log(result);







function makeProductText(name, price) {
    return `${name} : ${price.toLocaleString()}원`;
}



const products2 = makeProductText('키보드', 50000)
console.log(products2);




const products3 = [
    { name: '키보드', price: 70000 },
    { name: '마우스', price: 80000 },
    { name: '모니터', price: 90000 }
];

products3.
    forEach(prod => {
        const li = document.createElement('li');
        li.textContent = makeProductText(prod.name, prod.price);
        productList.appendChild(li);
    });






// 변수에 배열 담음
const products4 = [
    { name: '키보드', price: 10000 },
    { name: '마우스', price: 20000 },
    { name: '모니터', price: 30000 }
];

//html id 저장
const productList2 = document.querySelector('#productList2');


//함수 뭉치 dom 그리기
function renderProduct(product) {
    const li = document.createElement('li');

    li.textContent = makeProductText(product.name, product.price);

    productList2.appendChild(li);
}

//dom 반복문
products4.forEach(prod => {
    if (prod.price >= 20000) { //if 조건식
        renderProduct(prod);
    }
});
    

//아랫줄 추가
renderProduct({
    name: '아이폰 듀오',
    price: 1500000
});




