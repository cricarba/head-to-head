import React from "react";
import { NormalNumberProps } from "./NormalNumber.props";
 


export const NormalNumber = ( prop : NormalNumberProps): JSX.Element => {
    return (
        <React.Fragment> <span className="title">{prop.number.toString()}</span></React.Fragment>
    )
}