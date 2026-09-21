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