// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';

async function getScore(url, opt, callback) {
  opt.method = 'GET';
  delete opt.body;
  try {
    const res = await fetch(url, opt);
    const data = await res.json();
    return (callback.bind(this))(data);
  } catch (e) {
    throw new Error(e);
  }
}
async function setScore(url, opt, userData, callback) {
  opt.method = 'POST';
  opt.body = JSON.stringify(userData);

  try {
    const res = await fetch(url, opt);
    const data = await res.json();
    return (callback.bind(this))(data);
  } catch (e) {
    throw new Error(e);
  }
}

export { getScore, setScore };
