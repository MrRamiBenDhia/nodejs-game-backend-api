const express = require('express');
const router = express.Router();
const Resource = require('../models/resources');

// Middleware function to fetch a resource by its ID
async function getResources(req, res, next) {
  let resource;
  try {
    resource = await Resource.findById(req.params.id);
    if (resource == null) {
      return res.status(404).json({ message: 'Resource not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.resource = resource;
  next();
}

// GET all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET resources by ID
router.get('/:id', async (req, res) => {
  let resource;
  try {
    resource = await Resource.findById(req.params.id);
    if (resource == null) {
      return res.status(404).json({ message: 'Resource not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  // Attach the resource to the res object
  res.resource = resource;
}
);

// POST create new resource
router.post('/', async (req, res) => {
  try {
    
    const resource = new Resource(req.body);
    console.log(resource);
    const savedResource = await resource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update resource by ID
router.put('/:id', getResources, async (req, res) => {
  try {
    Object.assign(res.resource, req.body);
    const updatedResource = await res.resource.save();
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE resource by ID
router.delete('/:id', getResources, async (req, res) => {
  try {
    await res.resource.remove();
    res.json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
