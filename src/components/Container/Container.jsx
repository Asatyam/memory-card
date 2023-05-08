import React,{useState} from "react";
import style from "./Container.module.css"
import Cards from "../Cards/Cards";
export default function Container(){

    
     let iniCards = [{
        id:1,
        src: "images/pikachu.png",
        name:"pikachu",
        clicked:false,
    },
    {
        id:2,
        src: "images/charizard.png",
        name:"charizard",
        clicked:false,
    },
    {
        id:3,
        src: "images/dialga.png",
        name:"dialga",
        clicked:false,
    },
    {
        id:4,
        src: "images/luxray.png",
        name:"luxray",
        clicked:false,
    },
    {
        id:5,
        src: "images/umbreon.png",
        name:"umbreon",
        clicked:false,
    },
    {
        id:6,
        src: "images/corviknight.png",
        name:"corviknight",
        clicked:false,
    },
    {
        id:7,
        src: "images/yveltal.png",
        name:"yveltal",
        clicked:false,
    },
    {
        id:8,
        src: "images/espurr.png",
        name:"espurr",
        clicked:false,
    },
    {
        id:9,
        src: "images/arceus.png",
        name:"arceus",
        clicked:false,
    },
    {
        id:10,
        src: "images/hydreigon.png",
        name:"hydreigon",
        clicked:false,
    },
    {
        id:11,
        src: "images/darkrai.png",
        name:"darkrai",
        clicked:false,
    },
    {
        id:12,
        src: "images/mewtwo.png",
        name:"mewtwo",
        clicked:false,
    },
    ]
     const [cards, setCards] = useState(iniCards);
     function shuffleArray(cards) {
        let array = cards.slice(0);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            }
    
    return array;
    }


    const handleClick = (e)=>{
        const idx = cards.findIndex((card)=>card.name === e.target.alt);
        setCards(shuffleArray);
    }

    return(
        <div className={style.container}>
            {cards.map((card)=><Cards key = {card.id} src={card.src} name={card.name} handleClick={handleClick}/> )}
        </div>
    )
}