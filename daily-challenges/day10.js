// ## 題目（將答案貼在 HackMD 並提交至回報區）

// 嘗試將此[檔案](https://drive.google.com/drive/folders/1oRjCzs3OajeUXVroNO6QS7fNomO1hwZ0?usp=sharing)的 Model 拆分到 models 資料夾，並引入 server.js 做使用
// 並附上拆分後的 models 程式碼以及將 models 引入 server.js 的程式碼

// 提交範例

// - models 資料夾 - posts.js
const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, "產品名稱未填寫"],
    },
    price: {
      type: Number,
      required: [true, "價錢未填寫"],
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
        enum: ["珍珠", "椰果", "粉條"],
        default: "",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", postsSchema);

// - server.js
const Post = require("./modal/posts");
