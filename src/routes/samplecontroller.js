exports.getSample = (req, res) => {
    res.json({ message: 'GET request to the sample endpoint' });
  };
  
  exports.createSample = (req, res) => {
    const sampleData = req.body;
    res.json({ message: 'POST request to the sample endpoint', data: sampleData });
  };