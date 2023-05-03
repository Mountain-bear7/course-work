import {FC} from "react";
import Carousel from "./carousel/Carousel";
import {IProduct} from "../../types/product.interface";

const Catalog: FC<{products: IProduct[]}> = ({products}) => {
    return(
        <div className='max-w-7xl mx-auto'>
            <Carousel products={products}/>
        </div>
    )
}
export default Catalog