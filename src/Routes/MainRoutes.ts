import { Application } from "express"

export default (app : Application) => {

    app.get("/", (req, res) => {

        res.sendStatus(200);

    });

}