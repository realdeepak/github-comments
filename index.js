const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const { generate } = require('random-number-csprng');

const FILE_PATH = './data.json';
const makeCommit = async (n) => {
  if (n === 0) return await simpleGit().push();
  const x = getRandomInt(0, 54);
  const y = getRandomInt(0, 6);
  const DATE = moment().subtract(1,'y').add(1, 'd')
                .add(x, 'w').add(y, 'd').format();
  const data = {
    date: DATE
  }
  console.log(DATE);
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add(FILE_PATH).commit(DATE, {'--date': DATE},
    makeCommit.bind(this, --n));
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  makeCommit(100);

