import { Grid } from '@material-ui/core'
import React from 'react'

import BodyCard2 from '../todaymenu/BodyCardAd'
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";


function Content2(props) {
    const { taskList, setTaskList} = props;
    console.log(taskList);

    const handleDelete = (idToDelete) => {
        const updatedTaskList = taskList.filter(task => task.id !== idToDelete);
        setTaskList(updatedTaskList);
    };

    const getCardContent = (getObj, index) => {
        return (
            <Grid item xs={12} sm={4} key={index}>
                <BodyCard2 {...getObj} onDelete={handleDelete} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {taskList.map(contentObj => getCardContent(contentObj,uuidv4()))}
        </Grid>
    )
}

export default Content2
