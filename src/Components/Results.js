import React, { Component } from "react";
import PollService from "../Service/PollService";

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
  }

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
						<th>time</th>
						<th>question</th>
						<th>results</th>
					</tr>
				</thead>
				<tbody>
					{this.state.polls.map((polls) => (
						<tr key={ polls.id }>
							<td>{ polls.name }</td>
							<td>{ polls.time }</td>
							<td>{ polls.question }</td>
							<td>{ polls.results }</td>
						</tr>
					))}
				</tbody>
			</table>
        </div>
      </div>
    );
  }
}
export default Poll;
