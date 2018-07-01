import React from 'react';
import classes from './Card.css';

const card = (props) => (
    <div className="">
        <div className="Card">
            <h4 className="title">
                {props.title}
            </h4>
            <p className="body">
                {props.body}
            </p>
            <hr />
            <p className="user-id">
                ID: {props.userId}
            </p>
        </div>
    </div>
);

export default card;