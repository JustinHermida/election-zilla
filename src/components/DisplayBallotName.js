import React from "react";

export const DisplayBallotName = ({name}) => {

    return (
        <tr>
            <td colSpan="2">{name}</td>
        </tr>
    );
};