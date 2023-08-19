import React from 'react'
import Navigation from "../parts/Navigation";
import Login from './Login';



const Signin = () => {
  return (
    <div className="container">
      
      
      <Navigation />

      <Login />

      {/*
      <Grid container direction="column">
        <Grid item>
          カードを表示してみる
        </Grid>
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Content />

          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
      */}
    </div>

    
  )
}

export default Signin
