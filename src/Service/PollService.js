import axios from 'axios';

const POLL_URL = 'http://localhost:8081';

class PollService {
    getPolls() {
        return axios.get(POLL_URL);
    }

    createPoll(poll) {
        return axios.post(POLL_URL, poll);
    }

    updatePoll(pollUser, pollId) {
        return axios.put(POLL_URL + '/update/' + pollId, pollUser);
    }

    deletePoll(pollId) {
        return axios.delete(POLL_URL + '/delete/' + pollId)
    }
}
export default new PollService();