import { QualityAir } from "../models/QualityAir.model.js";

let listDeviceQualityAir = [
    {
        "idUser": "a1b2c3d4-e5f6-7890-ab12-cdef34567890",
        "temperature": 27.4,
        "humidity": 60,
        "iQA": "Moderate",
        "status": "Active",
        "sensors": {
            "PM2_5": 18,
            "PM10": 30,
            "CO": 0.4,
            "NO2": 18,
            "O3": 0.03,
            "SO2": 0.02,
            "smoke": 10
        }
    },
    {
        "idUser": "b2c3d4e5-f678-90ab-12cd-ef34567890ab",
        "temperature": 24.8,
        "humidity": 55,
        "iQA": "Good",
        "status": "Active",
        "sensors": {
            "PM2_5": 12,
            "PM10": 25,
            "CO": 0.2,
            "NO2": 12,
            "O3": 0.02,
            "SO2": 0.01,
            "smoke": 5
        }
    },
    {
        "idUser": "c3d4e5f6-7890-ab12-cdef-34567890ab12",
        "temperature": 30.2,
        "humidity": 70,
        "iQA": "Poor",
        "status": "Inactive",
        "sensors": {
            "PM2_5": 22,
            "PM10": 35,
            "CO": 0.6,
            "NO2": 20,
            "O3": 0.04,
            "SO2": 0.03,
            "smoke": 15
        }
    },
    {
        "idUser": "d4e5f678-90ab-12cd-ef34-567890ab12cd",
        "temperature": 22.1,
        "humidity": 50,
        "iQA": "Very Poor",
        "status": "Active",
        "sensors": {
            "PM2_5": 25,
            "PM10": 40,
            "CO": 0.8,
            "NO2": 25,
            "O3": 0.05,
            "SO2": 0.04,
            "smoke": 20
        }
    }
];

export const createUser = (temperature, humidity, iQA, status, sensors) => {
    let user = new QualityAir(temperature, humidity, iQA, status, sensors);
    listDeviceQualityAir.push(user);
    return user;
}

export const searchAll = () => {
    return listDeviceQualityAir;
}

export const searcQualityAir = () => {
    return listDeviceQualityAir.filter(({ iQA }) => iQA == "Good" || iQA == "Moderate");
}

export const searchId = (userId) =>{
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if(idExist){
        return listDeviceQualityAir.find(({idUser}) => idUser === userId);
    }else{
        return "Esse id não existe";
    }
}

export const searchSensors = (sensorSpecific) =>{
    const sensorsExist = listDeviceQualityAir.filter(sensor => sensor.sensors[sensorSpecific] !== undefined);
    if(sensorsExist.length > 0){
        return listDeviceQualityAir.filter(data => sensorSpecific && data.sensors).map(specificSensor => ({
            idUser: specificSensor.idUser,
            valueSensor: specificSensor.sensors[sensorSpecific]
        }));
    }else{
        return "Esse sensor não existe";
    }       
}

export const updateStatus = (userId, status) =>{
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if(idExist){
        let indexId = listDeviceQualityAir.findIndex(user => user.idUser === userId);
        if(status === "Active" || status === "Inactive"){
            listDeviceQualityAir[indexId].status = status;
            return listDeviceQualityAir[indexId];
        }else{
            return "Não pode ser valores diferentes de 'Active' e 'Inactive'";
        }   
    }else{
        return "Esse id não existe";
    }
}

export const deleteUserInactive = (userId) => {
    const idExist = listDeviceQualityAir.find(id => id.idUser === userId);
    if (idExist && idExist.status === "Inactive") {
        const indexId = listDeviceQualityAir.findIndex(id => id.idUser === userId);
        listDeviceQualityAir.splice(indexId, 1);
        return "Usuário inativo removido.";
    } else {
        return "Esse id não existe e/ou o status não está inativo";
    }
};
