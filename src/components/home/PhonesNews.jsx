import React from "react";
import Carousel from "react-elastic-carousel";
export default function PhonesNews() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 5 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <>
      {/* --New Section  -- */}
      <section className="section news" id="news">
        <div className="container">
          <div className="title__container">
            <div className="section__titles">
              <div className="section__title active">
                <span className="dot"></span>
                <h1 className="primary__title">Phone News</h1>
              </div>
            </div>
          </div>
          <div className="news__container">
            <div className="glide" id="glide_5">
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
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news1.jpg" alt="" />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo praesentium, numquam non provident rem
                            sed minus natus unde vel modi!
                          </p>
                          <a href="#">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news2.jpg" alt="" />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo praesentium, numquam non provident rem
                            sed minus natus unde vel modi!
                          </p>
                          <a href="#">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news3.jpg" alt="" />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo praesentium, numquam non provident rem
                            sed minus natus unde vel modi!
                          </p>
                          <a href="#">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news4.jpg" alt="" />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo praesentium, numquam non provident rem
                            sed minus natus unde vel modi!
                          </p>
                          <a href="#">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="glide__slide">
                      <div className="new__card">
                        <div className="card__header">
                          <img src="./images/news5.jpg" alt="" />
                        </div>
                        <div className="card__footer">
                          <h3>Styling White Shirts After A Cool Day</h3>
                          <span>By Admin</span>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo praesentium, numquam non provident rem
                            sed minus natus unde vel modi!
                          </p>
                          <a href="#">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </li>
                  </Carousel>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
