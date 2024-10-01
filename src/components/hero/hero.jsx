import React from "react";
import { data } from "../../data/data";
console.log(data);

import style from "./hero.module.scss"

export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.block}>
                    {data.map((item) => (
                        <div key={item.id} className={style.item_block}>
                            <img className={style.img} src={item.img} alt="img" />
                            <h2 className={style.title}>{item.title}</h2>
                            <p className={style.des}>{item.des}</p>
                            <p className={style.date}>{item.date}</p>
                            <p className={style.price}>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}