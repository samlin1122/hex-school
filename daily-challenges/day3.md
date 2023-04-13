## 題目（將答案寫在 HackMD 並提交至回報區）

請建立一個 database（名稱可自定義），並建立一個 `students` collection
將答案依序列在 HackMD 並將連結貼至回報區

```
範例：
1. ...
2. ...
3. ...
4. ...
5. ...
6. ...
```

1. 依以下格式新增一筆 document 到 `students` collection

```jsonld=
  {
    "studentName": "Riley Parker",
    "group": "A",
    "score": 83,
    "isPaid": false
  }
```

範例：

```javascript=
db.students.insertOne({
    "studentName": "Riley Parker",
    "group": "A",
    "score": 83,
    "isPaid": false
})
```

2. 依以下格式一次新增多筆 document 到 `students` collection

```jsonld=
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

3. 查詢 `students` collection 中的所有資料

```javascript!
db.students.find()
```

4. 查詢 `students` collection 中符合 group 屬性為 B 的資料 `使用 { <field>: <value> } 設定符合的項目`

```javascript!
db.students.find({ group: "B" });
```

5. 查詢 `students` collection 中符合分數在 60 分以上的的資料

```javascript!
db.students.find({ score: { $gt: 60 } });
```

6. 查詢 `students` collection 中符合分數在 60 分以下**或是** group 為 B 的資料

```javascript!
db.students.find({ $or: [{ score: { $lt: 60 } }, { group: "B" }] });
```
