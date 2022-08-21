import React from "react";
import { NumberCard } from "../NumberCard/NumberCard";
import { NumberCardProps } from "../NumberCard/NumberCard.props";
import { VersusStatisticsCard } from "../VersusStatisticsCard/VersusStatisticsCard";
import { VersusStatisticsCardProps } from "../VersusStatisticsCard/VersusStatisticsCard.props";
import "./MatchStatistics.css";



export const MatchStatistics = (): JSX.Element => {
    let matchesPlayed: NumberCardProps = { number: 5, text: "Matches Played", measures:"match-statistics-item" };
    let drawmatches: NumberCardProps = { number: 5, text: "Draw", measures:"match-statistics-item"  };
    let wonMatches: VersusStatisticsCardProps = { statistic: "Victories", home: "https://resources.premierleague.com/premierleague/badges/50/t21.png", homeValue: 109, away: "https://resources.premierleague.com/premierleague/badges/50/t34.png", awayValue: 93,measures:"match-statistics-item" };
    let wonMatchesAsHome: VersusStatisticsCardProps = { statistic: "Victories Home", home: "https://resources.premierleague.com/premierleague/badges/50/t21.png", homeValue: 109, away: "https://resources.premierleague.com/premierleague/badges/50/t34.png", awayValue: 93, measures:"match-statistics-item" };
    let wonMatchesAsAway: VersusStatisticsCardProps = { statistic: "Victories Away", home: "https://resources.premierleague.com/premierleague/badges/50/t21.png", homeValue: 0, away: "https://resources.premierleague.com/premierleague/badges/50/t34.png", awayValue: 0, measures:"match-statistics-item" };

    return (

        <React.Fragment>
            <div className="match-statistics-container">
                <NumberCard text={matchesPlayed.text} number={matchesPlayed.number} measures={matchesPlayed.measures}></NumberCard>
                <NumberCard text={drawmatches.text} number={drawmatches.number} measures={drawmatches.measures}></NumberCard>
                <VersusStatisticsCard statistic={wonMatches.statistic} home={wonMatches.home} homeValue={wonMatches.homeValue} away={wonMatches.away} awayValue={wonMatches.awayValue} measures={wonMatches.measures}></VersusStatisticsCard>
                <VersusStatisticsCard statistic={wonMatchesAsHome.statistic} home={wonMatchesAsHome.home} homeValue={wonMatchesAsHome.homeValue} away={wonMatchesAsHome.away} awayValue={wonMatchesAsHome.awayValue} measures={wonMatchesAsHome.measures}></VersusStatisticsCard>
                <VersusStatisticsCard statistic={wonMatchesAsAway.statistic} home={wonMatchesAsAway.home} homeValue={wonMatchesAsAway.homeValue} away={wonMatchesAsAway.away} awayValue={wonMatchesAsAway.awayValue} measures={wonMatchesAsAway.measures}></VersusStatisticsCard>
            </div>
        </React.Fragment>
    )
}