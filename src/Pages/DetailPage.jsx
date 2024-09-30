import "../Style/Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
;
import ProductImage from "../Components/ProductImage";
import Stars from "../Components/Stars";



const DetailPage = () => {
    const { id } = useParams();
   
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
      // Initialize state with a default value of 0
      const [count, setCount] = useState(0);
      const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    
    const decrement = () => {
        setCount(prevCount => prevCount -1);
    };

    const getdata = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(response.data.products || {}); // Ensure product is not undefined
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getdata();
    }, [id]); // Include `id` as a dependency to refetch if `id` changes

    if (loading) return <div>Loading...</div>;
  

    return (
      
          <div>
            
            <div className="container">
                <div className="card mt-4 md">
                    <div className="card-body">
                       
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center">
                                    <ProductImage/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                                <h4 className="box-title mt-5">{product.title}</h4>
                                <p>{product.description || "Product details here."}</p>
                                <h4>{product.category}</h4>
    <h6>Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands. Clothing has significant social factors as well</h6>
  


                                <h2 className="mt-5">
                                    PKR:{product.price || "0"}<small className="text-success">{product.discount ? `(RS:{product.discountPercentage}% off)` : ""}</small>
                                </h2>
                              
                               {/* buton */}

                               <h5 className="mt-3 qts"> Quantity:{count}</h5>   
                             <button
                onClick={increment}
              className="incr"
            >+
            </button>
            <button
                onClick={decrement}
              className="decer"
            >_
            </button>
           
                               <div className="counter-container " style={{ textAlign: 'center', marginTop: '30px' }}>
           

           
        </div>



        <button  className="addto">
            Add To Cart
        </button>
        <Stars/>
       


               

                               
                                <ul className="list-unstyled">
                                    {product.highlights && product.highlights.map((highlight, index) => (
                                        <li key={index}><i className="fa fa-check text-success" />{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                             
                                <div className="table-responsive">
                                    <table className="table table-striped table-product">
                                        <tbody>
                                            {product.generalInfo && Object.entries(product.generalInfo).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td width={390}>{key}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
         
   
    )
}


export default DetailPage;
