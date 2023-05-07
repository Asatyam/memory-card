"use client"
import React from "react";
import style from "./Content.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";
export default function Content(){

    return (
        <div className={style.content}>
            <Scoreboard/>
        </div>
    )
}