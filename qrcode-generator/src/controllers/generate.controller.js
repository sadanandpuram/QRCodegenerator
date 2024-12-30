const {toDataURL} = require('qrcode')


const generate = (req, res) => {
  const { url } = req.body;

  // check if url is provided
  if (!url) res.send('No URL was provided');
  toDataURL(url, (err, src) => {
    if (err) res.send('An error occured try again later');
    res.render('generate', { src });
  });
};

module.exports = generate;
