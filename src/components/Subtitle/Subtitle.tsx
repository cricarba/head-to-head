import React from "react";
import { SubtitleProps } from "./Subtitle.props";
 


export const Subtitle = ( {text} : SubtitleProps): JSX.Element => {
    return (
        <React.Fragment> <span className="subtitle">{text}</span></React.Fragment>
    )
}