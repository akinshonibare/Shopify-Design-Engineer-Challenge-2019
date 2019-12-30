import React, { Component } from "react";
import Template from "../Template/Template";
import { connect } from "react-redux";
import "./Favourites.scss";

class Favourites extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      favourites: []
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.favourites !== this.props.favourites) {
      var tempFavourites = [];
      for (var j = 0; j < this.props.favourites.length; j++) {
        for (var i = 0; i < this.props.data.length; i++) {
          if (this.props.data[i].id === this.props.favourites[j]) {
            tempFavourites.push(this.props.data[i]);
          }
        }
      }
      this.setState({
        favourites: tempFavourites
      });
    }
  };

  render() {
    return (
      <div className="favourites">
        <h4>Favourites</h4>
        {this.state.favourites.map(item => {
          return <Template key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favourites: state.favourites.favourites,
    results: state.pageData.results,
    data: state.pageData.data
  };
}

export default connect(mapStateToProps)(Favourites);
