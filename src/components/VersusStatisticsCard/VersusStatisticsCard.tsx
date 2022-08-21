import React from "react";
import { Title } from "../Title/Title";
import { NormalShield } from "../NormalShield/NormalShield";
import { VersusStatisticsCardProps } from "./VersusStatisticsCard.props";
import { NormalNumber } from "../NormalNumber/NormalNumber";
import "./VersusStatisticsCard.css";

export const VersusStatisticsCard = ({ statistic, home, away , homeValue, awayValue, measures}: VersusStatisticsCardProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className={`versus-card ${measures}`}>
                <Title text={statistic} />
                <br></br>
                <div className="team">
                    <NormalShield source={home}></NormalShield>
                    <NormalNumber number={homeValue}></NormalNumber>
                </div>
                <div className="team">
                    <NormalShield source={away}></NormalShield>
                    <NormalNumber number={awayValue}></NormalNumber>
                </div>
            </div>
        </React.Fragment>
    )
}