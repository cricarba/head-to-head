import React from "react";
import { NormalShield } from "../../NormalShield/NormalShield";
import { NextMatchCardProps } from "./NextMatchCard.props";
import "./NextMatchCard.css";
import { Subtitle } from "../../Subtitle/Subtitle";
 

export const NextMatchCard = ({  home, away , measures, date}: NextMatchCardProps): JSX.Element => {
     
    return (
        <React.Fragment>
            <div className={`card match-statistics-card ${measures}`}>
                
                <div className="team">
                    <NormalShield source={home}></NormalShield>
                     VS
                    <NormalShield source={away}></NormalShield>
                    
                </div>
                <div className="team">
                    <Subtitle text={date.toDateString()} ></Subtitle>
                </div>
            </div>
            <br />
        </React.Fragment>
    )
}