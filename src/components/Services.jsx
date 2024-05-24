import React, { useEffect, useState } from "react";
import config from "../config";
import commerce from '../lib/commerce';
import Loader from "react-js-loader";
import { Typography } from "@mui/material";

const Realisations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    commerce.products.list().then((products) => {
      const res = [];
      let index = 0;
      products.data.forEach(product => {
        if (product.categories) {
          product.categories.forEach(_category => {
            if (_category.name === 'Services') {
              res.push({ ...product, index: index });
              index += 1;
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
  }, []);

  return (
    <div style={{ width: '90%', marginLeft: '5%', paddingTop: 90, minHeight: '70vh' }}>
      <Typography style={{ color: config.colors.fifth, margin: 40, fontFamily: config.fonts.Beyonders, fontSize: 30, width: '95%', textAlign: 'center' }}>
        Services
      </Typography>
      {
        products.length > 0 && !loading ?
        <div style={{ marginTop: 50, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          {
            products.map((product) => {
              if (product.index % 2 === 0) {
                return (
                  <div style={{ display: 'flex', minHeight: 200, flexDirection: 'row', width: '65%',  padding: 20, marginBottom: 40, borderRadius: 15, borderWidth: 3, borderRightWidth: 0, borderLeftWidth: 0, borderStyle: 'solid', borderColor: config.colors.fourth, backgroundColor: config.colors.secondary }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '65%', paddingLeft: 35 }}>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '20%', paddingLeft: product.imgUrl === null ? 30 : 0 }}>
                        <h2 style={{ color: config.colors.fifth, fontFamily: config.fonts.OriginTech, letterSpacing: 1.4, fontSize: 25 }}>{product.name}</h2>
                      </div>
                      <div style={{ height: '70%', paddingTop: 20, fontFamily: config.fonts.kenyanCoffee, letterSpacing: 1.4, fontSize: 20, color: config.colors.fifth, paddingLeft: product.imgUrl === null ? 50 : 0 }}>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                      </div>
                    </div>
                    <div style={{ width: '35%' }}>
                      <img src={product.assets[0].url} alt={product.name} style={{ objectFit: 'contain', width: 250, height: 400 }} />
                    </div>
                  </div>
                );
              }
              return (
                <div style={{ display: 'flex', justifyContent: 'space-between', minHeight: 200, flexDirection: 'row', width: '65%',  padding: 20, marginBottom: 40, borderRadius: 15, borderWidth: 3, borderRightWidth: 0, borderLeftWidth: 0, borderStyle: 'solid', borderColor: config.colors.fourth, backgroundColor: config.colors.secondary }}>
                  <div style={{ width: '35%' }}>
                    <img src={product.assets[0].url} alt={product.name} style={{ objectFit: 'contain', width: 250, height: 400 }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '65%', paddingRight: 35 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '20%' }}>
                      <h2 style={{ width: '100%', textAlign: 'end', color: config.colors.fifth, fontFamily: config.fonts.OriginTech, letterSpacing: 1.4, fontSize: 25 }}>{product.name}</h2>
                    </div>
                    <div style={{ height: '70%', width: '100%', textAlign: 'end', paddingTop: 20, fontFamily: config.fonts.kenyanCoffee, letterSpacing: 1.4, fontSize: 20, color: config.colors.fifth, paddingLeft: product.imgUrl === null ? 50 : 0 }}>
                      <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
        : 
        <div style={{ width: '100%', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"Loading"} size={100} />
          <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
        </div>
      }
    </div>
  );
};

export default Realisations;
