import React from "react";
import { Title } from "../../Title/Title";
import { NormalShield } from "../../NormalShield/NormalShield";
import { VersusStatisticsCardProps } from "./VersusStatisticsCard.props";
import { NormalNumber } from "../../NormalNumber/NormalNumber";
import "./VersusStatisticsCard.css";

export const VersusStatisticsCard = ({ statistic, home, away , homeValue, awayValue, measures}: VersusStatisticsCardProps): JSX.Element => {
    let colorHome = homeValue === awayValue ? "" : homeValue > awayValue ? "win" : "lose";
    let colorAway = homeValue === awayValue ? "" : awayValue > homeValue  ? "win" : "lose";

    return (
        <React.Fragment>
            <div className={`card versus-card ${measures}`}>
                <Title text={statistic} />
                <br></br>
                <div className="team">
                    <NormalShield source={home}></NormalShield>
                    <NormalNumber number={homeValue} color={colorHome} ></NormalNumber>
                </div>
                <div className="team">
                    <NormalShield source={away}></NormalShield>
                    <NormalNumber number={awayValue} color={colorAway}></NormalNumber>
                </div>
            </div>
        </React.Fragment>
    )
}