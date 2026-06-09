 class SmartDevice{ 
    constructor(deviceName,type){
    this.deviceName = deviceName ;
    this.type = type ; 


    this.isOn = false ;
    this.battery = 100 ;

    this.deviceId = Math.random().toString(36).substring(2,11).toUpperCase();
    
    }
}
let lamp = new SmartDevice("Đèn ngủ", "Light");
let ac = new SmartDevice("Điều hòa", "AirConditioner");
let fan = new SmartDevice("Quạt", "Fan");

console.log(lamp);
console.log(ac);
console.log(fan);

