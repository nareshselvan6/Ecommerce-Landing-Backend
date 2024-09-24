import express from "express";
import { create, fetch, getbyid, getbyname, remove, update } from "../Controller/ecomcontroll.js";

const router=express.Router();

router.post("/create",create)
router.get("/get",fetch);
router.get("/getbyid/:id",getbyid);
router.get("/getbyname/:name",getbyname);
router.put("/update/:id",update)
router.delete("/delete/:id",remove)

export default router;