/* eslint-disable jsx-a11y/alt-text */
import '../App.css'
import contactMail from '../assets/contactMail.png';
import contactPhone from '../assets/contactPhone.png';
import contactNetwork from '../assets/contactNetwork.png';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import config from '../config';

const useStyles = makeStyles(() => ({
  button: {
    fontFamily: config.fonts.hiJack,
    fontSize: 25,
    height: 60,
    borderRadius: 5,
    color: config.colors.fifth,
    backgroundColor: config.colors.primary,
    borderColor: config.colors.third,
    width: '25%',
    marginLeft: '75%',
    letterSpacing: 1.5,
    cursor: 'pointer',
    '&:hover': {
      color: config.colors.fourth,
      borderColor: config.colors.fourth,
      fontSize: 28,
    },
  },
  card: {
    display: 'flex',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: `${config.colors.third}DD`,
    padding: 25,
    borderRadius: 15,
    '&:hover': {
      backgroundColor: config.colors.third,
    },
  }
}));

function Contact() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('success');
  const contacts = [{ title: 'Sur les réseaux', icon: contactNetwork, desc: '@instagram/nFacebook/nYoutube'},
                    { title: 'Par téléphone', icon: contactPhone, desc: 'Au +33607080901/nEn semaine de 17h à 21h/nLes week ends de 14h à 19h.'},
                    { title: 'Par Mail', icon: contactMail, desc: 'À demo.contact@gmail.com'}
                  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hdyatho', 'template_rqgj77v', form.current, 'IgMwlPTVrZ8LtJWC3')
      .then((result) => {
        setMessage('Email envoyé !');
        setStatus('success');
        setOpen(true);
        setName('');
        setPhone('');
        setEmail('');
        setBody('');
      }, (error) => {
        setMessage("Problème lors de l'envoi du mail.");
        setStatus('warning');
        setOpen(true);
      });
  };

  return (
    <div style={{ width: '100%', backgroundColor: config.colors.primary, paddingTop: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={() => setOpen(false)}
          severity={status}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      <h1 style={{ textAlign: 'center', color: config.colors.fifth, fontFamily: config.fonts.kenyanCoffee, letterSpacing: 1.7, fontSize: 45, marginTop: 45, marginBottom: 40 }}>Gardons contact !</h1>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'flex-start', justifyContent: 'space-around' }}>
        {
          contacts.map((contact) => (
            <div key={contact.title} className={classes.card}>
              <h1 style={{ textAlign: 'center', color: config.colors.fifth, fontFamily: config.fonts.kenyanCoffee, letterSpacing: 1.7, marginTop: 5, marginBottom: 15 }}>{contact.title}</h1>
              <div style={{ width: 100, marginBottom: 20, height: 100, borderRadius: 100, backgroundColor: config.colors.fourth, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={contact.icon} style={{ height: '90%', width: '90%' }} />
              </div>
              {
                contact.desc.split('/n').map((text) => (
                  <h3 style={{ textAlign: 'center', color: config.colors.fifth, marginTop: 10, fontFamily: config.fonts.kenyanCoffee, fontSize: 24 }}>{text}</h3>
                ))
              }
            </div>
          ))
        }
      </div>
      <div style={{ borderTopWidth: 4, borderBottomWidth: 4, borderColor: config.colors.third, borderStyle: 'solid', borderRightWidth: 0, borderLeftWidth: 0, backgroundColor: config.colors.secondary, borderRadius: 15, width: '80%', marginTop: 35, padding: 35 }}>
        <h1 style={{ backgroundColor: config.colors.third, borderRadius: 20, width: '50%', padding: 10, marginLeft: '25%', textAlign: 'center', color: config.colors.fifth, fontFamily: config.fonts.hiJack, letterSpacing: 1.7, marginTop: 5, marginBottom: 15 }}>Formulaire de contact</h1>
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontFamily: config.fonts.kenyanCoffee, color: config.colors.fifth, padding: 10, fontSize: 25 }}>
            Nom et prénom
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="user_name" style={{ borderRadius: 5, borderColor: config.colors.fourth, borderWidth: 3, fontSize: 20, fontFamily: config.fonts.kenyanCoffee, color: config.colors.primary, marginLeft: 10, padding: 10, width: '30%', marginBottom: 15 }} />
          <label style={{ fontFamily: config.fonts.kenyanCoffee, color: config.colors.fifth, padding: 10, fontSize: 25 }}>
            Telephone
          </label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="user_phone" style={{ borderRadius: 5, borderColor: config.colors.fourth, borderWidth: 3, fontSize: 20, fontFamily: config.fonts.kenyanCoffee, color: config.colors.primary, marginLeft: 10, padding: 10, width: '30%', marginBottom: 15 }} />
          <label style={{ fontFamily: config.fonts.kenyanCoffee, color: config.colors.fifth, padding: 10, fontSize: 25 }}>
            Email
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="user_email" style={{ borderRadius: 5, borderColor: config.colors.fourth, borderWidth: 3, fontSize: 20, fontFamily: config.fonts.kenyanCoffee, color: config.colors.primary, marginLeft: 10, padding: 10, width: '50%', marginBottom: 15 }} />
          <label style={{ fontFamily: config.fonts.kenyanCoffee, color: config.colors.fifth, padding: 10, fontSize: 25 }}>
            Message
          </label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} name="message" style={{ borderColor: config.colors.fourth, borderWidth: 3,fontSize: 25, fontFamily: config.fonts.kenyanCoffee, color: config.colors.primary, marginLeft: 10, marginBottom: 20, padding: 20 }} />
          <input type="submit" value="Envoyer" className={classes.button} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
