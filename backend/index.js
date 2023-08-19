const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

// jsonの受け取り
app.use(express.json());


// cors対策
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/TodayMenu");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTION"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  database= [
    {
      id:1,
      name:"クッキー",
      price:"200円",
      ingre:"小麦粉、バター、砂糖、卵、チョコチップ",
      image:"/cookie.png"
    },
    {
      id:2,
      name:"スコーン",
      price:"300円",
      ingre:"小麦粉、バター、砂糖、卵",
      image:"/scone.png"
    },
    {
      id:3,
      name:"マフィン",
      price:"150円",
      ingre:"小麦粉、バター、砂糖、卵、ベーキングパウダー",
      image:"/mafin.png"
    },
    {
      id:4,
      name:"ビスコッティ",
      price:"400円",
      ingre:"小麦粉、バター、砂糖、卵、アーモンド",
      image:"/bisco.png"
    },
  ];


app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});


// postの処理
app.post("/sweats", function (req, res) {
    try {
      console.log("通信きたよー");
      console.log(req.body.nameOfSweats)
      const nameOfSweats = req.body.nameOfSweats;
      //res.json(req.body.nameOfSweets + "の画像を返したいよ")
      //inputされたおかしの名前に一致するものを返す
      res.json(database.find((sweats) => sweats.name === nameOfSweats))
  
    } catch (error) {
      console.log(error);
    }
  });



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})

