import {FC} from "react";
import Header from "../components/header/Header";
import Catalog from "../components/catalog/Catalog";
import {products} from "../data/product.data";

const Shop: FC = () => {
    return(
        <div className='text-white'>
            <Header/>
            <Catalog products={products}/>
        </div>
    )
}
export default Shop