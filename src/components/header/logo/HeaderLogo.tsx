import {FC} from "react";
import Column from "../../../ui/grid/Column";
import styles from './HeaderLogo.module.scss'

const HeaderLogo: FC = () => {
    return(
        <Column size={2}>
            <a href="/" className={styles.logoLink}>
                <img src='src/assets/logo.png'
                     width={120}
                     height={120}
                     alt="Eastern cuisine"
                />
                <span className='text-gray-500 text-base tracking-[0.2em]'>
                    <span className='text-white block font-light'>Taste</span>
                    <span className='block font-extralight'>of the</span>
                    <span className='block font-extralight'>East</span>
                </span>
            </a>
        </Column>
    )
}

export default HeaderLogo