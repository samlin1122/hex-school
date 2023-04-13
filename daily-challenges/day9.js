// ## 題目（將答案寫在 HackMD 並提交至回報區）

// 延續 Day6 - 7 每日任務，嘗試修改、刪除手搖飲 documents
// 可下載此[檔案](https://drive.google.com/drive/folders/1oRjCzs3OajeUXVroNO6QS7fNomO1hwZ0?usp=sharing)測試是否可正確更新、刪除單筆資料
const Drink = require("./day6");

// 1. 尋找一筆 document 並將 `ice` 改為 `去冰`，`sugar` 改為 `半糖`
Drink.findByIdAndUpdate(id, { ice: "去冰", sugar: "半糖" });
// 2. 以 ID 尋找一筆 document 並將其刪除
Drink.findByIdAndRemove(id);
// 3. 刪除全部 documents
Drink.deleteMany();
