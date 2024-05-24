import styled from "styled-components";
import config from "../config";

const Card = ({ index, product }) => {

    console.log(product.assets[0]);
  return (
    <CardWrapper style={{ borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 5, borderLeftWidth: 5, borderRadius: 10, borderStyle: 'solid', borderColor: config.colors.fourth }}>
        {
            product.assets[0].image_dimensions.width >= product.assets[0].image_dimensions.height ?
                <div>
                    <div className="image-container">
                        <img src={product.assets[0].url} alt={product.name} />
                    </div>
                    <div className="content">
                        <div className="heading">
                            <h2 className="heading__title">
                                <span style={{ lineHeight: 2, borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: config.colors.primary, padding: 5, paddingLeft: 15, color: config.colors.fifth }} className="next-line">{product.name}</span>
                            </h2>
                        </div>
                        <div className="details">
                            <p className="details__text">
                                <div style={{ color: config.colors.primary, lineHeight: 0.9, fontFamily: config.fonts.mono, letterSpacing: 0.9, fontSize: 18 }} dangerouslySetInnerHTML={{ __html: product.description }} />
                            </p>
                        </div>
                    </div>
                </div>
            :
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="image-container-horizontal">
                        <img src={product.assets[0].url} alt={product.name} />
                    </div>
                    <div className="content-hori">
                        <div className="heading">
                            <h2 className="heading__title">
                                <span style={{ lineHeight: 2, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, backgroundColor: config.colors.primary, padding: 5, paddingLeft: 15, color: config.colors.fontFamily }} className="next-line-hori">{product.name}</span>
                            </h2>
                        </div>
                        <div className="details">
                            <p className="details__text">
                                <div style={{ color: config.colors.primary, lineHeight: 1.4, fontFamily: config.fonts.mono, letterSpacing: 0.9, fontSize: 18 }} dangerouslySetInnerHTML={{ __html: product.description }} />
                            </p>
                        </div>
                    </div>
                </div>
        }
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border-radius: 8px;
  background: #f5f5f6;

  .image-container-horizontal {
    padding: 15px;
    border-radius: 8px 8px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .image-container {
    height: 230px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;

    @media (min-width: 832px) {
      height: 200;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .content-hori {
    padding: 4px 0px 5px;

    .heading {
      .heading__title {
        font-weight: 400;
        font-size: 28px;
        padding-bottom: 5px;
        line-height: 15px;
      }

      .heading__subtitle {
        font-weight: 600;
        font-size: 25px;
        color: #4b4c53;
        padding-bottom: 19px;
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        line-height: 26px;
        color: #4b4c53;
        font-size: 15px;
        word-spacing: 1px;
      }

      .details__btn {
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        word-spacing: -4px;
        color: #6267a1;
      }
    }

    .next-line-hori {
      display: inline-block;
      color: ${config.colors.fifth};
      font-family: ${config.fonts.Beyonders};
      font-size: 16px;
    }

    .next-line {
      display: inline-block;
      color: ${config.colors.primary};
      font-family: ${config.fonts.Beyonders};
      font-size: 16px;
    }
  }

  .content {
    padding: 4px 0px 5px;

    .heading {
      .heading__title {
        font-weight: 400;
        font-size: 28px;
        padding-bottom: 5px;
        line-height: 15px;
      }

      .heading__subtitle {
        font-weight: 600;
        font-size: 25px;
        color: #4b4c53;
        padding-bottom: 19px;
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        line-height: 26px;
        color: #4b4c53;
        font-size: 15px;
        word-spacing: 1px;
        padding-left: 15px;
      }

      .details__btn {
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        word-spacing: -4px;
        color: #6267a1;
      }
    }

    .next-line-hori {
      display: inline-block;
      color: ${config.colors.primary};
      font-family: ${config.fonts.Beyonders};
      font-size: 16px;
    }

    .next-line {
      display: inline-block;
      color: ${config.colors.primary};
      font-family: ${config.fonts.Beyonders};
      font-size: 16px;
    }
  }
`;

export default Card;
