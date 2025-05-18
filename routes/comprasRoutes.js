const express = require('express')
const router = express.Router()

const {payment} = require('../controllers/comprasController')

router.post('/pagamento/:ra', payment)