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

const productList = document.querySelector('#productList');



function makeProductText(name, price) {
    return `${name} : ${price.toLocaleString()}원`;
}



function renderProduct(product) {
    const li = document.createElement('li');

    li.textContent = makeProductText(product.name, product.price);

    productList.appendChild(li);
}



function showMessage(message) {
    productList.innerHTML = ''; // 검색할때마다 html 비우기
    const li = document.createElement('li');
    li.textContent = message;
    productList.appendChild(li);
}





const productInput = document.querySelector('#productInput'); // html 요소
const searchButton = document.querySelector('#searchButton');



function showProduct(targetName) {

    const foundItem = products.find(item => {
        return item.name === targetName;
    });

    // if (foundItem) {
    //     renderProduct(foundItem);
    // } else {
    //    showMessage('상품이 없습니다.')
    // }

    return foundItem;
    
}



// showProduct() → 상품 찾기만
// return foundItem → 찾은 상품을 밖으로 전달
// const foundItem = showProduct(...) → 결과 받기
// if (foundItem) → 상품이 있는지 확인
// renderProduct(foundItem) → 상품 표시
// showMessage(...) → 없거나 입력이 없을 때 메시지 표시
// productList.innerHTML = '' → 이전 검색 결과 삭제




function hasProduct(targetName) {
    const foundItem = products.find(item => {
        return item.name === targetName;
    });
    if (foundItem) {
        return true;
    } else {
        return false;
    }
}

const result = hasProduct('아이폰');

console.log(result);

// showProduct('아이폰')
// → 상품 객체를 돌려줘.

// 반면 hasProduct()는:
// hasProduct('아이폰')

// → true/false만 돌려줘.
// 즉:
// showProduct → "그 상품이 뭐야?"
// hasProduct  → "그 상품 있어? 없어?"




searchButton.addEventListener('click', () => {

    productList.innerHTML = '';

    if (productInput.value) { // input이 있으면
        // showProduct(productInput.value); // 검색 기능

        //true, false 연습
        // const exists = hasProduct(productInput.value);

        // if (exists) { //제품이 있으면
        //     const foundItem = showProduct(productInput.value);
        //     renderProduct(foundItem);
        // } else { //제품이 없으면
        //     showMessage('상품이 없습니다.');
        // }

        const foundItem = showProduct(productInput.value);

        if (foundItem) {
            renderProduct(foundItem);
        } else {
            showMessage('상품이 없습니다.');
        }

        //showProduct()
        // → 상품 자체를 return

        // hasProduct()
        // → true / false를 return

    }   else { // input이 없으면
        showMessage('검색어를 입력하세요')
    }
    productInput.value = ''; // 검색 후 input 비우기

});
