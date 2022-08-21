import React from "react";
import { MatchStatisticsCard } from "../MatchStatisticsCard/MatchStatisticsCard";
import { MatchStatisticsCardProps } from "../MatchStatisticsCard/MatchStatisticsCard.props";

export const AllStatistics = (): JSX.Element => {
    let matchesPlayeds: MatchStatisticsCardProps[] = [{
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png", homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png", awayValue: 0,
        measures: "match-statistics-item", date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png", homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png", awayValue: 0,
        measures: "match-statistics-item", date: new Date()
    }];


    return (
        <React.Fragment>
            <div >
                {matchesPlayeds.map(matchesPlayed =>
                    <MatchStatisticsCard home={matchesPlayed.home} homeValue={matchesPlayed.homeValue} away={matchesPlayed.away} awayValue={matchesPlayed.awayValue} measures={matchesPlayed.measures} date={matchesPlayed.date}  ></MatchStatisticsCard>
                )}
            </div>
        </React.Fragment>
    )
}