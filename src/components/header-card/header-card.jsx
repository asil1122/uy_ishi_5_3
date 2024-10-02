import React from "react";
import icon from "../../assets/header_icons.svg"
import style from "./header-card.module.scss"

export const Card = () => {
    return (
        <div className="container">
            <ul className={style.ul}>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Amazing views</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Lakefront</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Caves</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">OMG!</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Earth homes</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Treehouses</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Mansions</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Cabins</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Amazing pools</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Islands</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Beachfront</a>
                </li>
                <li className={style.li}> 
                    <img src={icon} alt="icon" />
                    <a className={style.text} href="#">Trending</a>
                </li>
            </ul>
        </div>
    )
}