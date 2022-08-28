import React from "react";
import { MatchStatisticsCard } from "../../components/Cards/MatchStatisticsCard/MatchStatisticsCard";
import { MatchStatisticsCardProps } from "../../components/Cards/MatchStatisticsCard/MatchStatisticsCard.props";
import { NextMatchCard } from "../../components/Cards/NextMatchCard/NextMatchCard";
import { NextMatchCardProps } from "../../components/Cards/NextMatchCard/NextMatchCard.props";
import { PlayerStatisticsCard } from "../../components/Cards/PlayerStatisticsCard/PlayerStatisticsCard";
import { PlayerStatisticsCardProps } from "../../components/Cards/PlayerStatisticsCard/PlayerStatisticsCard.props";
import { VersusStatisticsCard } from "../../components/Cards/VersusStatisticsCard/VersusStatisticsCard";
import { VersusStatisticsCardProps } from "../../components/Cards/VersusStatisticsCard/VersusStatisticsCard.props";
import "./AllStatistics.css";

export const AllStatistics = (): JSX.Element => {
    let matchesPlayeds: MatchStatisticsCardProps[] = [{
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 0,
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        awayValue: 0,
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 0,
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        homeValue: 0,
        away: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        awayValue: 0,
        measures: "",
        date: new Date()
    }];


    let wonMatches: VersusStatisticsCardProps = {
        statistic: "Goals",
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 109, away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 93,
        measures: ""
    };
    let wonMatchesAsHome: VersusStatisticsCardProps = {
        statistic: "Own Goals",
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 109,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 93,
        measures: ""
    };
    let clean: VersusStatisticsCardProps = {
        statistic: "Clean shets",
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 109,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 93,
        measures: ""
    };
    let yellow: VersusStatisticsCardProps = {
        statistic: "Yelow Cards",
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 109,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 93,
        measures: ""
    };
    let red: VersusStatisticsCardProps = {
        statistic: "Red Cards",
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
        homeValue: 109,
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        awayValue: 93,
        measures: ""
    };
 
    let nextMatches: NextMatchCardProps[] = [{
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
      
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
      
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
      
        away: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
    
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
    
        away: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
        
        measures: "",
        date: new Date()
    },
    {
        home: "https://resources.premierleague.com/premierleague/badges/50/t34.png",
     
        away: "https://resources.premierleague.com/premierleague/badges/50/t21.png",
      
        measures: "",
        date: new Date()
    }];

    let playerWins: PlayerStatisticsCardProps = {
        statistic : "Winest",
        name: "Cristian",
        lastname:"Carvaja",
        photo: "https://resources.premierleague.com/premierleague/photos/players/250x250/p80607.png",
        number: 234,
        measures: ""
    }
    return (
        <React.Fragment>
            <div className="all-statistics-container">
                <div className="all-statistics-item" >
                    {matchesPlayeds.map(matchesPlayed =>
                        <MatchStatisticsCard home={matchesPlayed.home} homeValue={matchesPlayed.homeValue} away={matchesPlayed.away} awayValue={matchesPlayed.awayValue} measures={matchesPlayed.measures} date={matchesPlayed.date}  ></MatchStatisticsCard>
                         
                   )}
                </div>
                <div className="all-statistics-item">
                    <VersusStatisticsCard statistic={wonMatches.statistic} home={wonMatches.home} homeValue={wonMatches.homeValue} away={wonMatches.away} awayValue={wonMatches.awayValue} measures={wonMatches.measures}></VersusStatisticsCard>
                    <br />
                    <VersusStatisticsCard statistic={wonMatchesAsHome.statistic} home={wonMatchesAsHome.home} homeValue={wonMatchesAsHome.homeValue} away={wonMatches.away} awayValue={wonMatches.awayValue} measures={wonMatches.measures}></VersusStatisticsCard>
                </div>
                <div className="all-statistics-item">
                    <VersusStatisticsCard statistic={yellow.statistic} home={yellow.home} homeValue={yellow.homeValue} away={yellow.away} awayValue={yellow.awayValue} measures={yellow.measures}></VersusStatisticsCard>
                    <br />
                    <VersusStatisticsCard statistic={red.statistic} home={red.home} homeValue={red.homeValue} away={red.away} awayValue={red.awayValue} measures={red.measures}></VersusStatisticsCard>

                </div>
                <div className="all-statistics-item">
                    <VersusStatisticsCard statistic={clean.statistic} home={clean.home} homeValue={clean.homeValue} away={clean.away} awayValue={clean.awayValue} measures={clean.measures}></VersusStatisticsCard>
                    <br />
                    <PlayerStatisticsCard statistic={playerWins.statistic} name={playerWins.name} lastname={playerWins.lastname} photo={playerWins.photo} number={playerWins.number} measures={playerWins.measures} ></PlayerStatisticsCard>
                </div>
                <div className="all-statistics-item">
                <PlayerStatisticsCard statistic={playerWins.statistic} name={playerWins.name} lastname={playerWins.lastname} photo={playerWins.photo} number={playerWins.number} measures={playerWins.measures} ></PlayerStatisticsCard>
                <br />
                    <PlayerStatisticsCard statistic={playerWins.statistic} name={playerWins.name} lastname={playerWins.lastname} photo={playerWins.photo} number={playerWins.number} measures={playerWins.measures} ></PlayerStatisticsCard>
                </div>
                <div className="all-statistics-item" >
                    {nextMatches.map(matchesPlayed =>
                        <NextMatchCard home={matchesPlayed.home}  away={matchesPlayed.away} measures={matchesPlayed.measures} date={matchesPlayed.date}  ></NextMatchCard>
                        
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}