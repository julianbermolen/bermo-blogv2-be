const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/posts.js');

router.get('/posts', userCtrl.getPosts);
router.post('/posts',userCtrl.savePosts);
router.get('/post/:id',userCtrl.getPost);
module.exports = router;