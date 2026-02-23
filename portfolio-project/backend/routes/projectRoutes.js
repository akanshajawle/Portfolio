const express = require('express');
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  getProjectById,
} = require('../controllers/projectController');

// Public routes
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

module.exports = router;
