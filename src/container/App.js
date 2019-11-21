import React, { Component } from 'react';
import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Sorting from '../components/Sorting';
import Footer from '../components/Footer';


import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    const robots = require("../robots.json");
    this.setState({robots: robots})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  sortByPrice = () => {
    const robotSort = this.state.robots.sort((a,b) => a.price - b.price);
    this.setState({ robots: robotSort});
  }

  sortByType = () => {
    const robotSort = this.state.robots.sort((a,b) => {
      return a.type < b.type ? -1 : (a.type > b.type ? 1 : 0);
    });
    this.setState({ robots: robotSort});
  }

  render() {
    const { robots, searchfield } = this.state;
    
    const filteredRobots = robots.filter(robot => {
      return robot.model.toLowerCase().includes(searchfield.toLowerCase()) || 
              robot.type.toLowerCase().includes(searchfield.toLowerCase());
    })

    const sortList = [this.sortByPrice, this.sortByType];

    return (
      <div>
        <Heading />
        <SearchBar searchChange={this.onSearchChange}/>
        <Sorting sort={sortList} />
        <RobotList robots={filteredRobots} />
        <Footer />
      </div>
    );
  };
}

const RobotList = ({ robots }) => {
  return (
    <div className="container">
      {
        robots.map(robot => {
          return (
            <Robot 
              key={robot.id}
              id={robot.id}
              model={robot.model}
              type={robot.type}
              price={robot.price}
            />
          );
        })
      }
    </div>
  );
}

const Robot = ({model, type, price, id}) => {
  return (
    <div className="card">
      <img src={`https://www.robohash.org/${id * 2}`} alt="robot" />
      <p><strong>{model}</strong></p>
      <p>{type}</p>
      <p>{'$' + price}</p>
      <p><a href="#">Read more...</a></p>
    </div>
  );
}

export default App;
