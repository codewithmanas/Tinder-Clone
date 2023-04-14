import React, { useEffect, useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from './axios';

function TinderCards() {

  const [ people, setPeople ] = useState([]);

  const fetchData = async () => {
    const req = await axios.get("/tinder/cards");
    setPeople(req.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  }

  const outOfFrame = (PersonName) => {
    console.log(PersonName + "left the screen");
  }

  return (
    <div className="tinder__cards">
        <div className="cards__container container">
            {people.map((person) => (
              <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: `url(${person.imgUrl})` }}
                  className="card"
                >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            ))}
        </div>
    </div>
  );
}

export default TinderCards;