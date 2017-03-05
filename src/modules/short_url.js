// Shortened URL function

function genShortenUrl() {
    // alphanumeric string
  const alphaNumeric = 'ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdeefghijklmnopqrstuvwxyz1234567890';
  const urlLength = 7;

  let generateURL = '';

  for (let i = 0; i < urlLength; i += 1) {
    const rand = Math.round(Math.random() * alphaNumeric.length - 1);
    generateURL += alphaNumeric.charAt(rand);
  }
  
  return generateURL;
}

// export url_Short function
exports.genShortenUrl = genShortenUrl;
