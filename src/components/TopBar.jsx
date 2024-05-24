/* eslint-disable jsx-a11y/alt-text */
import logo from '../assets/logo.png';
import '../App.css'
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import config from '../config';

const useStyles = makeStyles(() => ({
  button: {
    fontFamily: config.fonts.Beyonders,
    fontSize: 12,
    color: config.colors.fifth,
    letterSpacing: 1.8,
    cursor: 'pointer',
    '&:hover': {
      color: config.colors.fourth,
      fontSize: 13,
    },
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <header style={{ height: 80, zIndex: 300, position: 'fixed', width: '100%', backgroundColor: config.colors.secondary, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 25 }}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <img src={logo} style={{ height: 50, marginLeft: 20 }} />
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '45%', paddingRight: 55 }}>
        <Link to="/services" style={{ textDecoration: 'none' }}>
          <h2 className={classes.button}>Services</h2>
        </Link>
        <Link to="/materiel" style={{ textDecoration: 'none' }}>
          <h2 className={classes.button}>Materiel</h2>
        </Link>
        <Link to="/realisations" style={{ textDecoration: 'none' }}>
          <h2 className={classes.button}>Realisations</h2>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <h2 className={classes.button}>Contact</h2>
        </Link>
      </div>
    </header>
  );
}

export default TopBar;
