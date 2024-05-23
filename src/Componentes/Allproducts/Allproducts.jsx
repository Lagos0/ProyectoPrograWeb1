import React from "react";
import { Link } from "react-router-dom";
import "./allproducts.css";


const Allproducts = ({ allProductsData}) => {
  return (
    <>
      <section>
        <h1 id="masven"className="page-header">Más vendidos</h1>

        <div className="producto">


            <div className="boxc">
              <div className="colec">

                <div className="img">
                  <img src="/img/shop-items/compu.jpg" alt="product-image" />
                </div>

                <div className="colec">
                <h3>Colección 1</h3>  
                </div>

              </div>
            </div>





            <div className="boxc">
              <div className="colec">

                <div className="img">
                  <img src="/img/shop-items/compu1.jpg" alt="product-image" />
                </div>

                <div className="colec">
                  <h3>Colección 2</h3>
                </div>

              </div>
            </div>




            <div className="boxc">
              <div className="colec">

                <div className="img">
                    <img src="/img/shop-items/compu2.jpg" alt="product-image" />
                </div>

                <div className="colec">
                  <h3>Colección 3</h3>  
                </div>

              </div>
            </div>
        
        



        </div>
      </section>



      
      <div className="productos">
          

        {allProductsData.map((product, index) => {
          return (
            <div className="caja" key={index}>
              <div className="elemento">

                <div >
                  
                  <img src={product.img} />

                </div>

                <div >

                  <h3>{product.name}</h3>

                  <Link to={`/all-products/${product.id}`}>
                    <h5>Learn more</h5>
                  </Link>
    
                </div>
                
              </div>
            </div>
          );
        })}



      </div>

      



      

    </>
  );
};

export default Allproducts;