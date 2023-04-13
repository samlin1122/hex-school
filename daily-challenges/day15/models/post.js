const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    validate: {
      validator: (content) => content.length > 0,
      message: "欄位未填寫正確",
    },
  },
});
/* 加入欄位驗證 */

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
