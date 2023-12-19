const ProductsReducer = (state, action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            return {
                ...state, 
                products: action.payload,
                loading: false,
                error: false
            };
        case "FETCH_REVIEWS":
                return {
                    ...state, 
                    reviews: action.payload,
                    loading: false,
                    error: false
                };
        case "FETCH_REVIEWS":
                return {
                        ...state, 
                        reviews: action.payload,
                        loading: false,
                        error: false
                };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case "ADD_TO_Cart":
            return {
                
            }
        default:
            return state;
    }
        
}

export default ProductsReducer;