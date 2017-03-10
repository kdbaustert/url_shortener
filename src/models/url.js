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

// Find Original url
exports.findShortenedURL = (data, error, success) => {
  // find url based on short url
  db.url.find({
    where: {
      shortened_url: data.shortUrl,
    },
  })
  .then(success)
  .catch(error);
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
