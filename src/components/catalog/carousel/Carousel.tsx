import {FC} from "react";
import {IProduct} from "../../../types/product.interface";
import CarouselItem from "./carousel-item/CarouselItem";


const Carousel: FC<{products: IProduct[]}> = ({products}) => {
    return(
        <div className='grid grid-cols-4 gap-8 mt-16'>
            {products.map((product) =>
                <CarouselItem
                    product={product}
                    key={product.id}
                />
            )}
        </div>
    )
}
export default Carousel