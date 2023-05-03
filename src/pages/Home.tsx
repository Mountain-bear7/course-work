import {FC} from "react";
import styles from './Home.module.scss'
import Header from "../components/header/Header";
import Content from "../components/content-home/Content";

const Home: FC = () => {
    return(
        <div>
            <Header/>
            <Content/>
        </div>

    )
}

export default Home