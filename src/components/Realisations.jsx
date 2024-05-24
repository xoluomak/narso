import React, { useEffect, useRef, useState } from "react";
import config from "../config";
import commerce from '../lib/commerce';
import Loader from "react-js-loader";
import { Button, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Realisations = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");

  const handleChange = (newValue) => {
    setCategory(newValue);
  };

  const fetchProducts = () => {
    setLoading(true);
    commerce.products.list().then((products) => {
      const res = [];
      products.data.forEach(product => {
        if (product.categories) {
          product.categories.forEach(_category => {
            if (_category.name === 'Realisations' || _category.name === 'Beats') {
              if (_category.name.includes(category)) {
                let imgUrl = null;
                product.assets?.forEach(asset => {
                  if (asset.is_image === true) {
                    imgUrl = asset.url;
                  }
                });
                let soundUrl = null;
                product.assets?.forEach(asset => {
                  if (asset.is_image === false) {
                    soundUrl = asset.url;
                  }
                });
                res.push({ ...product, imgUrl, soundUrl });
              }
            }
          });
        }
      });
      setProducts(res);
      setLoading(false);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const audioRef = useRef();

  const playAudio = (url) => {
    currentTrack?.pause();
    if (url !== audioUrl) {
      setAudioUrl(url)
      const tmp = new Audio(url)
      setCurrentTrack(tmp);
      tmp.play();
    } else {
      setAudioUrl('')
    }
  }

  return (
    <div style={{ width: '90%', marginLeft: '5%', paddingTop: 115, minHeight: '70vh' }}>
      <audio src={currentTrack} ref={audioRef} />
      <div style={{ backgroundColor: config.colors.third, borderRadius: 25, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 6, borderLeftWidth: 6, borderStyle: 'solid', borderColor: config.colors.fourth, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button onClick={() => handleChange('')}>
          <Typography style={{ color: category === '' ? config.colors.fourth : config.colors.fifth, fontFamily: config.fonts.SquareGame, letterSpacing: 1.7, fontSize: 27 }}>Tout</Typography>
        </Button>
        <Button onClick={() => handleChange('Realisations')}>
          <Typography style={{ color: 'Realisations' === category ? config.colors.fourth : config.colors.fifth, fontFamily: config.fonts.SquareGame, letterSpacing: 1.7, fontSize: 27 }}>Realisations</Typography>
        </Button>
        <Button onClick={() => handleChange('Beats')}>
          <Typography style={{ color: 'Beats' === category ? config.colors.fourth : config.colors.fifth, fontFamily: config.fonts.SquareGame, letterSpacing: 1.7, fontSize: 27 }}>Beats</Typography>
        </Button>
      </div>
      {
        products.length > 0 && !loading ?
        <div style={{ marginTop: 50, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          {
            products.map((product) => {
              return (
                <div style={{ display: 'flex', minHeight: 200, flexDirection: 'row', width: '85%',  padding: 20, marginBottom: 40, borderRadius: 15, borderWidth: 3, borderRightWidth: 0, borderLeftWidth: 0, borderStyle: 'solid', borderColor: config.colors.fourth, backgroundColor: config.colors.secondary }}>
                  {
                    product.imgUrl !== null ?
                      <div style={{ width: '25%' }}>
                        <img src={product.imgUrl} alt={product.name} style={{ objectFit: 'contain', width: 250, height: 250 }} />
                      </div>
                    : null
                  }
                  <div style={{ display: 'flex', flexDirection: 'column', width: product.imgUrl ? '75%' : '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '30%', paddingLeft: product.imgUrl === null ? 30 : 0 }}>
                      {
                        product.soundUrl !== null ?
                          <IconButton onClick={() => playAudio(product.soundUrl)} aria-label="delete" color={config.colors.fifth} style={{ color: config.colors.primary, backgroundColor: config.colors.fourth, width: 45 ,height: 45, marginRight: 30 }} >
                            {
                              product.soundUrl === audioUrl ?
                                <PauseIcon style={{ width: 35, height: 35 }} />
                              :
                                <PlayArrowIcon style={{ width: 35, height: 35 }} />
                            }
                          </IconButton>
                        : null
                      }
                      {
                        product.inventory?.managed && product.inventory.available === 0 ?
                          <h1 style={{ color: config.colors.fourth, fontFamily: config.fonts.OriginTech, letterSpacing: 1.4, fontSize: 30, marginRight: 20 }}>{"[SOLD]"}</h1>
                        : null
                      }
                      <h2 style={{ color: config.colors.fifth, fontFamily: config.fonts.OriginTech, letterSpacing: 1.4, fontSize: 25 }}>{product.name}</h2>
                    </div>
                    <div style={{ height: '60%', paddingTop: 20, fontFamily: config.fonts.kenyanCoffee, letterSpacing: 1.4, fontSize: 20, color: config.colors.fifth, paddingLeft: product.imgUrl === null ? 50 : 0 }}>
                      <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                    <div style={{ color: config.colors.fifth, fontSize: 10, height: '10%', display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                      <p>{new Date(product.created * 1000).toUTCString()}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
        : 
        <div style={{ width: '100%', height: '68vh', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"Loading"} size={100} />
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
        </div>
      }
    </div>
  );
};

export default Realisations;
