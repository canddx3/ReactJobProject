import React, { Component } from 'react'
import PollService from '../Service/PollService'

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            poll: []
        }
    }

    componentDidMount(id) {
        PollService.getPollById(id).then((res) => {
            this.setState({ polls: res.data });
        })
        .catch(err => console.log(err));
    }
    // componentDidMount() {
    //     PollService.getPollById(this.state.id)
    //     .then((res) => {
    //         let poll = res.data;
    //         this.setState({
    //             name: poll.name, 
    //             question: poll.question,
    //             option1: poll.option1,
    //             option2: poll.option2,
    //             option3: poll.option3
    //         })
    //         .catch(err => console.log(err));
    //     });
    // }       
    
    savePoll = (e) => {
        e.preventDefault();
        let poll = {
            name: this.state.name, 
            question: this.state.question, 
            option1: this.state.option1, 
            option2: this.state.option2,
            option3: this.state.option3
         };
        PollService.createVote(poll)
        .then ((res) => {
            this.props.history.push("/")
            return "thanks for voting"
        }) 
        .catch ((err) => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Cast your Vote</h1>
                <div className="content">
                    {this.state.poll.map((poll, id) => (
                        <div key={ id }>
                            <div className="table table-stripped">
                                <label>Name:</label>
                                <div>{ poll.name }</div>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            </div>
                            <div className="table table-stripped">
                                <label>Question:</label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <div>{ poll.question }</div>
                            </div>
                            <div className="table table-stripped">
                                <label>Option1:</label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <div>{ poll.option1 }</div>
                            </div>
                            <div className="table table-stripped">
                                <label>Option2:</label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <div>{ poll.option2 }</div>
                            </div>
                            <div className="table table-stripped">
                                <label>Option3:</label>                        
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <div>{ poll.option3 }</div>
                            </div>
                            <button className="btn btn-success" onClick={ this.savePoll }>Take Poll</button>
                        </div>
                    ))};
                </div>
            </div>
        );
    }
}

export default Poll;