import React from 'react'

const Card = ({ name , email, id }) => {
    return (
        <div className="tc bg-light-green dib br3 ma2 bw2 grow">
            <img src= {`https://robohash.org//${id}`} alt={`${id}`}/>
            <div>
                <h3> {name} </h3>
                <h4> {email} </h4>

            </div>            
        </div>
    );
}

export default Card;