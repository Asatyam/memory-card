import React,{useState} from "react";
import style from "./Container.module.css"
import Cards from "../Cards/Cards";
export default function Container(){

    const cards = [{
        id:1,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:2,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:3,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:4,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:5,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:6,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:7,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:8,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:9,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:10,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:11,
        src: "images/pikachu.png",
        name:"pikachu"
    },
    {
        id:12,
        src: "images/pikachu.png",
        name:"pikachu"
    },

    ]
    return(
        <div className={style.container}>
            {cards.map((card)=><Cards key = {card.id} src={card.src} name={card.name}/> )}
        </div>
    )
}