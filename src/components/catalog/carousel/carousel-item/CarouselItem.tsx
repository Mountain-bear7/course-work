import {FC} from "react";
import {IProduct} from "../../../../types/product.interface";
import styles from './Carousel.module.scss'

const CarouselItem: FC<{product: IProduct}> = ({product}) => {
    return(
        <div className={styles.wrapper}>
            <div className=''>
                <img
                    className={styles.image}
                    alt={product.name}
                    src={product.images[0]}
                    width={200}
                    height={200}
                />

                <div className={styles.heading}>
                    {product.name}
                </div>

                <div className={styles.description}>
                    {product.description}
                </div>

                <div className={styles.price}>
                    Цена: {product.price} ₽
                </div>
            </div>
        </div>
    )
}
export default CarouselItem