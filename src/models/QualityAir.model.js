export class QualityAir{
    constructor(idUsers,temperature, humidity, iQA, status, sensors){
        this.idUsers = idUsers;
        this.temperature = temperature;
        this.humidity = humidity;
        this.iQA = iQA;
        this.status = status;
        this.sensors = sensors;
    }
}