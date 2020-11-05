import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name: 'Cristiano Ronanldo',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqqK6oXpj94NskIJb57WB5Jh2MGM4KMyEfXA&usqp=CAU"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }



    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => outOfFrame(person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}

                    >
                    <div 
                        style={{backgroundImage: `url(${person.url})`   }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default TinderCards
