const express = require('express');
const router = express.Router();

// Load Investigation model
const Investigation = require('../../models/Investigation');

router.get('/test', (req, res) => res.send('investigation route testing!'));

router.get('/', (req, res) => {
  Investigation.find()
    .then(investigations => res.json(investigations))
    .catch(err => res.status(404).json({ norecordfound: 'No record found' }));
});

router.get('/:id', (req, res) => {
  Investigation.findById(req.params.id)
    .then(investigation => res.json(investigation))
    .catch(err => res.status(404).json({ norecordfound: 'No record found' }));
});

router.post('/', (req, res) => {
  Investigation.create(req.body)
    .then(investigation => res.json({ msg: 'Record added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this record' }));
});

router.put('/:id', (req, res) => {
  Investigation.findByIdAndUpdate(req.params.id, req.body)
    .then(investigation => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Investigation.findByIdAndRemove(req.params.id, req.body)
    .then(investigation => res.json({ mgs: 'Investigation entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a record' }));
});

module.exports = router;