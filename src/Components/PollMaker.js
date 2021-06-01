import React, { Component } from "react";
import PollService from "../Service/PollService";

class PollMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      question: "",
      option1: "",
      option2: "",
      option3: "",
      errorMessage: "",
    };
    this.savePoll = this.savePoll.bind(this);
  }

  savePoll = (e) => {
    e.preventDefault();
    let poll = {
      name: this.state.name,
      question: this.state.question,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
    };
    // validation
    let errors = 0

    for (var field in poll) {
      if (poll[field].length < 2) {
        this.setState({ errorMessage: "fields cant be empty or less than 2 characters" });
        errors++
      }
    }

    if (errors === 0) {
      PollService.createPoll(poll)
        .then((res) => {
          this.props.history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1>Make your Poll</h1>
        <form>
          <div className="form-group">
            <label className="item-title">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="item-title">Question:</label>
            <input
              type="text"
              name="question"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="item-title">Option1:</label>
            <input
              type="text"
              name="option1"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="item-title">Option2:</label>
            <input
              type="text"
              name="option2"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="item-title">Option3:</label>
            <input
              type="text"
              name="option3"
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.savePoll}>
            Create Poll
          </button>
          <div>{ this.state.errorMessage }</div>
        </form>
      </div>
    );
  }
}

export default PollMaker;
