// in routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'temp_uploads/' });  // or your preferred temp folder
const { uploadProfileImage } = require('../controllers/imagecontroller');

router.post('/upload-profile', upload.single('profile'), uploadProfileImage);
module.exports = router;
