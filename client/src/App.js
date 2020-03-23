import React, { Component } from 'react';
import axios from 'axios';
import PlayerList from './Components/PlayerList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
              console.log(response)
                this.setState({
                    ...this.state,
                    players: response.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='App'>
                <PlayerList players={this.state.players} />
            </div>
        );
    }
}

export default App;
