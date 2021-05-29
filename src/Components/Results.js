import React, { Component } from "react";
import PollService from "../Service/PollService";

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
	this.deletePoll = this.deletePoll.bind(this);
	this.updatePoll = this.updatePoll.bind(this);
  }

  updatePoll(id) {
	PollService.updatePoll(id)
	.then((res) => {
		this.props.history.push("/poll/${id}");
	})
	.catch((err) => console.log(err));
};

deletePoll(id) {
	PollService.deletePoll(id)
	.then((res) => {
		this.setState({polls: this.state.polls.filter(poll => poll.id !==id)});
		this.props.history.push("/poll");
	})
	.catch((err) => console.log(err));
};
  componentDidMount() {
	  PollService.getPolls().then((res) => {
		  this.setState({ polls: res.data });
	  })
	  .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Total Votes</h1>
        <div className="container">
			<table className="table table-stripped">
				<thead>
					<tr>
						<th>name</th>
						<th>date</th>
						<th>question</th>
						<th>results</th>
					</tr>
				</thead>
				<tbody>
					{this.state.polls.map(poll => 
						<tr key={ poll.id }>
							<td>{ poll.name }</td>
							<td>{ poll.date }</td>
							<td>{ poll.question }</td>
							<td>{ poll.results }</td>
							<td>
								<button className="btn btn-binary" onClick={ () => this.updatePoll(poll.id) }>update Poll</button>
            					<button className="btn btn-danger" onClick={ () => this.deletePoll(poll.id) }>delete Poll</button>
							</td>
						</tr>
					)
  				}	
				</tbody>
			</table>
        </div>
      </div>
    );
  }
}
export default Poll;
