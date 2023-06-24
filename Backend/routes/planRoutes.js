const express = require('express');
const planRouter = express.Router();
const { getAllplansController,
    createPlanController,
    updatePlanController,
    deletePlanController,
    getPlanController
} =
    require('../controller/planController');
const { protectRoute } = require("../controller/authController");
// plans -> get all the plans from db -> sensitive route -> protected route -> logged in i will only allow that person 
planRouter.route("/")
    .get(getAllplansController,protectRoute)
    .post(createPlanController)

planRouter.route("/:planRoutes")
    .get(getPlanController,protectRoute)
    .patch(updatePlanController)
    .delete(deletePlanController)

// loggedin plan
module.exports = planRouter;
