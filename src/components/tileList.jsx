import React, {useState} from 'react';
import Tile from './tile';

function TileList({list}){
    return(
        <div>
            {list.map((tile, index) => {
            const {name, ...description } = tile;
            return <Tile key={index} name={name} description={description} />})}
        </div>
    )
}

export default TileList;