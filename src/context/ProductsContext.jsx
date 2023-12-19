import {createContext , useReducer , useEffect, useState} from 'react';
import ProductsReducer from './ProductsReducer';
const API_URL = 'http://localhost:3000/products';
const API_URL_reviews = 'http://localhost:3000/reviews';
const API_URL_cart = 'http://localhost:3000/cart';

const initialState = {
  products: [],
  reviews: [],
  productsAddedToCart:[],
  loading: true ,
  error: null
}
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children}) =>{
    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const [products , setProducts] = useState([]);
    const [reviews , setReviews] = useState([]);
    const [productsAddedToCart , setProductsAddedToCart] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                setProducts(data);
                dispatch({
                  type: 'FETCH_PRODUCTS',
                  payload: products,
              });
                const response_reviews = await fetch(API_URL_reviews);
                const data_reviews = await response_reviews.json();
                
                setReviews(data_reviews);
                
                dispatch({
                  type: 'FETCH_REVIEWS',
                  payload: reviews,
              });
              const response_cart = await fetch(API_URL_cart);
              const data_cart = await response_cart.json();
              setProductsAddedToCart(data_cart)

            }catch(error){
                dispatch({
                    type: 'SET_ERROR',
                    payload: error.message,
                  });
                  console.log('erreur: '+error);
            }
        };
        fetchProducts();
      },[]);
        const addToCart  = async (productId)=>{
          try {
            // get the product to add to cart
            const product = products.find((p)=> p.id === productId);
            // creat a new product to add to cart
            const item ={
                id: product.id,
                title: product.title,
                image : product.image,
              price: product.price,
              category : product.category,
              quantity: 1,
            };
            // Send a POST request to the server to add the item to the cart
              const response = await fetch(API_URL_cart,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
              });
              if (!response.ok) {
                throw new Error('Failed to add item to cart');
              }
              // Add the item to the local state
            setProductsAddedToCart([...productsAddedToCart, item]);
            


          } catch(error){
            console.log(error);
          }
        };
        const removeFromCart = async (itemId) => {
          try {
            // Send a DELETE request to the server to remove the item from the cart
            const response = await fetch(`${API_URL_cart}/${itemId}`, {
              method: 'DELETE',
            });
            if (!response.ok) {
              throw new Error('Failed to remove item from cart');
            }
            // Update the local state by removing the item from the array
          } catch (error) {
            console.log(error);
          }
        };
        const increaseQuantity = async (itemId) => {
          try {
            // Send a PATCH request to the server to update the quantity of the item in the cart
            const itemToUpdate = productsAddedToCart.find((item) => item.id === itemId);
            const updatedItem = {
              ...itemToUpdate,
              quantity: itemToUpdate.quantity + 1,
            };
            const response = await fetch(`${API_URL_cart}/${itemId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedItem),
            });
            if (!response.ok) {
              throw new Error('Failed to update item quantity in cart');
            }
            // Update the local state by finding the item in the array and replacing it with the updated item
            const updatedCart = productsAddedToCart.map((item) =>
              item.id === itemId ? updatedItem : item
            );
            setProductsAddedToCart(updatedCart);
          } catch (error) {
            console.log(error);
          }
        };
        const decreaseQuantity = async (itemId) => {
          try {
            // Send a PATCH request to the server to update the quantity of the item in the cart
            const itemToUpdate = productsAddedToCart.find((item) => item.id === itemId);
            if (itemToUpdate.quantity === 1) {
              // If the quantity is already 1, remove the item from the cart instead
              await removeFromCart(itemId);
              return;
            }
            const updatedItem = {
              ...itemToUpdate,
              quantity: itemToUpdate.quantity - 1,
            };
            const response = await fetch(`${API_URL_cart}/${itemId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedItem),
            });
            if (!response.ok) {
              throw new Error('Failed to update product quantity in cart');
            }
            // Update the local state by finding the item in the array and replacing it with the updated item
            const updatedCart = productsAddedToCart.map((item) =>
              item.id === itemId ? updatedItem : item
            );
            setProductsAddedToCart(updatedCart);
          } catch (error) {
            console.log(error);
          }
        };
        const getProductById = async  (itemId)=>{
          try {
            const response = await fetch(`${API_URL}/${itemId}`);
            if (!response.ok) {
              throw new Error('Failed to get product');
            }
            const product = await response.json();
            return product;
          } catch (error) {
            console.log(error);
          }
        }
 

    if(!products) return <></>;
    if(!reviews) return <></>;
    
    return (
        <ProductsContext.Provider
          value={{
            products: products,
            reviews : reviews,
            productsAddedToCart:productsAddedToCart,
            loading: state.loading,
            error: state.error,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            getProductById:getProductById
             
             
          }}
        >
          {children}
        </ProductsContext.Provider>
      );
}

