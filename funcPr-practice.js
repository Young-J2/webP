const cart= [
    {item: "노트북", price: 1200000, quantity: 1},
    {item: "마우스", price: 35000, quantity: 2},
    {item: "키보드", price: 89000, quantity: 1}
];

let totalPrice=0;
for (let i=0; i<cart.length; i++) {
    totalPrice+=cart[i].price*cart[i].quantity;
}
console.log("Total Price:",totalPrice);

totalPrice=0;
cart.forEach(item=> {
    totalPrice+=item.price*item.quantity;
});
console.log("Total Price:", totalPrice);

totalPrice=cart.reduce((acc,item)=> acc+item.price*item.quantity,0);
console.log("Total Price:", totalPrice);

const itemTotals=cart.map(item => ({
    item:item.item,
    total: item.price*item.quantity
}));
console.log("제품별 금액:", itemTotals);

//name convert
const names = ['alice', 'bob', 'charlie'];

// 1. 모든 이름을 대문자로 변환
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); // [ 'ALICE', 'BOB', 'CHARLIE' ]

// 2. 첫 글자만 대문자로 변환
const capitalStartNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalStartNames); // [ 'Alice', 'Bob', 'Charlie' ]

