// ## 題目（將答案寫在 **GitHub Repo** 並提交至回報區）
// 請參考[最終作業設計稿](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/grid)，透過 POST API 的 req.body 新增一則貼文，並加上 Schema 欄位資料驗證，可複製或下載此[程式碼](https://github.com/dogwantfly/express-add-post)練習，完成後提交自己的 GitHub Repo
const express = require("express");
const router = express.Router();
const Post = require("./models/post");

router.post("/", async (req, res, next) => {
  try {
    /* 請在此填寫答案 */
    // 取得來自 request body 的資料
    const { body } = req;
    // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
    //                       -> 未填寫 content 欄位 -> 回傳失敗回應
    if (body.content) {
      const newPost = await Post.create(body);
      res.send({ status: "success", data: newPost });
    } else {
      res.status(400).json({
        status: "false",
        message: "欄位未填寫正確，或無此 todo ID",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "false",
      message: "欄位未填寫正確，或無此 todo ID",
    });
  }
});

module.exports = router;
