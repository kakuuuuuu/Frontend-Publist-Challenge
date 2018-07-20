import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import { getData } from '../actions'
import '../App.css'

class App extends Component {

  // Fetches article data upon app mounting
  componentDidMount() {
    this.fetch()
  }

  // Dispatches getData action
  fetch = () => {
    const data = {
      "query": "tech"
    }
    this.props.fetchData(data)
  }

  render() {
    return (
      <div>
        <Switch>
          {/* React Router Setup */}
          <Route exact path="/" render={() => (
            <Home />
          )} />
          <Route path="/article/:id" render={(props) => (
            <Details {...props} key={props.match.params.id}/>
          )} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (data) => dispatch(getData(data)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
