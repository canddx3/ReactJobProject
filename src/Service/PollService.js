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
    return axios.get(POLL_URL + "/poll/" + pollId);
  }

  updatePoll(pollId, poll) {
    return axios.put(POLL_URL + "/polls/" + pollId, poll);
  }

  deletePoll(id) {
    return axios.delete(POLL_URL + "/poll/" + id);
  }

  createVote(pollId, voted) {
    return axios.post(POLL_URL + "/vote/" + pollId, voted);
  }
}
export default new PollService();
