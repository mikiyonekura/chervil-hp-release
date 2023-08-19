import React from 'react'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import  Db  from '../firebase/Db';

const TodayMenu = () => {

  return (
    
    <div>
      
      <h3>本日のメニューはこちらになります</h3>

      <Grid container direction="column">
        
        {/* <Grid item>
          <Link to ="/TodayMenuAd">
          <Button  variant="contained" style={{ height: "40px" }} endIcon={<AdminPanelSettingsIcon />}>
            管理者画面
          </Button>
          </Link>
        </Grid> */}

        <Grid item container>
          
          <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
            {/* <Content2 taskList={taskList}/> */}
              <Db mode='user'/>
            </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>

    </div>
    
  )
}

export default TodayMenu
