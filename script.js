// 5ელემენტიანი მასივი - მაგათი ჯამის და საშულაო არითმეტიკულის გამოთვლა
const number=[12, 5, 18, 7, 20]

let sum=0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}

const average = sum / number.length;

console.log("ჯამი:", sum);
console.log("საშუალო:", average);

// ობიექტი მოწყობილობის შესახებ //
const device={
    productName: "HP EliteBook 840 G7 (Intel Core i5 vPro)",
    memory: "16GB",
    isAvalaible: [
        "HP Official Store",
         "Amazon",
         "Best Buy"
    ]
};
 const text= `${device.productName} with ${device.memory} memory is available at ${device.isAvalaible[0]}.`
 console.log(text);

 // წიგნის შესახებ //
 const book=[
    { title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი", yearPublished: 1200 },
  { title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი", yearPublished: 1971 },
  { title: "გმირთა ვარამი", author: "ვაჟა-ფშაველა", yearPublished: 1901 }
 ] 

 console.log("წიგნების მასივი:", book);