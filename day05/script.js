const products = [
  {
    name: '아이폰',
    price: 1200000
  },
  {
    name: '갤럭시',
    price: 1000000
  },
  {
    name: '맥북',
    price: 1800000
  }
];





function makeProductText(name, price) {
    return `${name} : ${price.toLocaleString()}원`;
}




function renderProduct(product) {
    const li = document.createElement('li');

    li.textContent = makeProductText(product.name, product.price);

    productList.appendChild(li);
}




// filter → 조건에 맞는 것들
// find   → 조건에 맞는 첫 번째 하나를 반환


// find()는 객체 하나를 반환하기 때문에 바로 renderProduct()에 넣을 수 있음.
// renderProduct(product);
// 반면 filter()는 배열을 반환하니까 이렇게 바로 넣으면 안됨.
// renderProduct(products.filter(...)); // ❌




const showIphone = document.querySelector('#showIphone');
const showGalaxy = document.querySelector('#showGalaxy');

// showGalaxy.addEventListener('click', () => {

//     const product = products.find(product => {
//         return product.name === '갤럭시';
//     });

//     renderProduct(product);
// });




// const showProduct = document.querySelector('#showProduct');


// showProduct.addEventListener('click', () => {

//     const product = products.find(product => {
//         return product.name === '갤럭시';
//     });

//     renderProduct(product);
// });







function showProduct(targetName) {

    const foundItem = products.find(item => {
        return item.name === targetName;
    });

    renderProduct(foundItem);
}





showIphone.addEventListener('click', () => {
    showProduct('아이폰');
});

showGalaxy.addEventListener('click', () => {
    showProduct('갤럭시');
});




// querySelector()
// → 버튼 하나

// querySelectorAll()
// → 버튼 여러 개

const productButtons = document.querySelectorAll('[data-name]');

productButtons.forEach(button => {

    button.addEventListener('click', () => {
        console.log(button.dataset.name) // data-name 불러오기
        // console.log(button.dataset.userName) // data-user-name 불러오기 camelCase로 해야함.
        showProduct(button.dataset.name);
    });

});






const productButtons2 = document.querySelectorAll('[data-name2]');

productButtons2.forEach(button => {

    button.addEventListener('click', (event) => {
        // console.log(event.target); // event.target 클릭한 HTML 요소 자체
        // console.log(event.target.dataset.name2); // 그 HTML 요소의 data-name2 값
        const targetName = event.target.dataset.name2;
        showProduct(targetName);
    });

});