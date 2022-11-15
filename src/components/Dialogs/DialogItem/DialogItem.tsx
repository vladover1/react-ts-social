import {NavLink} from "react-router-dom";
import React from "react";
import classes from './DialogItem.module.scss'

const DialogItem = ({name, id}: { name: string, id: number }) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${id}`} className={({isActive}) => isActive ? classes.active : ''}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;