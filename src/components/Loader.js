import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
}));

export default function DelayingAppearance(props) {
  const classes = useStyles();
  const timerRef = React.useRef();
  const isLoading = useSelector(state => state.isLoading)

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );


  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        {isLoading === false ? (<>

          {props.children}
        </>
        ) : (
            <Fade
              in={isLoading === true}
              style={{
                transitionDelay: isLoading === true ? '800ms' : '0ms',
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          )}
      </div>
    </div>
  );
}