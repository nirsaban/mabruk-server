const categoryRoute = require("./category.route.js");
const userRoute = require("./user.route");
const router = require("express").Router();
const requireAuth = require("../middlewares/auth")

router.use("/category",requireAuth,categoryRoute);
router.use("/user",userRoute);

module.exports = router
