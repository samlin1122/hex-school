// ## 題目（將答案寫在 HackMD 並提交至回報區）

// 延續前一天每日任務練習的手搖飲 Schema，建立名稱為 Drink 的 Model，並嘗試新增一筆 document

// 新增 document 內容如下
const document = {
  product: "鮮奶茶",
  price: 55,
  sugar: "微糖",
};

// 提交範例
const Drink = require("./day6");

const drink_1 = new Drink(document);

drink_1
  .save()
  .then(() => {
    console.log("新增資料成功");
  })
  .catch((error) => {
    console.log(error);
  });

// 或另一種方式

Drink.create(document);
