// 5ელემენტიანი მასივი - მაგათი ჯამის და საშულაო არითმეტიკულის გამოთვლა
const number=[12, 5, 18, 7, 20]

let sum=0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}

const average = sum / number.length;

console.log("ჯამი:", sum);
console.log("საშუალო:", average);

