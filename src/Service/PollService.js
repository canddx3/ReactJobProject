import axios from "axios";

const POLL_URL = "http://localhost:8080";

class PollService {
  getPolls() {
    return axios.get(POLL_URL);
  }

  createPoll(poll) {
    return axios.post(POLL_URL, poll);
  }

  getPollById(pollId) {
    return axios.get(POLL_URL + "/" + pollId);
  }

  updatePoll(pollMaker, pollId) {
    return axios.put(POLL_URL + "/update/" + pollId, pollMaker);
  }

  deletePoll(pollId) {
    return axios.delete(POLL_URL + "/delete/" + pollId);
  }

  createVote(voteMaker) {
    return axios.post(POLL_URL, voteMaker);
  }
}
export default new PollService();
