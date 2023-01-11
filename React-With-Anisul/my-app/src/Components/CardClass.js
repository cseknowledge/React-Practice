import React, { Component } from "react";

class CardClass extends Component {
  render() {
    return (
      <div className="col-sm-3 ">
        <div className="card text-center">
          <div className="card-header">{this.props.cardHeader}</div>
          <div className="card-body">
            <h5 className="card-title">{this.props.cardTitle}</h5>
            <p className="card-text">{this.props.cardText}</p>
            <a href="http://google.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}

export default CardClass;
