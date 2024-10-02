import React from "react";
import style from "./header.module.scss"
import logo from "../../assets/logo.svg"
import icon from "../../assets/header_icon.svg"
import icon2 from "../../assets/header_icon2.svg"
import { Card } from "../header-card";

export const Header = () => {

    return (
        <>
        <header className={style.header}>
            <div className="container">
                <div className={style.block}>
                    <img className={style.logo} src={logo} alt="logo" />
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <p className={style.link1}>Anywhere</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.link}>Any week</p>
                        </li>
                        <li className={style.li}>
                            <p className={style.link2}>Add guests</p>
                        </li>
                    </ul>
                    <div className={style.left}>
                        <p className={style.text}>Airbnb your home</p>
                        <img className={style.icon} src={icon} alt="icon" />
                        <img className={style.icon2} src={icon2} alt="icon" />
                    </div>

                </div>
            </div>
        </header>
        <Card/>
        </>
    )
}