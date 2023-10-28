import {Express, static as expressStatic, } from "express";
import {INestApplication} from "@nestjs/common";
import * as path from "path";

export class Router {
    private app: INestApplication;

    public constructor(app: INestApplication) {
        this.app = app;

        app.use(`/uploads`, expressStatic(path.join(__dirname, '..', './uploads')));
    }
}