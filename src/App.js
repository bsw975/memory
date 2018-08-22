import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
const l = console.log;

class App extends Component {

  // friends = this.shuffle(friends);

  // Setting this.state.friends to the friends json array

  // l({this.friends})

  state = {
    friends, high: 0, allTimeHigh: 0, clicked: []
  };

  // The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
  // See https://github.com/coolaj86/knuth-shuffle
  // You can see a great visualization here (and the original post linked to this)

  shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  rememberClick = id => {
    let allFriends = this.shuffle(this.state.friends);
    let goodClicks = this.state.high;
    // l(id)
    l(this.state.clicked)
    let allClicked = this.state.clicked;
    //if the clicked id is not there (== -1), do math & keep playing
    if (allClicked.indexOf(id) === -1) { 
      allClicked.push(id);
      goodClicks++;
      if (goodClicks > this.state.allTimeHigh) { //update all-time high
        this.setState({ friends: allFriends, high: goodClicks, allTimeHigh: goodClicks, clicked: allClicked });
      } else {
        this.setState({ friends: allFriends, high: goodClicks, clicked: allClicked });
      }
      l(this.state.clicked)
    } else {
      this.render(true);
      goodClicks = 0;
      this.setState({ friends: allFriends, high: 0, clicked: [] });
      alert("You lose");
    }
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: allFriends, high: goodClicks });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render(loss) {
    // l(this.friends);
    // const tempFriends = this.shuffle(this.state.friends)
    // this.setState( {tempFriends} );
    return (
      <Wrapper>
        <Title high={this.state.allTimeHigh} loss={loss}>{{ loss } ? "You lose" : "Memory Game Time. Get ready."}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            rememberClick={this.rememberClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
