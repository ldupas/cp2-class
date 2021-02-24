import { Component } from 'react';
import axios from 'axios';
import Game from "./Game";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      isFiltered: false,
    };
  }

  fetchData = () => {
    axios
    .get('https://apis.wilders.dev/wild-games/games/')
    .then(res => 
      this.setState({ games: res.data }));
  }

  handleBest = () => {
    const { isFiltered } = this.state;
    this.setState({
      isFiltered: !isFiltered,
    });
  };

  filteredGames = () => {
    const { games, isFiltered } = this.state;
    return isFiltered ? games.filter((game) => game.rating >= 4.5) : games;
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { isFiltered } = this.state;
    const filteredGames = this.filteredGames();
    return (
      <section className="GameList">
        <button type="button" onClick={this.handleBest}>
          {isFiltered ? "All games" : "Best games"}
        </button>
        <div>
          {filteredGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </section>
    );
  }
}

export default GameList;
