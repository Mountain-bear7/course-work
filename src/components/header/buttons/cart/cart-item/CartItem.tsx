import {FC} from "react";
import {ICartItem} from "../../../../../types/cart-item.interface";
import styles from "../Cart.module.scss"
import CartActions from "./cart-actions/CartActions";
import {formatMoney} from "../../../../../utilities/format-money";
const CartItem: FC<{item: ICartItem}> = ({item}) =>{
    return(
        <div className={styles.item}>
            <img
                src={item.product.images[0]}
                alt={item.product.name}
                width={100}
                height={100}
            />
            <div>
                <div className={styles.name}>{item.product.name}</div>
                <div className={styles.price}>
                    {formatMoney(item.product.price)}
                </div>
                <CartActions item={item}/>
            </div>
        </div>
    )
}
export default CartItem