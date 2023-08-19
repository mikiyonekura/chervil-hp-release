import { Grid } from '@mui/material';
import React from 'react'
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import BodyCardUser from './BodyCardUser';
import BodyCardAd from './BodyCardAd';
import { db } from '../firebase/firebase.js';
import { doc, deleteDoc } from 'firebase/firestore';


function Content(props) {
    const {mode, posts } = props;
    console.log(posts);

    async function deleteDocumentById(docId) {
        const documentRef = doc(db, 'posts', docId);
        await deleteDoc(documentRef);
    }

    const handleDelete = (idToDelete) => {
        console.log(idToDelete);
        deleteDocumentById(String(idToDelete));

    };

    const getCardContent = (post, index) => {
        return (
            <Grid item xs={12} sm={4} key={index}>
            {mode === 'admin' ? (
                <BodyCardAd {...post} onDelete={handleDelete} />
            ) : (
                <BodyCardUser {...post} onDelete={handleDelete} />
            )}
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {posts.map(post => getCardContent(post,uuidv4()))}
        </Grid>
    )
}

export default Content
