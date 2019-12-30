import React, { Component } from "react";
import Template from "../Template/Template";
import { connect } from "react-redux";
import "./Results.scss";

class Results extends Component {
  render() {
    return (
      <div className="results">
        <h4>Results</h4>
        {this.props.results.map((item) => {
          return <Template key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.pageData.results
  };
}

export default connect(mapStateToProps)(Results);
