import React from "react";
import { BigNumberProps } from "./BigNumber.props";
import  './BigNumber.css'


export const BigNumber = ( prop : BigNumberProps): JSX.Element => {
    return (
        <React.Fragment> <span className="big-number">{prop.number.toString()}</span></React.Fragment>
    )
}