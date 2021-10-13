const {
    profiles,
  } = require('../../media');

function controller(req, res) {
    //codigo
    console.log(profiles);
    res.json(profiles)
}

module.exports = controller;