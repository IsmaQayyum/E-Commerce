import axios from "axios"
import { setError, setLoading, setProduct } from "../redux/productSlice";



export const fetchProducts = (page, favouriteToggle) => async (dispatch) => {
    dispatch(setLoading());
  
    try {
      const { data } = await axios.get("http://localhost:3001/products");
      const { products} = data;
      dispatch(setProducts(products));
      
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An expected error has occured. Please try again later"
        )
      );
    }
  };