# Device sensors

Allow the game to access the sensors of a mobile device. [Read more explanations about it.](/gdevelop5/all-features/device-sensors)

## Actions

**Activate motion sensor**  
Activate the motion sensor. (remember to turn it off again)

**Activate orientation sensor**  
Activate the orientation sensor. (remember to turn it off again)

**Deactivate motion sensor**  
Deactivate the motion sensor.

**Deactivate orientation sensor**  
Deactivate the orientation sensor.

## Conditions

**Compare the value of acceleration on X-axis**  
Compare the value of acceleration on the X-axis (m/s²).

**Compare the value of acceleration on Y-axis**  
Compare the value of acceleration on the Y-axis (m/s²).

**Compare the value of acceleration on Z-axis**  
Compare the value of acceleration on the Z-axis (m/s²).

**Sensor active**  
The condition is true if the device motion sensor is currently active

**Compare the value of orientation alpha**  
Compare the value of orientation alpha. (Range: 0 to 360°)

**Compare the value of orientation beta**  
Compare the value of orientation beta. (Range: -180 to 180°)

**Compare the value of orientation gamma**  
Compare the value of orientation gamma. (Range: -90 to 90°)

**Sensor active**  
The condition is true if the device orientation sensor is currently active

**Compare the value of rotation alpha**  
Compare the value of rotation alpha. (Note: few devices support this sensor)

**Compare the value of rotation beta**  
Compare the value of rotation beta. (Note: few devices support this sensor)

**Compare the value of rotation gamma**  
Compare the value of rotation gamma. (Note: few devices support this sensor)

## Expressions

| Expression | Description |  |
|-----|-----|-----|
| `DeviceSensors::AccelerationX()` | Get the devices acceleration on the X-axis (m/s²) ||
| `DeviceSensors::AccelerationY()` | Get the devices acceleration on the Y-axis (m/s²) ||
| `DeviceSensors::AccelerationZ()` | Get the devices acceleration on the Z-axis (m/s²) ||
| `DeviceSensors::OrientationAbsolute()` | Get if the devices orientation is absolute and not relative ||
| `DeviceSensors::OrientationAlpha()` | Get the devices orientation Alpha (compass) ||
| `DeviceSensors::OrientationBeta()` | Get the devices orientation Beta ||
| `DeviceSensors::OrientationGamma()` | Get the devices orientation Gamma value ||
| `DeviceSensors::RotationAlpha()` | Get the devices rotation Alpha ||
| `DeviceSensors::RotationBeta()` | Get the devices rotation Beta ||
| `DeviceSensors::RotationGamma()` | Get the devices rotation Gamma ||

---
*This page is an auto-generated reference page about the **Device sensors** feature of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop features here](/gdevelop5/all-features).