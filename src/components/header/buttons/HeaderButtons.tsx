import {FC} from "react";
import styles from "./HeaderButtons.module.scss"
import SquareButton from "../../../ui/square-button-action/SquareButton";
import {FiSearch, BsBell, BsCart3} from "react-icons/all";

const HeaderButtons: FC = () => {
    return(
            <div className='w-64 ml-36 grid items-center grid-cols-3 pl-7 border-r-2 border-black border-solid h-32'>
                <SquareButton Icon={FiSearch} onClick={() => {}}/>
                <SquareButton Icon={BsBell} onClick={() => {}}/>
                <SquareButton Icon={BsCart3} onClick={() => {}}/>
            </div>
    )
}

export default HeaderButtons