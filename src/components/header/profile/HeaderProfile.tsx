import {FC} from "react";
import SquareButton from "../../../ui/square-button-action/SquareButton";
import {BiUser} from "react-icons/all";

const HeaderProfile: FC = () =>{
    return(
        <div className='flex m-auto'>
            <SquareButton Icon={BiUser}/>
            <div>
                <div className='text-gray-300 pt-2 pl-1'>Ruslan Dolukhanov</div>
            </div>
        </div>
    )
}

export default HeaderProfile