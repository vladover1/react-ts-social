import React from 'react';
import classes from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogData} from "../../types/dialogData";
import {MessageData} from "../../types/messageData";

interface ChatProps {
    dialogsData: Array<DialogData>,
    messagesData: Array<MessageData>
}

const Dialogs = ({dialogsData, messagesData}: ChatProps) => {

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={classes.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;