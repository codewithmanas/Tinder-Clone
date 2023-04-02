import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

function TinderCards() {

  const [ people, setPeople ] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
    },
    {
      name: "Jeff Bezos",
      url: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg"
    }
  ]);
  // setPeople(['This People']);

  const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
  }
  const outOfFrame = (PersonName) => {
     console.log(PersonName + "left the screen");
  }

  return (
    <div className="tinder__cards">
        <div className="cards__container container">
            {people.map((person) => {
              return (
              <>
              <TinderCard className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen = {() => outOfFrame(person.name)}
              >
              <div style={{ backgroundImage: `url(${person.url})` }}
                  className="card">
                <h3>{person.name}</h3>
              </div>
              </TinderCard>
                {/* <h1>{person.name}</h1> */}
                {/* <img src={person.url} alt="elon" /> */}
              </>
              )
            })}
        </div>
    </div>
  );
}

export default TinderCards;