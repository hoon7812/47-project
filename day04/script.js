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



const prices = products.map(prod => {
  return prod.price;
});

console.log(prices);

// forEach()
// → 실행

// map()
// → 새로운 배열 생성



const names = products.map(prod => {
   return prod.name;
});

console.log(names);





const newPrices = products.map(prod => {
  return prod.price * 1.1;
});

console.log(newPrices);

//                     forEach()	map()
// 반복 처리	            ✅	      ✅
// 새로운 배열 반환         ❌	        ✅
// 주 용도	            실행/처리	데이터 변환




const productNames = products.map(prod => {
  return `상품: ${prod.name}`;
});

console.log(productNames);







const prices3 = products.map(prod => {
   return `${prod.name} - ${prod.price.toLocaleString()}`
});


console.log(prices3);








const expensiveProducts = products.filter(prod => {
  return prod.price >= 1000000;
});

console.log(expensiveProducts);






const expensiveProducts2 = products.filter(prod => {
  return prod.price > 1200000;
});

console.log(expensiveProducts2);







const result = products
  .filter(prod => {
    return prod.price > 1200000;
  })
  .map(prod => {
    return prod.name;
  });

console.log(result);

// products
//    ↓
// filter()
// 120만원 초과만 남김
//    ↓
// [맥북 객체]
//    ↓
// map()
// name만 뽑음
//    ↓
// ['맥북']


const result2 = products
  .filter(prod => {
    return prod.price >= 1000000;
  })
  .map(prod => {
    return `${prod.name} - ${prod.price.toLocaleString()}원`
  });

console.log(result2);



const result3 = products
  .filter(prod => {
     return prod.price >= 1200000;
  })
  .map(prod => {
    return prod.name;
  });

console.log(result3);






function makeProductText(name, price) {
    return `${name} : ${price.toLocaleString()}원`;
}

const productList = document.querySelector('#productList');

function renderProduct(product) {
    const li = document.createElement('li');

    li.textContent = makeProductText(product.name, product.price);

    productList.appendChild(li);
}

products
  .filter(product => {
    // return product.price >= 1200000;
    // return product.price >= 1000000 && product.name ==- '맥북'; //==는 자료형이 달라도 변환해서 비교하고, ===는 값과 자료형까지 똑같아야 true. 둘 다 맞아야 통과.
    // return product.name === '아이폰' || product.name === '맥북'; //둘 중 하나만 만족해도 됨.
    // return product.price < 1000000 || product.name === '맥북'
    return product.price >= 1000000 && (product.name === '아이폰' || product.name === '갤럭시');
  })
  .forEach(product => {
    renderProduct(product)
  });