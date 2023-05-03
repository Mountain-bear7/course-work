import {FC} from "react";
import styles from "./HeaderMenu.module.scss"
import {Link} from 'react-router-dom'


const HeaderMenu: FC = () => {
    return(
        <div className={styles.menu}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Categories</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderMenu