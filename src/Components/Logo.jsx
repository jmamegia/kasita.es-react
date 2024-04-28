import React, { useState, useContext } from "react";
import lockIcon from "Images/logoLock.svg";
import unlockIcon from "Images/logoUnlock.svg";
import UnlockForm from "Components/UnlockForm";
import AppContext from "Context/AppContext";

function Logo(props) {
  const { locked } = useContext(AppContext);
  const [showing, setShowing] = useState(false);
  const icon = locked ? lockIcon : unlockIcon;
  const toggleForm = () => setShowing(!showing);
  return (
    <div className="iconRound">
      <img
        onClick={toggleForm}
        className={props.className}
        alt={props.alt}
        src={icon}
        width={props.width}
        height={props.height}
      />
      <UnlockForm showing={showing} toggleForm={toggleForm} />
    </div>
  );
}

export default Logo;
