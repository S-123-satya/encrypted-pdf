const {Router} = require('express');
const { getPdfController } = require('../controllers/pdf-controllers');
const router=Router();

router.get('/',getPdfController);

module.exports=router;