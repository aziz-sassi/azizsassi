import "./productList.css";
import {Product} from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
         Those are some projects i worked on 
         everything you see here was made with love 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img}  link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
