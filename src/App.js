import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import Favourites from "./components/Favourites/Favourites";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setData } from "./actions/dataAction";
import { lookUp } from "./actions/wasteSearch";
import { toggleFavourites } from "./actions/favouritesAction";

import "./App.scss";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount = () => {
    //api call to waste lookup data
    //then redux function to set the data to a redux state
    lookUp().then(res => {
      this.props.setData(res.data);
      this.getCookies();
    });
  };

  //function to extract user favourites from cookies
  getCookies = () => {
    const { cookies } = this.props;
    var userFav = cookies.get("favouritesIndex");
    if (!(userFav === undefined)) {
      this.props.toggleFavourites(userFav);
    }
  };

  render() {
    return (
      <div>
        <Jumbotron className="header">
          <h1>TORONTO WASTE LOOKUP</h1>
        </Jumbotron>
        <Container>
          <SearchBar />
          <Results />
          <Favourites />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.pageData.data,
    favourites: state.favourites.favourites
  };
}

const actions = {
  setData,
  toggleFavourites
};

export default withCookies(
  connect(
    mapStateToProps,
    actions
  )(App)
);
