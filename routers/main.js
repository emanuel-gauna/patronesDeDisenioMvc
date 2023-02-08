const express = require("express");/* requerrir express */
const router = express.Router();/* asignamos de express la funcion Router */
const controller = require("../controllers/mainControllers");/* requerimos el modulo mainControllers */

router.get("/", controller.home);
router.get("/about", controller.about);


module.exports = router;