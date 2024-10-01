import React from 'react'
import style from "./footer.module.scss"


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <div className={style.block}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <p className={style.text}>© 2023 Airbnb, Inc.</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Terms</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Sitemap</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Privacy</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.text}>Your Privacy Choices</p>
                        </li>
                    </ul>
                    <ul className={style.right_ul}>
                        <li className={style.right_li}>
                            <p className={style.right_text}>English (US)</p>
                        </li>
                        <li className={style.right_li}>
                            <p className={style.right_text}>USD</p>
                        </li>
                        <li className={style.right_li}>
                            <p className={style.right_text}>Support & resources</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
