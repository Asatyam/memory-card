"use client"
import React from "react";
import style from "./Content.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";
import Container from "../Container/Container"
export default function Content(){

    return (
        <div className={style.content}>
            <Scoreboard/>
            <Container/>
        </div>
    )
}