import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    image: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-train_90433.png",
    image1:
      "https://cdn4.iconfinder.com/data/icons/logistics-10/256/Cargo_Ship-512.png",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    image: "https://static.thenounproject.com/png/91605-200.png",
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "death2"
  },
  death: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text:
      "Whoops, looks like you sat in someone elses seat. An argument ensues and you are beaten to death in the process."
  },
  death2: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text:
      "Unfortunatly the train derails and you die. Maybe take a boat next time."
  },
  ontheship: {
    text:
      "Welcome aboard the ship-ship my friend! We need some work done, choose a job",
    leftLabel: "Swab the Poop Deck",
    rightLabel: "Man the Crowsnest",
    leftPage: "poopDeck",
    rightPage: "crowsNest"
  },
  crowsNest: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text: "You have fallen and died. RIP"
  },
  poopDeck: {
    text: "Swabbing is very tiring work. After a long day you deserve a rest",
    leftLabel: "Go below deck",
    rightLabel: "Swim with the sharks",
    leftPage: "belowDeck",
    rightPage: "swimSharks"
  },
  belowDeck: {
    text: "There is so much going on down here",
    leftLabel: "Play cards with the sailors",
    rightLabel: "Eat Dinner",
    rightPage: "dinner",
    leftPage: "cards"
  },
  swimSharks: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text: "Looks like the sharks were hungry today. You made a great snack"
  },
  cards: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text:
      "The game is going great! Unfortunatly a drunken sailor takes offence and guts you with his fillet knife."
  },
  dinner: {
    text: "Wow, dinner is delicious. Whats next?",
    leftLabel: "Slosh back some ale and party with the sailors",
    rightLabel: "Go to bed",
    rightPage: "bed",
    leftPage: "party"
  },
  party: {
    image:
      "https://cdn1.iconfinder.com/data/icons/primaicons-s1/24/coffin-512.png",
    text: "You get a bit too drunk and fall of the deck, never to be seen again"
  },
  bed: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM3uTUcDbju8abSM-yeTVGq7Y2VOXU-vn0QgKfUutBWAxpO-nN",
    text: "Congrats! you made it through the day, you deserve a rest."
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var imageElement = "";
    var imageElement1 = "";
    if (pageData.image) {
      imageElement = (
        <img src={pageData.image} width="200" alt="page-specific image." />
      );
    }
    if (pageData.image1) {
      imageElement1 = (
        <img src={pageData.image1} width="200" alt="page-specific image." />
      );
    }
    return (
      <div className="App">
        <p>
          {pageData.text}
          <br />
          {imageElement}
          <br />
          {imageElement1}
        </p>

        {/* <img
           src={{
          uri:
             "https://i.pinimg.com/originals/2f/75/cc/2f75cc68c7d6fbf3138b09db74419fe7.jpg"}} width="200" alt="page-specific image." /> */}

        <p>
          <button onClick={() => this.goToPage(pageData.leftPage)}>
            {pageData.leftLabel}
          </button>
          <button onClick={() => this.goToPage(pageData.rightPage)}>
            {pageData.rightLabel}
          </button>
        </p>
      </div>
    );
  }
}

export default App;
