const {
    profiles,
  } = require('../../media');

function controller(req, res) {
    //codigo
    res.json(profiles);
}

module.exports = controller;