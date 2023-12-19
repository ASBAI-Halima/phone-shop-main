import React ,{ useState , useEffect, useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export default function ProductsList() {
    const { products , addToCart} = useContext(ProductsContext);   
    const [selectedCategory, setSelectedCategory] = useState(products);
    const [category, setCategory]= useState('All Products');
    useEffect(() => {
      if (products && products.length) {
        setSelectedCategory(
          products
        );
      }
    }, [products]);
    
    
  const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

    function handleCategoryChange(category) {
      if(category==='Special Products'){
        setSelectedCategory(
          products.filter((product) => product.category === "Special Products")
        );
        setCategory('Special Products');
      }
      else if(category==='Trending Products'){
        setSelectedCategory(
          products.filter((product) => product.category === "Trending Products")
        );
        setCategory('Trending Products')
      }
      else if(category==='Featured Products'){
        setSelectedCategory(
          products.filter((product) => product.category === "Featured Products")
        );
        setCategory('Featured Products')
      }
      else if('All Products'){
        setSelectedCategory(products);
        setCategory('All Products')
      }
      
    }
  return (
    <>
     {/* -- Latest Products -- */}
      <section className="section latest__products" id="latest">
            <div className="title__container">
          <div className="section__title active" data-id="Latest Products">
            <span className="dot"></span>
            <h1 className="primary__title">Latest Products</h1>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration="1200">
          <div   className="glide" id="glide_2">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides latest-center">
                <Grid>
              {selectedCategory.map((product, index) =>(
                <li key={index} className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                    <Link to={`/details/${product.id}`}>
                      <img src={product.image} alt={product.title} />
                    </Link>
                    </div>
                    <div className="product__footer">
                      <h3>{product.ntitle}</h3>
                      <div className="rating">
                        <svg>
                          <use href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use href="./images/sprite.svg#icon-star-full"></use>
                        </svg>
                        <svg>
                          <use href="./images/sprite.svg#icon-star-empty"></use>
                        </svg>
                      </div>
                      <div className="product__price">
                        <h4>${product.price}</h4>
                      </div>
                      <Link to={`/cart/${product.id}`}>
                        <button onClick={() => addToCart(product.id)} className="product__btn">Add To Cart</button>
                      </Link>
                    </div>
                    <ul>
                      <li>
                      <Link to={`/details/${product.id}`}>
                        <a data-tip="Quick View" data-place="left" >
                          <svg>
                            <use href="./images/sprite.svg#icon-eye"></use>
                          </svg>
                        </a>
                        </Link>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="#">
                          <svg>
                            <use href="./images/sprite.svg#icon-heart-o"></use>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="#">
                          <svg>
                            <use href="./images/sprite.svg#icon-loop2"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
                
                </Grid>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      {/* -- Buttons -- */}
      <section className="category__section section" id="category">
        <div className="tab__list">
          <div className="title__container tabs">
            <div className="section__titles category__titles ">
              <div className={`section__title filter-btn ${category === "All Products" ? "active" : ""}`} data-id="All Products" onClick={() => handleCategoryChange("All Products")}>
                <span className="dot"></span>
                <h1 className="primary__title">All Products</h1>
              </div>
            </div>
            <div className="section__titles">
              <div className={`section__title filter-btn ${category === "Trending Products" ? "active" : ""}`} data-id="Trending Products" onClick={() => handleCategoryChange("Trending Products")}>
                <span className="dot"></span>
                <h1 className="primary__title">Trending Products</h1>
              </div>
            </div>

            <div className="section__titles">
              <div className={`section__title filter-btn ${category === "Special Products" ? "active" : ""}`} data-id="Special Products" onClick={() => handleCategoryChange("Special Products")}>
                <span className="dot"></span>
                <h1 className="primary__title">Special Products</h1>
              </div>
            </div>

            <div className="section__titles">
              <div className={`section__title filter-btn ${category === "Featured Products" ? "active" : ""}`} data-id="Featured Products" onClick={() => handleCategoryChange("Featured Products")}>
                <span className="dot"></span>
                <h1 className="primary__title">Featured Products</h1>
              </div>
            </div>

          </div>
        </div>
        <div className="category__container" data-aos="fade-up" data-aos-duration="1200">
          <div className="category__center"></div>
        </div>
        
      </section>
    </>
  )
}
