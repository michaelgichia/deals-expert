module.exports = app =>
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({ error: 'Invalid token' });
      return;
    }
    if (err.name === 'CastError') {
      res.status(404).send({ error: 'Not found!' });
      return;
    }
    if (err.name === 'DocumentNotFoundError') {
      res.status(401).send({ error: 'Product not saved!' });
      return;
    }
    if (err.name === 'OverwriteModelError') {
      res.status(401).send({ error: 'The name already exist!' });
      return;
    }
    if (err.name === 'ValidationError' || err.name === 'ValidatorError') {
      res.status(409).send({ error: 'Validation failed!' });
      return;
    }
    res.status(500).send({ error: 'Something failed!' });
  });
