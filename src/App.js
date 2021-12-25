import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import CountryPick from './Components/CountryPick/CountryPick';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';
import { AnimatePresence, motion } from 'framer-motion';


const Header = () => {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: -10 }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Welcome To The News WebSite!
      </h1>
    </motion.div>
  );
};
const initialState = {
  isFavourite: false,
  news: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      }
    })
  }


  componentDidMount() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(console.log)
  }

  onFavouriteSelect = () => {
    fetch('http://localhost:3000/favourites', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({news: data, isFavourite: true })
      })

  }

  onButtonClick = (event) => {
    let country = event.target.innerHTML;
    if (country === 'Egypt') {
      country = 'eg'
    } else { country = 'ae' }
    console.log(country)
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=86c67467a1b04994a9348d33718410ea`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        news: data.articles,
        isFavourite: false
      }));

  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { news } = this.state
    return (
      <AnimatePresence exitBeforeEnter>
        <div className="app">
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          <Header />
          {this.state.route === 'home' ?
            <div>
              <Logo />
              <CountryPick
                name={this.state.user.name}
                onButtonClick={this.onButtonClick}
                onFavouriteSelect={this.onFavouriteSelect}
              />

              {
                news ? <CardList
                  isFavourite={this.state.isFavourite}
                  data={news}
                  id={this.state.user.id}
                />
                  : "Please Press Any Button"

              }

            </div>

            : (
              this.state.route === 'signin' ?
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )

          }
        </div>
      </AnimatePresence>
    );
  }

}

export default App;
