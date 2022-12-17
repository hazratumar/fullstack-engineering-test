//import express module
const app = require('express');
// Destructure tasks 
var { FirstTask, SecondTask, ThirdTask, ForOtherRoutes } = require('../controllers/Tasks.js');
const router = app.Router();
// First Task callback
router.get("/first-task/i-want-title/", FirstTask);
// Second Task async await
router.get("/second-task/i-want-title/", SecondTask);
// Third Task promise
router.get("/third-task/i-want-title/", ThirdTask);
//For other routes handling
router.get("*", ForOtherRoutes);

module.exports = router;
