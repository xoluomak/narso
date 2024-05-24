/* eslint-disable jsx-a11y/alt-text */
import logo from '../assets/logo.png';
import '../App.css'
import config from '../config';

function BottomBar() {
  return (
    <div style={{ backgroundColor: config.colors.secondary, paddingRight: 170, height: 50, marginTop: 50, flexDirection: 'row', paddingLeft: 170, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ backgroundColor: config.colors.primary, width: 20, height: 20 }} />
        <div style={{ backgroundColor: config.colors.secondary, width: 20, height: 20 }} />
        <div style={{ backgroundColor: config.colors.third, width: 20, height: 20 }} />
        <div style={{ backgroundColor: config.colors.fourth, width: 20, height: 20 }} />
        <div style={{ backgroundColor: config.colors.fifth, width: 20, height: 20 }} />
      </div>
      <img src={logo} style={{ height: 35, marginLeft: 20 }} />
      <h6 style={{ color: config.colors.fifth }}>●</h6>
      <h4 style={{ color: config.colors.fifth }}>@instagram</h4>
      <h6 style={{ color: config.colors.fifth }}>●</h6>
      <h4 style={{ color: config.colors.fifth }}>Facebook</h4>
      <h6 style={{ color: config.colors.fifth }}>●</h6>
      <h4 style={{ color: config.colors.fifth }}>mail.contact@gmail.com</h4>
      <h6 style={{ color: config.colors.fifth }}>●</h6>
      <h6 style={{ color: config.colors.fifth }}>developped by Yokkaï</h6>
    </div>
  );
}

export default BottomBar;
