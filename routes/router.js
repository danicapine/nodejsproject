const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
router.get('/abouts', con.abouts);
router.get('/abouts/contacts', con.contacts);
router.get('/users', con.users);
router.get('/products', con.products);
module.exports = router;