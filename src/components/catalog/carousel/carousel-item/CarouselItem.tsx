import {FC} from "react";
import {IProduct} from "../../../../types/product.interface";
import styles from './Carousel.module.scss'
import {formatMoney} from "../../../../utilities/format-money";
import {useActions} from "../../../../hooks/useActions";

const CarouselItem: FC<{product: IProduct}> = ({product}) => {

    const {addToCart} = useActions()

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
                    Цена: {formatMoney(product.price)}
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.addBtn}
                            onClick={() =>
                                addToCart({
                                    product,
                                    quantity: 1
                                })
                            }
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarouselItem