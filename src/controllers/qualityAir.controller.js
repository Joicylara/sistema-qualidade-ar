import { QualityAir } from "../models/QualityAir.model.js";

let listDeviceQualityAir = [
    {
        "idUsuario": 1,
        "temperatura": 27.4,
        "humidade": 60,
        "iQA": "Moderada",
        "dispositivo": "Ativo",
        "sensores": {
            "PM2_5": 18,
            "PM10": 30,
            "CO": 0.4,
            "NO2": 18,
            "O3": 0.03,
            "SO2": 0.02,
            "fumaca": 10
        }
    },
    {
        "idUsuario": 2,
        "temperatura": 24.8,
        "humidade": 55,
        "iQA": "Boa",
        "dispositivo": "Ativo",
        "sensores": {
            "PM2_5": 12,
            "PM10": 25,
            "CO": 0.2,
            "NO2": 12,
            "O3": 0.02,
            "SO2": 0.01,
            "fumaca": 5
        }
    },
    {
        "idUsuario": 3,
        "temperatura": 30.2,
        "humidade": 70,
        "iQA": "Ruim",
        "dispositivo": "Inativo",
        "sensores": {
            "PM2_5": 22,
            "PM10": 35,
            "CO": 0.6,
            "NO2": 20,
            "O3": 0.04,
            "SO2": 0.03,
            "fumaca": 15
        }
    },
    {
        "idUsuario": 4,
        "temperatura": 22.1,
        "humidade": 50,
        "iQA": "Péssima",
        "dispositivo": "Ativo",
        "sensores": {
            "PM2_5": 25,
            "PM10": 40,
            "CO": 0.8,
            "NO2": 25,
            "O3": 0.05,
            "SO2": 0.04,
            "fumaca": 20
        }
    }
];

export const createDevice = (idUsers, temperature, humidity, iQA, status, sensors) => {
    let deviceAir = new QualityAir(idUsers, temperature, humidity, iQA, status, sensors);
    listDeviceQualityAir.push(deviceAir);
    return deviceAir;
}

export const searchAll = () => {
    return listDeviceQualityAir;
}

export const searcQualityAir = () => {
    return listDeviceQualityAir.filter(({ iQA }) => iQA == "Boa" || iQA == "Moderada");
}

export const searchId = (deviceId) =>{
    deviceId = parseInt(deviceId);
    return listDeviceQualityAir.find(({idUsuario}) => idUsuario === deviceId);

}


export const searchSensors = (sensorSpecific) =>{
    return listDeviceQualityAir.filter(device =>
        Object.values(device.sensores).includes(sensorSpecific));
}