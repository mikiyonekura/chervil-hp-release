import React from 'react'
import { Link } from 'react-router-dom';


import '../../App.css';

//TodayMenu.jsからPropsを受け取る
const SweatsList = ({taskList,setTaskList}) => {
    
    //削除ボタンが押された時の関数
    const handleDelete = (index) => {
        //taskListの中からindexと同じidを持つものを除外する
        //filterは条件に一致したものを除外する(task.id !== index)
        setTaskList(taskList.filter((task) => task.id !== index));
    };

    let path = 1
    
  return (
    <div className='sweats-contents'>

        {/* taskListは[{text: aaa},{}..]みたいに入ってるから,mapでかく{}を
        取り出して,その中のtextにアクセス。小要素にキーの設定も必要 */}
        {taskList.map((task , index)=> (
            

            <div className="sweats-container" key={index}>
                
                <div className="sweats-img">
                    
                    {/*<img src={task.image} alt="sweats"/> */}
                    
    
                    <img src={task.image} alt="menu"/>

              

                </div>
                
                <div className="sweats-text">
                    {/*<img src={menu} alt="menu"/>*/}
                    <div className="text">
                        <p>{task.text}</p>
                        <p>価格: {task.price}</p>
        
                        <p>原材料: {task.ingre}</p>
                     
                    </div>

                    {/*アロー関数を入れることで即座にhandleDeleteが実行されないようにする.
                    実行されると小要素のレンダリング中に親要素の状態を書き換える処理になってしまうので良くない*/}
                    <button onClick={() =>handleDelete(task.id)}>削除</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default SweatsList
