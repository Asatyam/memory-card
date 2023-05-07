
import React from "react";
import { useState } from "react";
import style from './Scoreboard.module.css'
export default function Scoreboard(){

    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return(
        <div className={style.scoreboard}>

           <p className={style.currScore}>Current Score: {currScore}</p>
           <p className={style.bestScore}>Best Score: {bestScore}</p>

        </div>
    )

}