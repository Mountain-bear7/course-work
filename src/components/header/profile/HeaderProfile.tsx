import {FC} from "react";
import SquareButton from "../../../ui/square-button-action/SquareButton";
import {BiUser} from "react-icons/all";

const HeaderProfile: FC = () =>{
    return(
        <div className='flex items-center justify-center ml-40 border-r-2 border-black border-solid h-32'>
            <SquareButton Icon={BiUser}/>
            <div>
                <div className='text-gray-300 pl-1'>Ruslan Dolukhanov</div>
            </div>
        </div>
    )
}

export default HeaderProfile