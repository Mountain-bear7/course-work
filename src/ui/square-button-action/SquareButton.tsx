import {FC} from "react";
import {IconType} from "react-icons";

interface ISquareButton {
    Icon: IconType
    onClick?: () => void
}
const SquareButton: FC<ISquareButton> = ({Icon, onClick}) => {
    return(
        <div>
            <button onClick={onClick} className='h-10 w-10 bg-black flex items-center justify-center hover:bg-[#1c1c1c] hover:transition-all'>
                <Icon color='#7d7d7d' size={21}/>
            </button>
        </div>
    )
}

export default SquareButton