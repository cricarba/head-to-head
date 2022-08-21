import React from "react";

import { PlayerStatisticsCardProps } from "./PlayerStatisticsCard.props";
import { NormalNumber } from "../NormalNumber/NormalNumber";
import "./PlayerStatisticsCard.css";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";

export const PlayerStatisticsCard = ({ name, lastname, photo, number, statistic, measures }: PlayerStatisticsCardProps): JSX.Element => {
    return (
        <React.Fragment>
           <div className={`player-statistics-card-container ${measures}`}>
            <Title text={statistic} />
            <div className="player-statistics-card">
                <div>
                    <img src={photo} className="player"></img>
                </div>
                <div>
                    <Title text={name} /><br></br>
                    <Subtitle text={lastname} ></Subtitle><br></br>
                    <NormalNumber number={number}></NormalNumber>
                </div>
            </div>

            </div>
        </React.Fragment>
    )
}