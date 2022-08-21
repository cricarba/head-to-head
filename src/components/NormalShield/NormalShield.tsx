import React from "react"
import { NormalShieldProps } from "./NormalShield.props"

export const NormalShield = ({source}:NormalShieldProps): JSX.Element => {
    return (
        <React.Fragment>
                <img src={source}></img>
        </React.Fragment>
    )
}