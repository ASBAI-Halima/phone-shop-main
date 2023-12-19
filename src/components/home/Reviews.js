import React, {useContext} from 'react'
import { ProductsContext } from "../../context/ProductsContext";
import Carousel from "react-elastic-carousel";
export default function Reviews() {
    const { reviews} = useContext(ProductsContext);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll:reviews.length},
        { width: 768, itemsToShow: 1},
        { width: 1200, itemsToShow: 1}
      ];
    
  return (
    <>
     {/* -- Testimonial Section -- */}
    <section className="section testimonial" id="testimonial">
      <div className="testimonial__container">
        <div className="glide" id="glide_4">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
            <Carousel 
            breakPoints={breakPoints} 
             
             isInfinite={true}
            enableAutoPlay={true} 
            autoPlaySpeed={5000} // la vitesse de lecture automatique en millisecondes
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
            {reviews.map((review,index) => (
              <li key={index} className="glide__slide">
                <div className="testimonial__box">
                  <div className="client__image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <p>{review.text_review}</p>
                  <div className="client__info">
                    <h3>{review.name}</h3>
                    <span>{review.job}</span>
                    <p>{review.review_text}</p>
                  </div>
                </div>
              </li>
              ))}
              </Carousel>
            </ul>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
            <button className="glide__bullet" data-glide-dir="=3"></button>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
