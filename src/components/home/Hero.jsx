import React, { useContext, useState, useEffect , useRef} from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Carousel from "react-elastic-carousel";
import {Link} from 'react-router-dom';
export default function Hero() {
  const { products} = useContext(ProductsContext);
  const [productsTrending, setProductsTrending] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll:productsTrending.length},
    { width: 768, itemsToShow: 1},
    { width: 1200, itemsToShow: 1}
  ];
 
  useEffect(() => {
    if (products && products.length) {
      setProductsTrending(
        products.filter((product) => product.category === "Trending Products")
      );
    }
  }, [products]);

  return (
    <>
      {/* -- Hero -- */}
      <div className="hero">
        <div className="glide" id="glide_1">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <Carousel 
              breakPoints={breakPoints}  
              isInfinite={true}
              enableAutoPlay={true} 
              autoPlaySpeed={8000} // la vitesse de lecture automatique en millisecondes
              enableSwipe={true} // autoriser le glissement tactile pour changer de slide
              transitionMs={1000} // la durée de la transition en millisecondes
              disableArrowsOnEnd={false} // désactiver les flèches de navigation au début/à la fin de la liste
              showArrows={true} // afficher les flèches de navigation
              itemsToScroll={1} // nombre d'éléments à faire défiler
              tiltEasing="ease-out" // l'effet d'inclinaison au survol
              tiltAngleX={10} // l'angle d'inclinaison horizontale
              tiltAngleY={0} // l'angle d'inclinaison verticale
            // personnaliser les flèches de navigation >
              >
                {productsTrending.map((productTrend,index) => (
                  <li key={index} className="glide__slide">
                    <div className="hero__center">
                      <div className="hero__left">
                        <span className="">New Inspiration 2020</span>
                        <h1 className="">PHONES MADE FOR YOU!</h1>
                        <p>
                          Trending from mobile and headphone style collection
                        </p>
                        <Link to={`/details/${productTrend.id}`}>
                          <button className="hero__btn" type="submit">SHOP NOW</button>
                        </Link>
                      </div>
                      
                      <div className="hero__right">
                        <div className="hero__img-container">
                        <Link to={`/details/${productTrend.id}`}>
                          <img
                            className="banner_01"
                            src={productTrend.image}
                            alt={productTrend.title}
                          />
                          </Link>
                        </div>
                      </div>
                     
                      
                    </div>
                  </li>
                ))}
              </Carousel>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
