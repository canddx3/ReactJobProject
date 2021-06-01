import React, { Component } from "react";
import PollService from "../Service/PollService";

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      poll: {},
      voted: "",
      errorMessage: "",
    };

    this.onOptionChange = this.onOptionChange.bind(this);
  }

  componentDidMount() {
    PollService.getPollById(this.state.id)
      .then((res) => {
        this.setState({ poll: res.data });
      })
      .catch((err) => console.log(err));
  }

  savePoll = (e) => {
    e.preventDefault();
    // validation

    if ((this.state.voted === "")) {
      this.setState({
        errorMessage: "must vote for one option",
      });
    } else {
      PollService.createVote(this.state.id, this.state.voted)
        .then((res) => {
          this.props.history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  onOptionChange = (e) => this.setState({ voted: e.target.value });

  render() {
    return (
      <div>
        <h1>Cast your Vote</h1>
        <div className="content">
          <div className="table table-stripped">
            <label>Name:</label>
            <div>{this.state.poll.name}</div>
          </div>
          <div className="table table-stripped">
            <label>Question:</label>
            <div>{this.state.poll.question}</div>
          </div>
          <div className="table table-stripped">
            <label>Option1:</label>
            <input
              className="form-check-input"
              type="radio"
              name="option"
              value="option1"
              onChange={this.onOptionChange}
              id="flexRadioDefault1"
            />
            <div>{this.state.poll.option1}</div>
          </div>
          <div className="table table-stripped">
            <label>Option2:</label>
            <input
              className="form-check-input"
              type="radio"
              name="option"
              value="option2"
              onChange={this.onOptionChange}
              id="flexRadioDefault1"
            />
            <div>{this.state.poll.option2}</div>
          </div>
          <div className="table table-stripped">
            <label>Option3:</label>
            <input
              className="form-check-input"
              type="radio"
              name="option"
              value="option3"
              onChange={this.onOptionChange}
              id="flexRadioDefault1"
            />
            <div>{this.state.poll.option3}</div>
          </div>
          <button className="btn btn-success" onClick={this.savePoll}>
            Take Poll
          </button>
          <div>{this.state.errorMessage}</div>
        </div>
      </div>
    );
  }
}

export default Poll;
