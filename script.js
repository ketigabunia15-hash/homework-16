// 5ელემენტიანი მასივი - მაგათი ჯამის და საშულაო არითმეტიკულის გამოთვლა
const number = [12, 5, 18, 7, 20];

let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

const average = sum / number.length;

console.log("ჯამი:", sum);
console.log("საშუალო:", average);

// ობიექტი მოწყობილობის შესახებ //
const device = {
  productName: "HP EliteBook 840 G7 (Intel Core i5 vPro)",
  memory: "16GB",
  isAvailableAt: ["HP Official Store", "Amazon", "Best Buy"],
};
const text = `${device.productName} with ${device.memory} memory is available at ${device.isAvailableAt}.`;
console.log(text);

// წიგნის შესახებ //
const book = [
  { title: "ჯინსების თაობა", author: "დათო ტურაშვილი", yearPublished: 2008 },
  { title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი", yearPublished: 1973 },
  { title: "გმირთა ვარამი", author: "ლევან გოთუა", yearPublished: 1991 },
];

console.log("წიგნები:", book);
