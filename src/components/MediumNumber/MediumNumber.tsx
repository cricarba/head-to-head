import React from "react";
import { MediumNumberProps } from "./MediumNumber.props";
 


export const MediumNumber = ( prop : MediumNumberProps): JSX.Element => {
    return (
        <React.Fragment> <span className="title">{prop.number.toString()}</span></React.Fragment>
    )
}