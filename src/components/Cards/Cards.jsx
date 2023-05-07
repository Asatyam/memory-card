/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Cards.module.css"



export default function Cards({src,name}){

    return(
        <div className={style.card}>
            <img src = {src} alt = {name}/>

        </div>
    )
}