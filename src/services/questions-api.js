import axios from 'axios';

const fetchQuestions = () =>
  new Promise((resolve, reject) =>
    axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(({ data }) => {
        reject();
        resolve(data);
      })
      .catch(reject)
  );

export default {
  fetchQuestions
};
