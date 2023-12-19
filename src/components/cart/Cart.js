import React, { useContext,useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import NewsLetter from './../home/NewsLetter';
import Footer from './../home/Footer';
import { Link } from 'react-router-dom';

export default function Cart() {
    const [isChecked, setIsChecked] = useState(false);
    const { productsAddedToCart, removeFromCart,increaseQuantity, decreaseQuantity } = useContext(ProductsContext);
    const subTotal = productsAddedToCart.reduce((prev, curr)=>prev+curr.price*curr.quantity,0)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };

    return (
        <>
            <section className="section cart__area" id="section cart__area">
                <div className="container">
                    <div className="responsive__cart-area">
                        <form className="cart__form">
                            <div className="cart__table table-responsive">
                                <table width="100%" className="table">
                                    <thead>
                                        <tr>
                                            <th>PRODUCT</th>
                                            <th>NAME</th>
                                            <th>UNIT PRICE</th>
                                            <th>QUANTITY</th>
                                            <th>TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productsAddedToCart.map((product, index) => (
                                            <tr key={index}>

                                                <td className="product__thumbnail">
                                                    <a href="">
                                                        <img
                                                            className='bannner_01'
                                                            src={`../../${product.image}`}
                                                            alt={product.title} />
                                                    </a>
                                                </td>
                                                <td className="product__name">
                                                    <a href="#">{product.title}</a>
                                                    <br /><br />
                                                    <small>White/6.25</small>
                                                </td>
                                                <td className="product__price">
                                                    <div className="price">
                                                        <span className="new__price">${product.price}</span>
                                                    </div>
                                                </td>
                                                <td className="product__quantity">
                                                    <div className="input-counter">
                                                        <div>
                                                            <span className="minus-btn">

                                                                <button type="button" style={{ backgroundColor: 'white', border: 0 }} onClick={()=> decreaseQuantity(product.id)}>-</button>

                                                            </span>
                                                            <input type="text" value={product.quantity} min="1" max="10" className="counter-btn" />
                                                            <span className="plus-btn">
                                                                <button type="button" style={{ backgroundColor: 'white', border: 0 }} onClick={()=> increaseQuantity(product.id)}>+</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="product__subtotal">
                                                    <div className="price">
                                                        <span className="new__price">${product.price*product.quantity}</span>
                                                    </div>

                                                </td>
                                                <button className="remove__cart-item" onClick={() => removeFromCart(product.id)}>×</button>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                            <div className="cart-btns">
                                <div className="continue__shopping">
                                    <Link to={{ pathname: '/', hash: 'latest' }} >Continue Shopping</Link>
                                </div>
                                <div className="check__shipping">
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                                    <span>Shipping(+7$)</span>
                                </div>
                            </div>

                            <div className="cart__totals">
                                <h3>Cart Totals</h3>
                                <ul>
                                    <li>
                                        Subtotal
                                        <span className="new__price">${subTotal}</span>
                                    </li>
                                    <li>
                                        Shipping
                                        <span>${isChecked?'7':'0'}</span>
                                    </li>
                                    <li>
                                        Total
                                        <span className="new__price">${isChecked? subTotal+7 : subTotal}</span>
                                    </li>
                                </ul>
                                <a href="">PROCEED TO CHECKOUT</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



            <NewsLetter />
            <Footer />
        </>
    )
}
