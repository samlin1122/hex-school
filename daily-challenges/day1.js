// 題目
// 以下為一段判斷分數是否及格的函式，請嘗試將此函式使用 Promise 語法改寫

const checkScore = (score) => {
  /* 回傳一個 Promise，並執行以下非同步操作*/
  const score = Math.round(Math.random() * 100);
  /* 判斷流程請嘗試使用 setTimeout() 執行 */
  if (score >= 60) {
    console.log(score); // 執行實現方法
  } else {
    console.log("不及格"); // 執行拒絕方法
  }
};

// result
const checkScore_result = () =>
  new Promise((resolve, reject) => {
    const score = Math.round(Math.random() * 100);
    setTimeout(() => {
      if (score >= 60) {
        console.log(score);
        resolve();
      } else {
        console.log("不及格");
        reject();
      }
    }, 3000);
  });

checkScore_result();
