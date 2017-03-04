// require db

const db = require('./db');

// Create
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// Find all
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

//find by shortened url
/*exports.findShortenedURL = (payload, err, success) => {
  db.url.find({
    where: {
      shortened_url: payload.shortURL,
    }
  }).then(success).catch(err);
};*/

//was getbyshortURL
exports.findShortenedURL = (shortURL, success, err) => {
  db.url.find({
      where: {
        shortened_url: shortURL,
      },
    })
    .then(success)
    .catch(err);
};

// Find individual
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// Update url
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// Delete url
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
