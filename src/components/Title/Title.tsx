import React from "react";
import { TitleProps } from "./TitleProps";
import "./Title.css";

export const Title = ({text}: TitleProps): JSX.Element => {
    return (
        <React.Fragment> <span className="title">{text}</span></React.Fragment>
    )
}