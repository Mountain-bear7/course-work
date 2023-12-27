import React, {FC, useRef, useState} from "react";
import {BsCart3} from "react-icons/bs";
import SquareButton from "../../../../ui/square-button-action/SquareButton";
import styles from "./Cart.module.scss"
import CartItem from "./cart-item/CartItem";
//import {cart} from "../../../../data/cart.data";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import {formatMoney} from "../../../../utilities/format-money";
import {useCart} from "../../../../hooks/useCart";
const Cart: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const btnRef = useRef<HTMLButtonElement>(null)

    const {cart, total} = useCart()

    return(
        <div className={styles['wrapper-cart']}>
            <div className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.badge}>{cart.length}</span>
                <div>
                  <SquareButton Icon={BsCart3} onClick={() => {}}/>
                </div>
            </div>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={() => setIsOpen(false)}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent style={{color: "#c6c6c6"}} bg="#131313">
                    <DrawerCloseButton />
                    <DrawerHeader>My basket</DrawerHeader>

                    <DrawerBody>
                        <div className={styles.cart}>
                            {cart.length ? cart.map(item =>(
                                <CartItem item={item} key={item.id}/>
                            )) : <div className='text-4xl text-center mt-60'>Cart is empty</div>}
                        </div>
                    </DrawerBody>

                    <DrawerFooter
                        justifyContent='space-between'
                        borderTopWidth={1}
                        borderColor={'#909090'}
                    >
                        <div className={styles.footer}>
                            <div>Total: </div>
                            <div>{formatMoney(total)}</div>
                        </div>
                        <Button colorScheme='blue'>Checkout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Cart