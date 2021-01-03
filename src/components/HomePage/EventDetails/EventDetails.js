import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './EventDetails.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        // boxShadow: "3px 0 5px 0   gray",
        borderRadius: 10,
    },
    media: {
        height: 225,
    },
    cardContent:{
        background:"#008B8B"
    }
});
const EventDetails = (props) => {
    const { eventName, img , background } = props.event;
    const classes = useStyles();
    return (
        <div className="col-md-3 mb-5 col-sm-6 col-12">
            <div className="event-area">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={`bg-${background} text-light`}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {eventName}
                        </Typography>
                            <Typography variant="body2" color="light" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default EventDetails;