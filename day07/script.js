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





// day 7
function getProductPrice(targetName) {

    const foundItem = products.find(item => {
        return item.name === targetName;
    });

    if (foundItem) {
       return foundItem.price;
    } 

}



// const price = getProductPrice('맥북');

// if (price === undefined) {
//     console.log('상품이 없습니다.');
// } else if (price >= 1500000) {
//     console.log('비싼 상품');
// } else {
//     console.log('150만원 미만');
// }




// function showProductPrice(targetName) {

//     const price = getProductPrice(targetName);
    
//     if (price === undefined) {
//         console.log('상품이 없습니다.');
//     } else {
//         console.log(price);
//     } 

// }

// showProductPrice('아이폰');



function showProductPrice(targetName) {

    const price = getProductPrice(targetName);

    if (price === undefined) {
        return '상품이 없습니다.';
    } else {
        return price;
    }
}



// const result = showProductPrice('맥북');

// console.log(result + 100000);


const result = showProductPrice('짜장면');

if (result === '상품이 없습니다.') {
    console.log('검색할 상품이 없습니다.');
} else if (result >= 1500000) {
    console.log('비싼 상품');
} else {
    console.log('150만원 미만');
}



const result2 = showProductPrice('아이폰');

if (typeof result2 === 'number') {
    console.log(`${result2.toLocaleString()}원`);
} else {
    console.log(result);
}