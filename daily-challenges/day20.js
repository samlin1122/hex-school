// ## 題目（將答案寫在 HackMD 並提交至回報區）

// 請根據以下情境，回覆 Server 端在 response 中應回傳何種 HTTP 狀態碼

// 回覆範例
// ```
// 1.200
// 2.400
// 3.500
// ...
// ```

// 1. Client 端對 Server 端發出 GET 請求，並且請求的 url 是 Server 端有的，將此資料回傳給 Client
// Ans: 200

// 2. Client 端對 Server 端發出 POST 請求並帶入產品資料，Server 端接收請求後成功新增一筆產品資料到資料庫中，並回傳此產品資料給 Client 端
// Ans: 200, 201
// 201 Created
// 該請求已經成功，並因此創建了一個新的資源。這個通常是在POST請求，或者是某個PUT請求之後返回的響應。

// 3. Client 端對 Server 端發出 POST 請求並帶入產品資料，但帶入的資料格式錯誤，導致 Server 端無法正確處理資料及新增，因此回傳失敗的訊息給 Client
// Ans: 400

// 4. Client 端對 Server 端發出 GET 請求，但因 Server 端發生意外情況導致無法回傳需要的資源給 Client
// Ans: 500

// 5. Client 端對 Server 端發出 GET 請求，但 Server 端沒有與此 url 相符的路由，因此無法將請求資料回傳給 Client
// Ans: 404

// 6. Client 端對 Server 端發出 GET 請求，但請求的 url 需要有相關 Token 驗證，而Server 端未接收到 Token，驗證失敗，因此無法將請求資料回傳給 Client
// Ans: 401
// 狀態代碼代理401 Unauthorized表示客戶端錯誤，指的是由於缺少目標資源需要的身份驗證證明，發送的請求未得到滿足。
