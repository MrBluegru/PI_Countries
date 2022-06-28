import React from "react";

export default function Card({id, flag, name, continent}) {
    return (
        <div className="card" key={id}>
        <spam>
            <img src={flag} alt="flag" />
        </spam>
        <div>
            <h3 className="name">{name}</h3>
            <h5 className="continent">{continent}</h5>
        </div>
        </div>
    );
    }