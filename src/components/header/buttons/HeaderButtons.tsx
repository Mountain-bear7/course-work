import {FC} from "react";
import styles from "./HeaderButtons.module.scss"
import SquareButton from "../../../ui/square-button-action/SquareButton";
import {FiSearch, BsBell} from "react-icons/all";
import Cart from "./cart/Cart";

const HeaderButtons: FC = () => {
    return(
            <div className={styles.headerBtn}>
                <div className=''><SquareButton Icon={FiSearch} onClick={() => {}}/></div>
                <div className='mx-10'><SquareButton Icon={BsBell} onClick={() => {}}/></div>
                <Cart/>
            </div>
        //w-64 ml-36 grid items-center grid-cols-3 pl-7 border-r-2 border-black border-solid h-32
    )
}

export default HeaderButtons