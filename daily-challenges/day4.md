## 題目（將答案寫在 HackMD 並提交至回報區）

若尚未做前一天的每日任務，需先建立一個 database（名稱可自定義），並建立一個 `students` collection
將以下資料新增至 `students` collection（若已做完前一天的每日任務，可繼續沿用已建立的 `students` collection）

```jsonld=
{
  "studentName": "Riley Parker",
  "group": "A",
  "score": 83,
  "isPaid": false
},
{
  "studentName": "Brennan Miles",
  "group": "C",
  "score": 72,
  "isPaid": false
},
{
  "studentName": "Mia Diaz",
  "group": "B",
  "score": 98,
  "isPaid": true
},
{
  "studentName": "Caroline morris",
  "group": "B",
  "score": 55,
  "isPaid": false
},
{
  "studentName": "Beverly Stewart",
  "group": "B",
  "score": 60,
  "isPaid": false
}
```

將答案依序列在自己的 HackMD 並將連結貼至回報區

```
範例：
1. ...
2. ...
3. ...
4. ...
```

1. 指定其中一個 `_id` ，並將該筆 document 的 `group` 改為 `D`

```javascript!
db.students.updateOne({ _id: ObjectId(id) }, { $set: { group: "D" } });
```

2. 將 `group` 為 `B` 的多筆 document 的 `isPaid` 改為 `true`

```javascript!
db.students.updateMany({ group: 'B' }, { $set: { isPaid: true } });
```

3. 將 `studentName` 包含關鍵字 `Brennan` 的 document 刪除

```javascript!
db.students.deleteMany({ studentName: /Brennan/ })
```

4. 將 `isPaid` 為 `true` 的多筆 document 刪除

```javascript!
db.students.deleteMany({ isPaid: true })
```
