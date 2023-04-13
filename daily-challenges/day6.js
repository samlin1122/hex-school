// ## 題目

// 請參考以下需求，設計手搖飲的 Schema
// - 產品名稱（product）: 需為字串,必填，若未填寫，錯誤訊息為「產品名稱未填寫」
// - 價錢（price）: 需為數字, 必填，若未填寫，錯誤訊息為「價錢未填寫」
// - 冰塊（ice）： 需為字串, 若未填寫預設為 '正常冰'
// - 甜度（sugar）：需為字串，若未填寫預設為 '全糖'
// - 配料（toppings）：為陣列，內容需為字串
const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  /* 請在此填入答案 */
  product: {
    type: String,
    required: true,
    validate: {
      validator: (product) => product.length > 0,
      message: "產品名稱未填寫",
    },
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: (price) => price > 0,
      message: "價錢未填寫",
    },
  },
  ice: {
    type: String,
    default: "正常冰",
  },
  sugar: {
    type: String,
    default: "全糖",
  },
  toppings: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Drink", drinkSchema);
