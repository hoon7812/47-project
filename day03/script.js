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