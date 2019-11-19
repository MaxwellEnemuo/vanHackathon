import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import useStyles from "./common/jobStyle";
import Button from '@material-ui/core/Button';
import ViewJob from './viewJob';
import jobData from './common/data';
// import {useTransition, animated} from 'react-spring';
// import AbsoluteWrapper from "./absoluteWrapper";


export default function RecipeReviewCard() {
  const classes = useStyles();
  const [viewJ, setViewJ] = React.useState([{heading: 'Click on a job post to view more details.'}]);

  // const transitions = useTransition(viewJ, p => p.id, {
  //   from: { transform: 'translate3d(0,80px,0)' },
  //   enter: { transform: 'translate3d(0,0,0)' },
  //   leave: { transform: 'translate3d(0,20px,0)' },
  // })

  // click to get more details about a job 
  const handleClick = id => {
    const newData = jobData.filter(dem => dem.id === id);
    setViewJ(newData);
  };

  return (
    <React.Fragment>
      <div className="col-4">
        {jobData.map(d => (
          <React.Fragment>
            <Card className={classes.card} onClick={() => handleClick(d.id)}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}> {d.heading.charAt(0)} </Avatar>
                }
                action={
                  <React.Fragment>
                    <IconButton aria-label="settings">
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                    </IconButton>
                    <IconButton aria-label="settings">
                      <Button variant="contained" color="primary" className={classes.button}>
                        Apply
                      </Button>
                    </IconButton>
                  </React.Fragment>
                }
                title={d.heading}
                subheader={d.date}
              />
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                {d.requirements}       
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon style={{title : 'Share job'}} />
                </IconButton>
              </CardActions>
            </Card>
            <br/>
            </React.Fragment>
        ))}
      </div>

        {/* {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}> */}
                {/* <AbsoluteWrapper> */}
                   <ViewJob check={viewJ} />
                {/* </AbsoluteWrapper>
          </animated.div>
        ))} */}
    </React.Fragment>
  );
}
