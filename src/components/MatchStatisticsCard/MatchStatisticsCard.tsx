import React from "react";
import { NormalShield } from "../NormalShield/NormalShield";
import { MatchStatisticsCardProps } from "./MatchStatisticsCard.props";
import { NormalNumber } from "../NormalNumber/NormalNumber";
import "./MatchStatisticsCard.css";
import { Subtitle } from "../Subtitle/Subtitle";

export const MatchStatisticsCard = ({  home, away , homeValue, awayValue, measures, date}: MatchStatisticsCardProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className={`match-statistics-card ${measures}`}>
                
                <div className="team">
                    <NormalShield source={home}></NormalShield>
                    <NormalNumber number={homeValue}></NormalNumber>
                    -
                    <NormalNumber number={awayValue}></NormalNumber>
                    <NormalShield source={away}></NormalShield>
                    
                </div>
                <div className="team">
                    <Subtitle text={date.toDateString()} ></Subtitle>
                </div>
            </div>
        </React.Fragment>
    )
}