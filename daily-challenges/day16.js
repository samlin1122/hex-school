// ## 題目（將答案寫在 HackMD 並提交至回報區）

// 延續 Day 15 每日任務，練習取得（GET） 特定貼文資料
// 請在先前每日任務的 express [專案](https://github.com/dogwantfly/express-add-post)使用 express 提供的 req.params 取得貼文 id，並使用 mongoose 尋找符合 id 的資料，最後 response 該特定貼文資料（若 id 不存在可做簡易錯誤處理）

// 例如：例如當 client 端輸入這個[網址](https://www.facebook.com/sfismy/posts/5281803261839276)時，可以 response 該特定貼文資料

// 將 routes/posts.js 中，取得單一貼文的程式碼貼至 HackMD 並提交至回報區

const Post = require("./day15/models/post");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Post.findById(id);
    if (user) {
      res.send({ status: "success", data: user });
    } else {
      res.status(400).send({ status: false, message: "id 不存在" });
    }
  } catch (error) {
    res.status(400).send({ status: false, message: error.message });
  }
});
