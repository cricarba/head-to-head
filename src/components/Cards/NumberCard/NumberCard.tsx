import React from "react";
import { BigNumber } from "../../BigNumber/BigNumber";
import { Title } from "../../Title/Title";
import { NumberCardProps } from "./NumberCard.props";
import "./NumberCard.css";

export const NumberCard = ({ text, number, measures} : NumberCardProps): JSX.Element => {
    return (
        <React.Fragment>
            <div  className={`card number-card ${measures}`}>
                <Title text={text} />
          
                <br></br>
                <BigNumber number={number}></BigNumber>
            </div>
        </React.Fragment>
    )
}