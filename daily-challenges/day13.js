// ## 題目（將答案寫在 HackMD 並提交至回報區）
// 此[專案](https://github.com/dogwantfly/express-user)為使用 express generater 產生的結構，請嘗試在此 routes 資料夾的 users.js，設計新增及修改個人資料的路由（搭配動態路由），在註解處填上答案（可使用 POSTMAN 測試是否可正確運作），完成後將 users.js 的程式碼貼到 HackMD 並提交至回報區const express = require("express");

const router = express.Router();
const User = require("../models/users");
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const allUser = await User.find();
  res.status(200).json({
    status: "success",
    data: allUser,
  });
});
router.delete("/", async (req, res, next) => {
  await User.deleteMany({});
  res.status(200).json({
    status: "success",
    data: "",
  });
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    let { nickName, gender, avatar } = data;
    if (!nickName || !gender) {
      // 回傳失敗
      res.status(400).send({ status: false, message: "使用者資料未填寫完整" });
    } else {
      // 新增至 User model
      const data = await User.create({ nickName, gender, avatar });
      // 回傳成功
      res.send({ status: "success", data });
    }
  } catch (error) {
    // 回傳失敗
    res.status(400).send({ status: false, message: "使用者資料未填寫完整" });
  }
});

// 修改
router.patch("/:id", async (req, res, next) => {
  try {
    // 取得 id
    const { id } = req.params;
    const data = req.body;
    let { nickName, gender, avatar } = data;
    if (!nickName || !gender) {
      // 回傳失敗 "使用者資料未填寫完整"
      res.status(400).send({ status: false, message: "使用者資料未填寫完整" });
    } else {
      const editContent = {
        nickName,
        gender,
      };
      // 找出此筆 id 並編輯資料
      const editUser = await User.findByIdAndUpdate(id, editContent);

      if (editUser) {
        // 回傳成功
        res.send({ status: "success", data: editUser });
      } else {
        // 回傳失敗 "id 不存在"
        res.status(400).send({ status: false, message: "id 不存在" });
      }
    }
  } catch (error) {
    // 回傳失敗
    res.status(400).send({ status: false, message: error.message });
  }
});

module.exports = router;
