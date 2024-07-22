import React, {useState} from 'react';


function Tile({name, description}){
    return(
        <div>
            <p className="tile-title">{name}</p>
            {Object.values(description).map((text, index) => 
            <p className="tile" >{text}</p>)}
        </div>
    )
}

export default Tile;