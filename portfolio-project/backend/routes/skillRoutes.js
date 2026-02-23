const express = require('express');
const router = express.Router();
const {
  getSkills,
  getSkillsByCategory,
  getSkillById,
} = require('../controllers/skillController');

// Public routes
router.get('/', getSkills);
router.get('/category/:category', getSkillsByCategory);
router.get('/:id', getSkillById);

module.exports = router;
