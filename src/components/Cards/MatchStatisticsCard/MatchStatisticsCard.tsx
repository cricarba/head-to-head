import React from "react";
import { NormalShield } from "../../NormalShield/NormalShield";
import { MatchStatisticsCardProps } from "./MatchStatisticsCard.props";
import { NormalNumber } from "../../NormalNumber/NormalNumber";
import "./MatchStatisticsCard.css";
import { Subtitle } from "../../Subtitle/Subtitle";

export const MatchStatisticsCard = ({  home, away , homeValue, awayValue, measures, date}: MatchStatisticsCardProps): JSX.Element => {
    let colorHome = homeValue === awayValue ? "" : homeValue > awayValue ? "win" : "lose";
    let colorAway = homeValue === awayValue ? "" : awayValue > homeValue  ? "win" : "lose";
    return (
        <React.Fragment>
            <div className={`card match-statistics-card ${measures}`}>
                
                <div className="team">
                    <NormalShield source={home}></NormalShield>
                    <NormalNumber number={homeValue} color={colorHome}></NormalNumber>
                    -
                    <NormalNumber number={awayValue} color={colorAway}></NormalNumber>
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