import { Component } from 'react';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  handleFavorite = () => {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite
    })
  }

  render() {
    const { game } = this.props;
    const { isFavorite } = this.state;
    
    return (
      <div className="Game">
        <h2>{game.name}</h2>
        <p>Rating: {game.rating}</p>
        <span onClick={this.handleFavorite}>
            {isFavorite ? '❤️' : 'Add to fav ? click me !'}
        </span>
        <img className="game-img" src={game.background_image} alt="game img" />
      </div>
    );
  }
}

export default Game;