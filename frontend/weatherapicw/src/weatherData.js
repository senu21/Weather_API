class WeatherData {
    constructor(temperature, isActiveIoTDeviceTemperature, humidity, isActiveIoTDeviceHumidity, airPressure, isActiveIoTDeviceAirPressure, lastUpdatedDateTime, district) {
      this._temperature = temperature;
      this._isActiveIoTDeviceTemperature = isActiveIoTDeviceTemperature;
      this._humidity = humidity;
      this._isActiveIoTDeviceHumidity = isActiveIoTDeviceHumidity;
      this._airPressure = airPressure;
      this._isActiveIoTDeviceAirPressure = isActiveIoTDeviceAirPressure;
      this._lastUpdatedDateTime = lastUpdatedDateTime;
      this._district = district;
    }
  
    get temperature() {
      return this._temperature;
    }
  
    set temperature(value) {
      this._temperature = value;
    }
  
    get isActiveIoTDeviceTemperature() {
      return this._isActiveIoTDeviceTemperature;
    }
  
    set isActiveIoTDeviceTemperature(value) {
      this._isActiveIoTDeviceTemperature = value;
    }

    get humidity() {
      return this._humidity;
    }
  
    set humidity(value) {
      this._humidity = value;
    }
  
    get isActiveIoTDeviceHumidity() {
      return this._isActiveIoTDeviceHumidity;
    }
  
    set isActiveIoTDeviceHumidity(value) {
      this._isActiveIoTDeviceHumidity = value;
    }
  
    get airPressure() {
      return this._airPressure;
    }
  
    set airPressure(value) {
      this._airPressure = value;
    }
  
    get isActiveIoTDeviceAirPressure() {
      return this._isActiveIoTDeviceAirPressure;
    }
  
    set isActiveIoTDeviceAirPressure(value) {
      this._isActiveIoTDeviceAirPressure = value;
    }
  
    get lastUpdatedDateTime() {
      return this._lastUpdatedDateTime;
    }
  
    set lastUpdatedDateTime(value) {
      this._lastUpdatedDateTime = value;
    }
  
    get district() {
      return this._district;
    }
  
    set district(value) {
      this._district = value;
    }
  }
  
  module.exports = WeatherData;
  