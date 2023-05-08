
import React from "react";
import { useState ,useEffect} from "react";
import style from './Scoreboard.module.css'
export default function Scoreboard({currScore,bestScore}){


   
    return(
        <div className={style.scoreboard}>

           <p className={style.currScore}>Current Score: {currScore}</p>
           <p className={style.bestScore}>Best Score: {bestScore}</p>

        </div>
    )

}