import React from "react";
import { NormalNumberProps } from "./NormalNumber.props";
 


export const NormalNumber = ( {number, color}: NormalNumberProps): JSX.Element => {
    return (
        <React.Fragment> <span className={`title ${color}`}>{number.toString()}</span></React.Fragment>
    )
}