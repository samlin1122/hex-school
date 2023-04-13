// ## 題目（將答案寫在 HackMD 並提交至回報區）
// 以下為書籍與作者的 collection，請填入對應答案，讓取出單筆書籍資料時，可以關聯至 author 的資料

const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: String,
    introduction: String,
  },
  { versionKey: false }
);

const bookSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.ObjectId, ref: "Author" /*請填入答案*/ },
    title: String,
  },
  { versionKey: false }
);

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);
// 取出所有 books 的資料，關聯 author 欄位並指定顯示 author 資料的 name 欄位
Book.find({ _id: id }).populate({
  path: "author",
  select: "name",
}); /*請填入答案*/
