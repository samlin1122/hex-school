// ### 題目（將答案寫在 HackMD 並提交至回報區）

// 延續 Day6 的每日任務，調整手搖飲的 Schema
// - 加入 createdAt 欄位，並設定為隱藏欄位（不會顯示於前端）
// - 隱藏 versionKey 欄位

// 提交範例
const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
  {
    /* 填入 Schema 內容 */
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
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
  },
  {
    /* 填入 options 內容 */
    versionKey: false,
  }
);
module.exports = mongoose.model("Drink", drinkSchema);
