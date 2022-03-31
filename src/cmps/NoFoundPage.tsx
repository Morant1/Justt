import React from "react";
import { ReactComponent as NoSearchIcon } from "../assets/img/noSearchIcon.svg";

type Props = {
  displayMessage?: string;
}

export const NoFoundPage: React.FC<Props> = ({displayMessage}) => {

  
    return (
        <div className="no-found">
            <NoSearchIcon/>
          <p>{displayMessage || 'Search for a character i.d in order to view a character'}</p>  
    </div>
    );
  };