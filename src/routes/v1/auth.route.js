// CRIO_SOLUTION_START_MODULE_AUTH
// CRIO_SOLUTION_END_MODULE_AUTH
const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");

const router = express.Router();

// TODO: CRIO_TASK_MODULE_AUTH - Implement "/v1/auth/register" and "/v1/auth/login" routes with request validation
router.post('/register',validate(authValidation.register),authController.register);
router.post('/login',validate(authValidation.login),authController.login);
//module.exports = router;

module.exports = router;
