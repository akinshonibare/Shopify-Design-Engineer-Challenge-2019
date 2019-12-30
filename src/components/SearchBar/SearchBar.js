import React, { Component } from "react";
import { Button, Input, Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { setData, setResults } from "../../actions/dataAction";

class SearchBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "",
      results: [],
      inputWarning: false
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    if (e.target.value === "") {
      this.props.setResults(0);
    } else {
      this.setState({
        inputWarning: false
      });
    }
  };

  search = () => {
    if (this.state.value === "") {
      this.setState({
        inputWarning: true
      });
    } else {
      var searchTerm = this.state.value.replace(/[^\w\s]/gi, "").trim();
      console.log(searchTerm);
      this.props.setResults(searchTerm);
    }
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.search();
    }
  };

  render() {
    return (
      <div>
        <div className="searchbar">
          <Input
            type="text"
            value={this.state.value}
            placeholder="enter waste"
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
            className="searchInput"
          />
          <Button onClick={this.search} className="searchIcon">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
        {this.state.inputWarning && (
          <Alert color="danger" className="warning">
            Please Enter an Item to Search
          </Alert>
        )}
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
  setResults
};

export default connect(
  mapStateToProps,
  actions
)(SearchBar);
