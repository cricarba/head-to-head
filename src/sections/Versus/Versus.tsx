import React from "react";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import { Title } from "../../components/Title/Title";
import './Versus.css'



export const Versus = (): JSX.Element => {
    let imgs: string[] = ["https://resources.premierleague.com/premierleague/badges/50/t20.png",
        "https://resources.premierleague.com/premierleague/badges/50/t1.png",
        "https://resources.premierleague.com/premierleague/badges/50/t94.png",
        "https://resources.premierleague.com/premierleague/badges/50/t11.png",
        "https://resources.premierleague.com/premierleague/badges/50/t91.png",
        "https://resources.premierleague.com/premierleague/badges/50/t3.png"];

    return (
        <React.Fragment>
            <div className="versus-item">
                <Carrousel images={imgs}></Carrousel>
            </div>
            <div className="versus-item">
                <Title text={"VS"} ></Title>
            </div>
            <div className="versus-item">
                <Carrousel images={imgs}></Carrousel>
            </div>
        </React.Fragment >
    )
}