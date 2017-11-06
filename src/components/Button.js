import React from 'react';
import { Button } from 'reactstrap';

export default class MyButton extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-10">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button onClick={this.props.onClick} className="btn btn-primary">
                {this.props.children}
                <span className="loginIcon" />
              </button>
            </div>
          </div>
        </div>
        <Button outline color="primary">
          کلیک کن
        </Button>
      </div>
    );
  }
}
