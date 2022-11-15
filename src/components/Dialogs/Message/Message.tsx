import classes from "./Message.module.scss";
import React from "react";

const Message = ({message}: {message: string}) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

export default Message;