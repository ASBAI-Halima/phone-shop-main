import React , {useContext, useState,useEffect} from "react";
import NewsLetter from '../home/NewsLetter';
import Footer from '../home/Footer';
import { Link, useParams} from 'react-router-dom';
import {ProductsContext} from '../../context/ProductsContext';
export default function Details() {
  const { products,getProductById, addToCart} = useContext(ProductsContext); 
  const { id } = useParams();
  const [prodDetails, setProdDetails] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const prod = await getProductById(parseInt(id));
      setProdDetails(prod);
    };
    fetchProduct();
  }, [id, getProductById]);
  if (!prodDetails) {
    return <div>Loading...</div>;
  }
  console.log(prodDetails.title);
  return (
    <>
      {/* -- Products Details -- */}
      <div class="container">
      <section className="section product-details__section">
        <div className="product-detail__container">
          <div className="product-detail__left">
            <div className="details__container--left">
              <div className="product__pictures">
                
              </div>
              <div className="product__picture" id="product__picture">
                <div className="picture__container">
                  <img src={`../../${prodDetails.image}`} alt={prodDetails.title} id="pic" />
                </div>
              </div>
              <div className="zoom" id="zoom"></div>
            </div>

              <div className="product-details__btn">
              
               <button>
                <Link to={`/cart/${prodDetails.id}`} className="add">
                  <span onClick={() => addToCart(prodDetails.id)}>
                    <svg>
                      <use href="./../../../public/images/sprite.svg#icon-cart-plus"></use>
                    </svg>
                  </span>
                  Add To Cart
                      
                  </Link>
                  </button>
                <button>
              <Link to={`/cart/${prodDetails.id}`} className="buy" href="#">
                <span  onClick={() => addToCart(prodDetails.id)}>
                  <svg>
                    <use href="./../../../public/images/sprite.svg#icon-credit-card"></use>
                  </svg>
                </span>
                BUY NOW
                  </Link>
                </button>
            </div>
          </div>

          <div className="product-detail__right">
            <div className="product-detail__content">
              <h3>{prodDetails.title} </h3>
              <div className="price">
                <span className="new__price">${prodDetails.price}</span>
              </div>
              <div className="product__review">
                <div className="rating">
                  <svg>
                    <use href={process.env.PUBLIC_URL + '/images/sprite.svg#icon-star-full'}></use>
                  </svg>
                  <svg>
                    <use href={process.env.PUBLIC_URL + '/images/sprite.svg#icon-star-full'}></use>
                  </svg>
                  <svg>
                    <use href={process.env.PUBLIC_URL + '/images/sprite.svg#icon-star-full'}></use>
                  </svg>
                  <svg>
                    <use href={process.env.PUBLIC_URL + '/images/sprite.svg#icon-star-full'}></use>
                  </svg>
                  <svg>
                    <use href={process.env.PUBLIC_URL + '/images/sprite.svg#icon-star-empty'}></use>
                  </svg>
                </div>
                <a href="#" className="rating__quatity">
                  3 reviews
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a
                doloribus iste natus et facere? dolor sit amet consectetur
                adipisicing elit. Sunt a doloribus iste natus et facere?
              </p>
              <div className="product__info-container">
                <ul className="product__info">
                  <li className="select">
                    <div className="select__option">
                      <label >Color</label>
                      <select name="colors" id="colors" className="select-box">
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                      </select>
                    </div>
                    <div className="select__option">
                      <label>Inches</label>
                      <select name="size" id="size" className="select-box">
                        <option value="6.65">6.65</option>
                        <option value="7.50">7.50</option>
                      </select>
                    </div>
                  </li>
                 

                  <li>
                    <span>Subtotal:</span>
                    <a href="#" className="new__price">
                      ${prodDetails.price}
                    </a>
                  </li>
                  <li>
                    <span>Brand:</span>
                    <a href="#">Apple</a>
                  </li>
                  <li>
                    <span>Product Type:</span>
                    <a href="#">Phone</a>
                  </li>
                  <li>
                    <span>Availability:</span>
                    <a href="#" className="in-stock">
                      In Stock (7 Items)
                    </a>
                  </li>
                </ul>
                <div className="product-info__btn">
                  <a href="#">
                    <span>
                      <svg>
                        <use href="./../../../public/images/sprite.svg#icon-crop"></use>
                      </svg>
                    </span>
                    &nbsp; SIZE GUIDE
                  </a>
                  <a href="#">
                    <span>
                      <svg>
                        <use href="./../../../public/images/sprite.svg#icon-truck"></use>
                      </svg>
                    </span>
                    &nbsp; SHIPPING
                  </a>
                  <a href="#">
                    <span>
                      <svg>
                        <use href="./../../../public/images/sprite.svg#icon-envelope-o"></use>
                      </svg>
                      &nbsp;
                    </span>
                    ASK ABOUT THIS PRODUCT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-detail__bottom">
          

         
        </div>
      </section>
      <NewsLetter/>
        <Footer />
        </div>
    </>
  );
}
