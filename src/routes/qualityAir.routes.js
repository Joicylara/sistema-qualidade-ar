import { Router } from "express";
import { createDevice, searchAll, searchId, searchSensors, searcQualityAir } from "../controllers/qualityAir.controller.js";

const deviceAirRouter = Router();


deviceAirRouter.post("/newDevice", (req, res) =>{
    const {idUsers,temperature, humidity, iQA, status, sensors} = req.body;
    const newDevice = createDevice(idUsers,temperature, humidity, iQA, status, sensors);
    res.json({newDevice});
});

deviceAirRouter.get("/searchDevice", (req, res) =>{
    const allDevice = searchAll();
    res.json({allDevice});
});

deviceAirRouter.get("/searchQualityAir", (req, res) =>{
    const qualityAir = searcQualityAir();
    res.json({qualityAir});
});

deviceAirRouter.get("/searchDevice/:id", (req, res) =>{
    const { id } =  req.params;
    const idDevice = parseInt(id);
    const deviceId = searchId(idDevice);

    if(!deviceId){
        return res.status(404).send("Dispositivo não encontrado!");
    }
    res.json({deviceId});
});

deviceAirRouter.get("/searchSensorSpecific/:sensors", (req, res) =>{
    const { sensors } = req.params;
    const sensorSpecific = searchSensors(sensors);

    if(sensorSpecific.length === 0){
        return res.status(404).send("Sensor não encontrado!");
    }
    res.json({sensorSpecific});
});


export { deviceAirRouter }