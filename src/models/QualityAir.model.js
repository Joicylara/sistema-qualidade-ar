import { v4 as uuidv4 } from 'uuid';

export class QualityAir{
    constructor(temperature, humidity, iQA, status, sensors){
        this.idUser = uuidv4();
        this.temperature = temperature;
        this.humidity = humidity;
        this.iQA = iQA;
        this.status = status;
        this.sensors = sensors;
    }
}