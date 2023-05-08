/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Cards.module.css"



export default function Cards({src,name,handleClick}){

    return(
        <div className={style.card} onClick={ handleClick}>
            <img src = {src} alt = {name}/>
        </div>
    )
}