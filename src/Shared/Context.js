
import React from 'react';

const UserContext = React.createContext(null);

function Card(props){

    function classes(){
        const bg = props.bgColor ? 'bg-' + props.bgColor : '';
        const txt = props.txtColor ? 'text-' + props.txtColor : ' text-white' ;

        return `card mb-3 ${bg} ${txt}`;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">
                <h2>{props.header}</h2>
            </div>
            <div className="card-body">
                {props.title && (<h5 className='card-title'>{props.title}</h5>) }
                {props.text && (<h5 className='card-text'>{props.text}</h5>) }
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );

}

export {UserContext, Card}