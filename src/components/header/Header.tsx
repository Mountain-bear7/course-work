import {FC} from "react";
import styles from "./Header.module.scss"
import HeaderLogo from "./logo/HeaderLogo";
import HeaderMenu from "./menu/HeaderMenu";
import HeaderButtons from "./buttons/HeaderButtons";
import HeaderProfile from "./profile/HeaderProfile";

const Header: FC = () => {
    return(
        <div>
            <header className={styles.header}>
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderProfile/>
                <HeaderButtons/>
            </header>
        </div>
    )
}

export default Header
