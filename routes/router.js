const express = require('express');
const router = express.Router();
const kmy = require('../controller/KmyController');


router.get('/', kmy.index);
router.get('/about', kmy.about_tab);
router.get('/services', kmy.services_tab);
router.get('/contact', kmy.contact_tab);


module.exports = router;