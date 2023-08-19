import React from 'react'
import Button from '@mui/material/Button';

const Sat = () => {
    const sendGet = async () => {
        try {
            const response = await fetch("https://api-chervil-hp-18b4062c5780.herokuapp.com/hello", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error('Fetch failed:', error);
        }
    };

    const total = 0;
    console.log(total)

    


  return (
    <div className='container'>
        <div id = "contents">
            <p>セット販売の組み合わせを自動で生成する機能を作成予定です！</p>
            <div>
                <Button style={{ height: "53px" }} onClick={sendGet} variant="contained" color="primary">
                    お菓子の組み合わせを作る
                </Button>
            </div>


        </div>

    </div>
  )
}

export default Sat
