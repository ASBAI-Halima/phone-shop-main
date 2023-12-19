import React, { useContext,useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./../components/home/Index";
import Contact from "./../components/contact/Contact";
import Category from "./../components/category/Category";
import Cart from "./../components/cart/Cart";
import Details from "./../components/details/Details";
import { ProductsContext } from "../context/ProductsContext";
import ScrollToTop from "./../ScrollToTop"




  export default function Routing() {
    const {  productsAddedToCart } = useContext(ProductsContext);
    const subTotal = productsAddedToCart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const [active, setActive] = useState('');
   
  return (
    <div>
      <BrowserRouter>
        {/* -- Header -- */}
        <header id="header" className="header">
          <div className="navigation">
            <div className="container">
              <nav className="nav">
                <div className="nav__hamburger">
                  <svg>
                    {/* <use xlink:href="./images/sprite.svg#icon-menu"></use> */}
                  </svg>
                </div>

                <div className="nav__logo">
                  <a href="/" className="scroll-link">
                    PHONE
                  </a>
                </div>

                <div className="nav__menu">
                  <div className="menu__top">
                    <span className="nav__category">PHONE</span>
                    <a href="#" className="close__toggle">
                      <svg>
                        {/* <use xlink:href="./images/sprite.svg#icon-cross"></use> */}
                      </svg>
                    </a>
                  </div>
                  <ul className="nav__list">
                    <li className="nav__item">
                      
                        <Link to="/" className="nav__link scroll-link">Home</Link>
                     
                    </li>
                    <li className="nav__item">
                      
                        <Link to="/category" className="nav__link scroll-link">Category</Link>
                     
                    </li>
                    <li className="nav__item">
                      <a href="#news" className="nav__link scroll-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav__item">
                      
                        <Link to="/contact" className="nav__link scroll-link">Contact</Link>
                     
                    </li>
                  </ul>
                </div>

                <div className="nav__icons" >
                  <a href="#" className="icon__item" id="login-btn" onClick={() => { setActive(active==="auth"?'':'auth'); }}>
                    <svg className="icon__user">
                      <use href="./images/sprite.svg#icon-user"></use>
                    </svg>
                  </a>

                  <a href="#" className="icon__item" id="search-btn" onClick={() =>  setActive(active==="search"?'':'search')}>
                    <svg className="icon__search">
                      <use href="./images/sprite.svg#icon-search"></use>
                    </svg>
                  </a>

                  <a href="#" className="icon__item" id="cart-btn" onClick={()=>setActive(active==="cart"?'':'cart')}>
                    <svg className="icon__cart">
                      <use href="./images/sprite.svg#icon-shopping-basket"></use>
                    </svg>
                    <span id="cart__total">{ productsAddedToCart.length}</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          {/* -- Hero -- */}

          <div className={`auth  ${active === "auth" ? "active" : ""}`} >
            <form action="" className="login-form">
              <h3>Login Now</h3>
              <input type="email" placeholder="your email" className="box" />
              <input
                type="password"
                placeholder="your password"
                className="box"
              />
              <p>
                forget your password <a href="#">Click Here</a>
              </p>
              <p>
                don't have an account <a href="#">Create now</a>
              </p>
              <input type="submit" value="Login now" className="btn" />
            </form>
          </div>
          <div className={`searchF ${active === "search" ? "active" : ""}`}  >
            <form action="" className="search-form">
              <input
                type="search"
                id="search-box"
                placeholder="Search here.."
              />
              <label for="search-box" className="fas fa-search"></label>
            </form>
          </div>

          <div className={`shopping-cart ${active === "cart" ? "active" : ""}`} onClick={()=>setActive(active==="cart"?'':'cart')} >
          {productsAddedToCart.map((product, index) => (
              <div key={index} className="box">
                <i className="fas fa-trash"></i>
                <img src={`../../${product.image}`}
                  alt={product.title} />
                <div className="content">
                  <h3>{product.title}</h3>
                  <span className="price">${product.price} /</span>
                <span className="quantity">qty : {product.quantity}</span>
                </div>
            </div>
            ))}
             
            <div className="total">Total : ${ subTotal}</div>
            
            <Link to="/allProductCart" className="btn">
                Check out
                </Link>
             
          </div>
        </header>
        {/* -- End Header -- */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/allProductCart" element={<Cart />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        <ScrollToTop/>
      </BrowserRouter>
    </div>
  );
}
