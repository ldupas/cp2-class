import { Component } from 'react';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { game } = this.props;
   
    return (
      <div className="Game">
        <h2>{game.name}</h2>
        <img className="game-img" src={game.background_image} alt="game img" />
      </div>
    );
  }
}

export default Game;