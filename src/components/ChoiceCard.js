import React from 'react'

export default function ChoiceCard(props) {
    console.log(props);
    return (
<div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
    <h1>{props.title}</h1>
    <div><img src={props.imgURL} alt=""/></div>
    <h3>{props.winner ? 'Won' : 'Loss'}</h3>
        </div>
    )
}
