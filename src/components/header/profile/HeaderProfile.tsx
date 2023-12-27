import {FC} from "react";
import SquareButton from "../../../ui/square-button-action/SquareButton";
import {BiUser} from "react-icons/bi";

const HeaderProfile: FC = () =>{
    return(
        <div className='flex items-center justify-center ml-60 pl-24 pr-20 border-solid h-32'>
            <SquareButton Icon={BiUser}/>
            <div>
                <div className='text-gray-300 pl-1'>Ruslan Dolukhanov</div>
            </div>
        </div>
    )
}

export default HeaderProfile