// ## 題目（將答案貼在 HackMD 並提交至回報區）
// 參考[最終作業設計稿](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/grid)頁面，設計當使用者造訪以下頁面（`GET`）時的路由， response 可先回傳一段簡單的文字即可
// - 登入
// - 註冊
// - 全體動態牆
// - 個人牆
// - 個人追蹤名單

// 範例

app.get("/login", (req, res) => {
  res.send("登入頁");
});
app.get("/signUp", (req, res) => {
  res.send("註冊頁");
});
app.get("/posts", (req, res) => {
  res.send("全體動態牆");
});
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  res.send(`個人牆 - ${id}`);
});
app.get("/posts/:id/following", (req, res) => {
  const { id } = req.params;
  res.send(`個人追蹤名單 - ${id}`);
});
