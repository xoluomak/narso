/* eslint-disable jsx-a11y/alt-text */
import topImage from '../assets/topImage.png';
import presentation1 from '../assets/presentation1.jpeg';
import presentation2 from '../assets/presentation2.jpeg';
import { Parallax } from 'react-parallax';
import '../App.css'
import config from '../config';

function Home() {
  return (
    <div style={{ backgroundColor: config.colors.primary }}>
      <Parallax
        blur={{ min: -55, max: 55 }}
        bgImage={topImage}
        bgImageAlt="Logo"
        style={{ height: '450px', backgroundColor: config.colors.primary }}
        strength={-200}
      >
        <div style={{ height: '100px' }} />
      </Parallax>
      <div style={{ borderTopWidth: 4, borderBottomWidth: 4, borderColor: config.colors.third, borderStyle: 'solid', borderRightWidth: 0, borderLeftWidth: 0, backgroundColor: config.colors.secondary, borderRadius: 15, display: 'flex', flexDirection: 'row', padding: 5, marginBottom: 50, marginLeft: 35, marginRight: 35 }}>
        <div style={{ width: '4px', backgroundColor: config.colors.fourth, marginTop: 20, marginBottom: 20, marginRight: 40, marginLeft: 40 }} />
        <div>
          <p style={{ color: config.colors.fifth, fontFamily: config.fonts.spaceranger, fontSize: 20, letterSpacing: 1.5, zIndex: 5 }}>
            Ceci est un texte générique servant d'exemple de remplissage.
          </p>
          <p style={{ color: config.colors.fifth, fontFamily: config.fonts.spaceranger, fontSize: 20, letterSpacing: 1.5, zIndex: 5 }}>
            Les polices d'écriture peuvent être modifiées à tout moment.
          </p>
          <p style={{ color: config.colors.fifth, fontFamily: config.fonts.spaceranger, fontSize: 20, letterSpacing: 1.5, zIndex: 5 }}>
            Les images, onglets, logos sont adaptable en fonction des besoins.
          </p>
          <p style={{ color: config.colors.fifth, fontFamily: config.fonts.spaceranger, fontSize: 20, letterSpacing: 1.5, zIndex: 5 }}>
            Une charte graphique peut être développée avec logos et palette de couleurs.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: config.colors.primary, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={presentation1}
          bgImageAlt="Illustration"
          style={{ height: '750px', width: '35%', marginLeft: '10%', backgroundColor: config.colors.primary, borderRadius: 15 }}
          strength={-200}
        >
          <div style={{ height: '100px' }} />
        </Parallax>
        <div style={{ width: '55%', paddingBottom: 20, backgroundColor: config.colors.primary, display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
          <div style={{ paddingLeft: 40 }}>
            <p style={{ color: config.colors.fifth, textAlign: 'end', fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Ceci est un texte générique servant d'exemple de remplissage.
            </p>
            <p style={{ color: config.colors.fifth, textAlign: 'end', fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Les polices d'écriture peuvent être modifiées à tout moment.
            </p>
            <p style={{ color: config.colors.fifth, textAlign: 'end', fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Les images, onglets, logos sont adaptable en fonction des besoins.
            </p>
            <p style={{ color: config.colors.fifth, textAlign: 'end', fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Une charte graphique peut être développée avec logos et palette de couleurs.
            </p>
          </div>
          <div style={{ width: '4px', backgroundColor: config.colors.fourth, marginRight: 40, marginLeft: 40 }} />
        </div>
      </div>
      <div style={{ backgroundColor: config.colors.primary, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '55%', paddingBottom: 20, backgroundColor: config.colors.primary, display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
          <div style={{ width: '4px', backgroundColor: config.colors.fourth, marginRight: 40, largniLeft: 40 }} />
          <div style={{ paddingRight: 40 }}>
            <p style={{ color: config.colors.fifth, fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Ceci est un texte générique servant d'exemple de remplissage.
            </p>
            <p style={{ color: config.colors.fifth, fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Les polices d'écriture peuvent être modifiées à tout moment.
            </p>
            <p style={{ color: config.colors.fifth, fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Les images, onglets, logos sont adaptable en fonction des besoins.
            </p>
            <p style={{ color: config.colors.fifth, fontSize: 15, fontFamily: config.fonts.Beyonders, letterSpacing: 1.5, zIndex: 5, padding: 10 }}>
              Une charte graphique peut être développée avec logos et palette de couleurs.
            </p>
          </div>
        </div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={presentation2}
          bgImageAlt="Illustration"
          style={{ height: '750px', width: '35%', marginRight: '10%', backgroundColor: config.colors.primary, borderRadius: 15 }}
          strength={-200}
        >
          <div style={{ height: '100px' }} />
        </Parallax>
      </div>
    </div>
  );
}

export default Home;
