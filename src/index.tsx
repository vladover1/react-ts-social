import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


let postsData= [
    {id: 1, message: 'How are you?', likesCount: 1},
    {id: 2, message: 'It is my first post', likesCount: 7},
    {id: 3, message: 'let`s go to the moon', likesCount: 10},
    {id: 4, message: 'Nuh', likesCount: 14},
]

let dialogsData = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Vlad'},
    {id:3, name: 'Yara'},
    {id:4, name: 'Ilya'},
    {id:5, name: 'Nastya'},
    {id:6, name: 'John'},
]

let messagesData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are u'},
    {id:3, message: 'Yo'},
    {id:4, message: 'Yo'},
    {id:5, message: 'Yo'},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postsData={postsData} dialogsData = {dialogsData} messagesData={messagesData}  />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
