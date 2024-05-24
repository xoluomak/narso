import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import config from "../config";
import Loader from "react-js-loader";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Arrow from "../assets/arrow.svg";
import Card from "./Card";
import commerce from "../lib/commerce";

const Materiel = () => {
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
            if (_category.name === 'Materiel') {
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
    <div style={{ width: '90%', marginLeft: '5%', paddingTop: 90, display: 'flex', flexDirection: 'column' }}>
      <Typography style={{ color: config.colors.fifth, margin: 40, marginBottom: 25, fontFamily: config.fonts.Beyonders, fontSize: 30, width: '95%', textAlign: 'center' }}>
        Materiel
      </Typography>
      {
        products.length === 0 || loading ?
          <div style={{ width: '100%', height: '65vh', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
            <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
            <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"Loading"} size={100} />
            <Loader type="ekvalayzer" bgColor={config.colors.fourth} color={config.colors.fifth} title={"..."} size={100} />
          </div>
          :
          <CarouselWrapper className="carousel-container">
            <CarouselProvider
              visibleSlides={2}
              totalSlides={products.length}
              step={1}
              currentSlide={0}
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              isIntrinsicHeight={true}
            >
              <Wrapper>
                <Slider>
                  {
                    products.map((product) => {
                      return (
                        <Slide index={product.index} className="slide">
                          <Card index={product.index} product={product} />
                        </Slide>
                      );
                    })
                  }
                </Slider>
                <div className="controls">
                  <ButtonBack className="btn-arrow reverse-arrow">
                    <img src={Arrow} alt="back" />
                  </ButtonBack>
                  <DotGroup className="dot-group" />
                  <ButtonNext className="btn-arrow">
                    <img src={Arrow} alt="next" />
                  </ButtonNext>
                </div>
              </Wrapper>
            </CarouselProvider>
          </CarouselWrapper>
      }
    </div>
  );
};

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
      color: ${config.colors.fourth};
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: ${config.colors.fourth};
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: ${config.colors.fourth};
        transition: background 0.4s ease;
      }
    }
  }
`;

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;

export default Materiel;
