import React from 'react'
import { useState } from 'react'
import { Grid, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { db } from '../firebase/firebase';
import Db from '../firebase/Db';
import { doc, setDoc } from "firebase/firestore";


const TodayMenuAd = () => {

  //非同期でpostボタンが押されるたびにpost通信を行う
  const handleClick = async (inputText) => {
    try {
      const response = await fetch("/sweats", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nameOfSweats: inputText}),
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
      const image = data.image;
      const price = data.price;
      const ingre = data.ingre;
  
      setTaskList([
        ...taskList, 
        {id: taskList.length,
        text: inputText,
        image: image,
        ingre: ingre,
        price: price,
        }
      ]);


      const docKey = String(taskList.length);  // キーとして使うIDを文字列に変換
      const docRef = doc(db, 'posts', docKey); // 'posts' コレクション内の指定したキーのドキュメント参照を作成
  
      await setDoc(docRef, {
          id: taskList.length,
          text: inputText,
          image: image,
          ingre: ingre,
          price: price,
      });

    } catch (error) {
      console.log(error);
    }



    console.log(taskList);
    //ボタンが押されたらテキストボックスの中身を空にする
    setInputText("");
  };
  
  
  
  //tasklistっていう配列を作って、setTaskListで更新していく
  const [taskList, setTaskList] = useState([]);
  //inputTextっていうtextのチェックポイントを作って、setInputTextで更新していく
  const [inputText, setInputText] = useState("");

  //textがonChangeで変更されるたびに、inputTextに値を入れる
  const handleChange = (e) => {
    //inputTextにその時の値をセットしていく
    setInputText(e.target.value);
    
  };

  //ボタンが押された時の関数
  const handleSubmit = (e) => { 
    handleClick(inputText);
    /*イベントのeでformのたびに際レンダリングされて、
    出力が消えてしまうデフォルトの機能を無効化*/
    e.preventDefault();
    //ボタンが押されたらその時のテキストボックスの中身を表示
    //console.log(inputText);

  };

  return (
    
    <div>

      <h3>管理者画面</h3>

      <Grid container direction="column">
        <Grid item>
          
          <form onSubmit={handleSubmit}>
            <TextField 
              style={{ height: "80px" }}
              label="お菓子の名前"
              variant="outlined"
              value={inputText}
              onChange={handleChange}
           
            />
            <Button variant="contained" style={{ height: "53px" }} endIcon={<SendIcon />}>
              登録
            </Button>
          </form>

        </Grid>

        <Grid item container>
          <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
            {/* <Content2 taskList={taskList} setTaskList={setTaskList} /> */}
              <Db mode='admin'/>
            </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>

    </div>
    
  )
}

export default TodayMenuAd
