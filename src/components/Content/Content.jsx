"use client"
import React,{useEffect, useState} from "react";
import style from "./Content.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";
import Container from "../Container/Container"

export default function Content(){

        const [currScore, setCurrScore] = useState(0);
        const [bestScore, setBestScore] = useState(0);

    return (
        <div className={style.content}>
            <Scoreboard currScore={currScore} bestScore={bestScore}/>
            <Container setCurrScore = {setCurrScore} setBestScore = {setBestScore}/>
        </div>
    )
}