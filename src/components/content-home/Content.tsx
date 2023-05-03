import {FC} from "react";
import styles from './Content.module.scss'
import {Link} from 'react-router-dom'

const Content: FC = () =>{
    return(
        <div>
            <img className={styles.content} src="src/assets/home-bg-4.jpg" alt="home-bg"/>
            <div className='pt-20 relative text-white flex justify-between items-center h-96'>
                <div className={styles.contentRight}>
                    <div className={styles.contentRightTop}>Love is our secret ingredient</div>
                    <div className={styles.contentRightBottom}>That's our philosophy</div>
                </div>
                <div className={styles.contentLeft}>
                    <p>
                        We will bring you the best
                        dishes from many countries in
                        the Middle East. It's a pure thrill
                    </p>
                    <button className={styles.contentBtn}>
                        <Link to="/Shop">Let's order</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content