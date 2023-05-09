import {FC} from "react";
import {Button, HStack, Input, useNumberInput} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";
//import {useDispatch} from "react-redux";
//import {cartSlice} from "../../../../../../store/slice";
import {ICartItem} from "../../../../../../types/cart-item.interface";
import {useActions} from "../../../../../../hooks/useActions";
import {useCart} from "../../../../../../hooks/useCart";

const CartActions: FC<{item: ICartItem}> = ({item}) => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const {removeFromCart, changeQuantity} = useActions()

    const {cart} = useCart()
    const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

    return(
        // maxW='320px'
        <div className='mt-3'>
            <HStack>
                <Button {...dec}
                        bg='transparent'
                        border='1px solid gray'
                        _hover={{}}
                        fontSize={8}
                        size='sm'
                        onClick={() => changeQuantity({id: item.id, type: 'minus'})}
                        disabled={quantity === 1}
                >
                    <MinusIcon color='white'/>
                </Button>

                <Input {...input}
                       focusBorderColor='gray.300'
                       readOnly
                       _hover={{ cursor: 'default' }}
                       textAlign="center"
                       width='47px'
                       size='md'
                       fontSize={12}
                       value={quantity}
                       //value={cart.find(cartItem => cartItem.id === item.id)?.quantity}
                />

                <Button {...inc}
                        bg='transparent'
                        border='1px solid gray'
                        _hover={{}}
                        fontSize={8}
                        size='sm'
                        onClick={() => changeQuantity({id: item.id, type: 'plus'})}
                >
                    <AddIcon color='white'/>
                </Button>
            </HStack>

            <Button
                variant='outline'
                color='red.500'
                marginTop={5}
                size='sm'
                _hover={{}}
                _active={{ color: '' }}
                onClick={() =>
                    removeFromCart({id: item.id})
                }
            >
                Remove
            </Button>
        </div>
    )
}
export default CartActions