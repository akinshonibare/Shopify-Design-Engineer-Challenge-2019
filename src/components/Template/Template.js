import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";
import { withCookies } from "react-cookie";
import { toggleFavourites } from "../../actions/favouritesAction";
import "./Template.scss";

class Template extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      star: undefined
    };
  }

  componentDidMount = () => {
    if (this.props.favourites.includes(this.props.data.id)) {
      this.setState({
        star: true
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.favourites !== this.props.favourites) {
      if (this.props.favourites.includes(this.props.data.id)) {
        this.setState({
          star: true
        });
      } else {
        this.setState({
          star: false
        });
      }
      const { cookies } = this.props;
      cookies.set("favouritesIndex", JSON.stringify(this.props.favourites), {
        path: "/",
        maxAge: 15552000
      });
    }
  };

  createMarkup = () => {
    return { __html: _.unescape(this.props.data.dataObject.body) };
  };

  favourite = id => {
    this.props.toggleFavourites(id);
  };

  render() {
    return (
      <div className="template">
        <Row>
          <Col xs="6">
            <FontAwesomeIcon
              icon={faStar}
              color={this.state.star ? "#24955E" : "grey"}
              onClick={() => this.favourite(this.props.data.id)}
              className="star"
            />

            {this.props.data.dataObject.title}
          </Col>
          <Col xs="6" dangerouslySetInnerHTML={this.createMarkup()} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favourites: state.favourites.favourites
  };
}

const actions = {
  toggleFavourites
};

export default withCookies(
  connect(
    mapStateToProps,
    actions
  )(Template)
);
