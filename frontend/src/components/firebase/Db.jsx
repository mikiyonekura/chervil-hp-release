import {db} from './firebase';
import { useEffect, useState } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import Content from '../todaymenu/Content';


function Db({mode}) {
  
  const [posts, setPosts] = useState([]);

  //リロードの時に一回だけ実行
  useEffect(() => {
    //データベースからデータを取得する
    const postData = collection(db, 'posts');
    console.log(postData);

    getDocs(postData).then((snapshot) => {
      //どっちでも取れる
      console.log(snapshot.docs.map((doc) => doc.data()))
      //spread構文は配列を展開
      console.log(snapshot.docs.map((doc) => ({ ...doc.data()})))
      
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data()})))

      //リアルタイムで更新する
      onSnapshot(postData, (snapshot) => {
        console.log(snapshot.docs.map((doc) => ({ ...doc.data()})))
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data()}))) 
      })
      
      
    });

    
  }, []);

  return (
  
    
    <Content mode={mode} posts={posts} />
    


  );
}

export default Db;
