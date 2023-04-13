// ## 題目（將答案寫在 HackMD 並提交至回報區）

// 在 GET posts 網址列帶入排序及限制筆數的參數
// 並運用 Express 提供的 req.query 取得網址列的參數，將尋找到符合的資料設定排序及呈現指定資料數量

// 提交範例

// routes/posts.js

router.get("/", async function (req, res, next) {
  // 使用三元運算子判斷是否為 asc (由舊至新)，若是則由舊至新排列，否則由新至舊排列
  const timeSort = req.query.timeSort === "asc" ? "1" : "-1";
  // 帶入網址列的參數
  const limit = req.query.limit;
  const post = await Post.find()
    .sort({ createdAt: timeSort })
    .limit(limit); /* 請填入答案 */
  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});
// 可自行建立專案或使用先前提供的[專案](https://github.com/dogwantfly/express-add-post)測試是否正確運作
