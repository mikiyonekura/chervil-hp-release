import React from 'react';
import { Card, CardActions, CardContent, Typography, CardHeader, IconButton, CardMedia, Button } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function BodyCardAd(props) {
    const { id, text, image, ingre, price, onDelete } = props;

    return (
        <Card variant="outlined">
            <CardHeader
                titleTypographyProps={{ variant: 'h6' }}
                style={{ height: "80px" }}
                action={
                    <IconButton aria-label="settings">
                        <StarBorderOutlinedIcon />
                    </IconButton>
                }
                title={text}
            />
            <CardMedia component="img" height="200" image={image} alt={text} />
            <CardContent>
                <Typography variant="body2" style={{ height: "50px" }} component="p">
                    {ingre}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => onDelete(id)}>削除</Button>
                <Button size="small">詳細をみる</Button>
            </CardActions>
        </Card>
    );
}

export default BodyCardAd;
