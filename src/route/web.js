import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/hoiclmm',(req,res) =>{
        return res.send("Hello con cac")
    });

    router.get('/about', homeController.getAboutPage);

    return app.use("/", router);
}

module.exports = initWebRoutes;