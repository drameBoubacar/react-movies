import React, {Component} from 'react';
import './App.css';
import movies from './movies.js';
import List from './components/List';

class App extends Component  {
constructor(props){
    super(props);
    this.state = {
      movies : movies
    }
    console.log('movies', this.state.movies)
}

  
  render(){
    return(
      <div>
        <h1>React movies</h1>
      <List movies={this.state.movies}/>

      </div>
    )
  }
}

export default App;
