import React, { Component } from "react";
import sortArray from "sorting-array";

import PollService from "../Service/PollService";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      sortDirection: "desc",
    };
    this.onSort = this.onSort.bind(this);
    this.addPoll = this.addPoll.bind(this);
    this.deletePoll = this.deletePoll.bind(this);
  }

  addPoll() {
    this.props.history.push("/poll");
  }

  deletePoll(id) {
    PollService.deletePoll(id)
      .then((res) => {
        this.setState({
          polls: this.state.polls.filter((poll) => poll.id !== id),
        });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  onSort(direction, sortBy) {
    let arrayToSort = this.state.polls;
    sortArray(arrayToSort, direction, sortBy);
    this.setState({ polls: arrayToSort });
    if (this.state.sortDirection === "desc") {
      this.setState({ sortDirection: "asc" });
    } else {
      this.setState({ sortDirection: "desc" });
    }
  }

  componentDidMount() {
    PollService.getPolls()
      .then((res) => {
        this.setState({ polls: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Total Votes</h1>
        <div className="container">
          <button className="btn btn-primary" onClick={() => this.addPoll()}>
            Add new poll
          </button>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "name");
                  }}
                >
                  name
                </th>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "date");
                  }}
                >
                  date
                </th>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "question");
                  }}
                >
                  question
                </th>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "option1");
                  }}
                >
                  option1
                </th>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "option2");
                  }}
                >
                  option2
                </th>
                <th
                  onClick={() => {
                    this.onSort(this.state.sortDirection, "option3");
                  }}
                >
                  option3
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.polls.map((poll) => (
                <tr key={poll.id}>
                  <td>
                    <a href={`/poll/${poll.id}`}>{poll.name} </a>
                  </td>
                  <td>{poll.date}</td>
                  <td>{poll.question}</td>
                  <td>
                    {poll.option1} {poll.vote1}
                  </td>
                  <td>
                    {poll.option2} {poll.vote2}
                  </td>
                  <td>
                    {poll.option3} {poll.vote3}
                  </td>
                  <td>
                    <button className="btn btn-secondary">
                      <a href={`/polls/${poll.id}`}>Update poll </a>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePoll(poll.id)}
                    >
                      delete Poll
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Results;
