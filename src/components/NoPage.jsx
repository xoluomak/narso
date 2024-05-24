/* eslint-disable jsx-a11y/alt-text */
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import config from '../config';

const useStyles = makeStyles(() => ({
  button: {
    fontFamily: config.fonts.hiJack,
    fontSize: 25,
    textAlign: 'center',
    color: config.colors.fifth,
    letterSpacing: 1.5,
    cursor: 'pointer',
    '&:hover': {
      color: config.colors.fourth,
      fontSize: 28,
    },
  },
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const NoPage = () => {
  const { height } = useWindowDimensions();
  const classes = useStyles();

  return (
    <div style={{
      backgroundColor: config.colors.primary,
      height: height - 180,
      paddingTop: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
      }}>
        <img src={logo} style={{ maxHeight: 250, maxWidth: 250, height: 'auto', width: 'auto', resize: 'block', marginRight: 40 }} />
        <h1 style={{ color: config.colors.fifth, fontFamily: config.fonts.hiJack }}>404 Not Found.</h1>
      </div>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <h2 className={classes.button}>Retour a l'accueil</h2>
      </Link>
    </div>
  );
};

export default NoPage;
