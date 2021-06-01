import React, { Component } from "react";
import PollService from "../Service/PollService";

class updatePoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            poll: {},
        };
        this.updatePoll = this.updatePoll.bind(this);
    }

    componentDidMount() {
      PollService.getPollById(this.state.id)
        .then((res) => {
          this.setState({ poll: res.data, 
            // setting previous data
            name: res.data.name,
            question: res.data.question,
            option1: res.data.option1,
            option2: res.data.option2,
            option3: res.data.option3, });
        })
        .catch((err) => console.log(err));
    }

    updatePoll = (e) => {
        e.preventDefault();
        let poll = {
            id: this.state.id,
            name: this.state.name,
            question: this.state.question,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3,
        };
            PollService.updatePoll(this.state.id, poll)
               .then((res) => {
                   this.props.history.push("/");
            })
            .catch((err) => console.log(err));
        }
     
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h1>Update your Poll</h1>
                <form>
                    <div className="form-group">
                        <label className="item-title">Name:</label>
                        <input 
                            type="text"
                            name="name"
                            defaultValue={ this.state.poll.name }
                            onChange={ this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label className="item-title">Question:</label>
                        <input 
                            type="text"
                            name="question"
                            defaultValue={ this.state.poll.question }
                            onChange={ this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label className="item-title">Option1:</label>
                        <input 
                            type="text"
                            name="option1"
                            defaultValue={ this.state.poll.option1 }
                            onChange={ this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label className="item-title">Option2:</label>
                        <input 
                            type="text"
                            name="option2"
                            defaultValue={ this.state.poll.option2 }
                            onChange={ this.onChange }/>
                    </div>
                    <div className="form-group">
                        <label className="item-title">Option3:</label>
                        <input 
                            type="text"
                            name="option3"
                            defaultValue={ this.state.poll.option3 }
                            onChange={ this.onChange }/>
                    </div>
                    <button className="btn btn-success" onClick={ this.updatePoll }>Update Poll</button>
                     </form>
            </div>
        );
    }
}

export default updatePoll;