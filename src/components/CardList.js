import React from 'react'
import Card from "./Card"

const CardList = ({ robots }) => {    
    return (
        <div>
            {
                robots.map(obj => {
                    return  (
                            <Card 
                                key = {obj.id} 
                                name = {obj.name} 
                                id = {obj.id} 
                                email = {obj.email}
                            />
                    );
                })
            }
        </div>
    );
};

export default CardList;




