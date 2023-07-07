# Smooth Camera

<img src="https://resources.gdevelop-app.com/assets/Icons/Line Hero Pack/Master/SVG/Computers and Hardware/Computers and Hardware_camcoder_gopro_go_pro_camera.svg" class="extension-icon"></img>
Smoothly scroll to follow an object.

**Authors and contributors** to this community extension: [D8H](https://gd.games/D8H).

---

The camera follows an object according to:

- a frame rate independent catch-up speed to make the scrolling from smooth to strong
- a maximum speed to do linear following ([open the project online](https://editor.gdevelop.io/?project=example://platformer-with-tilemap)) or slow down the camera when teleporting the object
- a follow-free zone to avoid scrolling on small movements
- an offset to see further in one direction
- an extra delay and catch-up speed to give an impression of speed (useful for dash)
- position forecasting and delay to simulate a cameraman response time

A platformer dedicated behavior allows to switch of settings when the character is in air or on the floor. This can be used to stabilize the camera when jumping.

!!! tip
    Learn [how to install new extensions](/gdevelop5/extensions/search) by following a step-by-step guide.



## Smooth Camera 

Smoothly scroll to follow an object. 

### Behavior actions

**Add forecast history position**  
Add a position to the history for forecasting. This is called 2 times in UpadteDelayedPosition.

**Do move the camera closer**  
Move the camera closer to the object.

**Draw debug**  
Draw the targeted and actual camera position.

**Move the camera closer**  
Move the camera closer to the object. This action must be called after the object has moved for the frame.

**Project history ends**  
Project history ends position to have the vector on the line from linear regression. This function is only called by UpdateForecastedPosition.

**Camera delay**  
Change the camera delay (in seconds).

**Downward catch-up speed**  
Change the camera downward catch-up speed (in ratio per second).

**Downward maximum speed**  
Change the camera downward maximum speed (in pixels per second).

**Follow free area bottom border**  
Change the camera follow free area bottom border.

**Follow free area left border**  
Change the camera follow free area left border.

**Follow free area right border**  
Change the camera follow free area right border.

**Follow free area top border**  
Change the camera follow free area top border.

**Follow on X**  
Enable or disable the following on X axis.

**Follow on Y**  
Enable or disable the following on Y axis.

**Forecast time**  
Change the camera forecast time (in seconds).

**Leftward catch-up speed**  
Change the camera leftward catch-up speed (in ratio per second).

**Leftward maximum speed**  
Change the camera leftward maximum speed (in pixels per second).

**Camera Offset X**  
Change the camera offset on X axis of an object.

**Camera offset X**  
Change the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

**Camera Offset Y**  
Change the camera offset on Y axis of an object.

**Camera offset Y**  
Change the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

**Camera delay property**  
Change the property value for the camera delay.

**CameraDelayCatchUpDuration property**  
Change the property value for the cameraDelayCatchUpDuration.

**CameraDelayCatchUpSpeed property**  
Change the property value for the cameraDelayCatchUpSpeed.

**CameraExtraDelay property**  
Change the property value for the cameraExtraDelay.

**Camera offset X property**  
Change the property value for the camera offset X.

**Camera offset Y property**  
Change the property value for the camera offset Y.

**DelayedCenterX property**  
Change the property value for the delayedCenterX.

**DelayedCenterY property**  
Change the property value for the delayedCenterY.

**Downward catch-up speed (in ratio per second) property**  
Change the property value for the downward catch-up speed (in ratio per second).

**Downward maximum speed property**  
Change the property value for the downward maximum speed.

**Follow free area bottom border property**  
Change the property value for the follow free area bottom border.

**Follow free area left border property**  
Change the property value for the follow free area left border.

**Follow free area right border property**  
Change the property value for the follow free area right border.

**Follow free area top border property**  
Change the property value for the follow free area top border.

**Follow on X axis property**  
Update the property value for "follow on X axis".

**Follow on Y axis property**  
Update the property value for "follow on Y axis".

**ForecastHistoryCovariance property**  
Change the property value for the forecastHistoryCovariance.

**Forecast history duration property**  
Change the property value for the forecast history duration.

**ForecastHistoryLinearA property**  
Change the property value for the forecastHistoryLinearA.

**ForecastHistoryLinearB property**  
Change the property value for the forecastHistoryLinearB.

**ForecastHistoryMeanX property**  
Change the property value for the forecastHistoryMeanX.

**ForecastHistoryMeanY property**  
Change the property value for the forecastHistoryMeanY.

**ForecastHistoryVarianceX property**  
Change the property value for the forecastHistoryVarianceX.

**ForecastHistoryVarianceY property**  
Change the property value for the forecastHistoryVarianceY.

**Forecast time property**  
Change the property value for the forecast time.

**ForecastedX property**  
Change the property value for the forecastedX.

**ForecastedY property**  
Change the property value for the forecastedY.

**Index (local variable) property**  
Change the property value for the index (local variable).

**IsCalledManually property**  
Update the property value for "isCalledManually".

**Leftward catch-up speed (in ratio per second) property**  
Change the property value for the leftward catch-up speed (in ratio per second).

**Leftward maximum speed property**  
Change the property value for the leftward maximum speed.

**LogDownwardSpeed property**  
Change the property value for the logDownwardSpeed.

**LogLeftwardSpeed property**  
Change the property value for the logLeftwardSpeed.

**LogRightwardSpeed property**  
Change the property value for the logRightwardSpeed.

**LogUpwardSpeed property**  
Change the property value for the logUpwardSpeed.

**OldX (local variable) property**  
Change the property value for the oldX (local variable).

**OldY (local variable) property**  
Change the property value for the oldY (local variable).

**ProjectedNewestX property**  
Change the property value for the projectedNewestX.

**ProjectedNewestY property**  
Change the property value for the projectedNewestY.

**ProjectedOldestX property**  
Change the property value for the projectedOldestX.

**ProjectedOldestY property**  
Change the property value for the projectedOldestY.

**Rightward catch-up speed (in ratio per second) property**  
Change the property value for the rightward catch-up speed (in ratio per second).

**Rightward maximum speed property**  
Change the property value for the rightward maximum speed.

**Upward catch-up speed (in ratio per second) property**  
Change the property value for the upward catch-up speed (in ratio per second).

**Upward maximum speed property**  
Change the property value for the upward maximum speed.

**WaitingEnd property**  
Change the property value for the waitingEnd.

**WaitingSpeedXMax property**  
Change the property value for the waitingSpeedXMax.

**WaitingSpeedYMax property**  
Change the property value for the waitingSpeedYMax.

**Rightward catch-up speed**  
Change the camera rightward catch-up speed (in ratio per second).

**Rightward maximum speed**  
Change the camera rightward maximum speed (in pixels per second).

**Upward catch-up speed**  
Change the camera upward catch-up speed (in ratio per second).

**Upward maximum speed**  
Change the camera upward maximum speed (in pixels per second).

**Toggle Follow on X axis property**  
Toggle the property value for follow on X axis.  
If it was true, it will become false, and if it was false it will become true.

**Toggle Follow on Y axis property**  
Toggle the property value for follow on Y axis.  
If it was true, it will become false, and if it was false it will become true.

**Toggle IsCalledManually property**  
Toggle the property value for isCalledManually.  
If it was true, it will become false, and if it was false it will become true.

**Update delayed position**  
Update delayed position and delayed history. This is called in doStepPreEvents.

**Update forecasted position**  
Update forecasted position. This is called in doStepPreEvents.

**Wait and catch up**  
Delay the camera according to a maximum speed and catch up the delay.

### Behavior conditions

**Camera is delayed**  
Check if the camera following target is delayed from the object.

**Camera is waiting**  
Check if the camera following is waiting at a reduced speed.

**Camera offset X**  
Compare the camera offset on X axis of the object. This is not the current difference between the object and the camera position.

**Camera offset Y**  
Compare the camera offset on Y axis of the object. This is not the current difference between the object and the camera position.

**Camera delay property**  
Compare the property value for the camera delay.

**CameraDelayCatchUpDuration property**  
Compare the property value for the cameraDelayCatchUpDuration.

**CameraDelayCatchUpSpeed property**  
Compare the property value for the cameraDelayCatchUpSpeed.

**CameraExtraDelay property**  
Compare the property value for the cameraExtraDelay.

**Camera offset X property**  
Compare the property value for the camera offset X.

**Camera offset Y property**  
Compare the property value for the camera offset Y.

**DelayedCenterX property**  
Compare the property value for the delayedCenterX.

**DelayedCenterY property**  
Compare the property value for the delayedCenterY.

**Downward catch-up speed (in ratio per second) property**  
Compare the property value for the downward catch-up speed (in ratio per second).

**Downward maximum speed property**  
Compare the property value for the downward maximum speed.

**Follow free area bottom border property**  
Compare the property value for the follow free area bottom border.

**Follow free area left border property**  
Compare the property value for the follow free area left border.

**Follow free area right border property**  
Compare the property value for the follow free area right border.

**Follow free area top border property**  
Compare the property value for the follow free area top border.

**Follow on X axis property**  
Check the property value for follow on X axis.

**Follow on Y axis property**  
Check the property value for follow on Y axis.

**ForecastHistoryCovariance property**  
Compare the property value for the forecastHistoryCovariance.

**Forecast history duration property**  
Compare the property value for the forecast history duration.

**ForecastHistoryLinearA property**  
Compare the property value for the forecastHistoryLinearA.

**ForecastHistoryLinearB property**  
Compare the property value for the forecastHistoryLinearB.

**ForecastHistoryMeanX property**  
Compare the property value for the forecastHistoryMeanX.

**ForecastHistoryMeanY property**  
Compare the property value for the forecastHistoryMeanY.

**ForecastHistoryVarianceX property**  
Compare the property value for the forecastHistoryVarianceX.

**ForecastHistoryVarianceY property**  
Compare the property value for the forecastHistoryVarianceY.

**Forecast time property**  
Compare the property value for the forecast time.

**ForecastedX property**  
Compare the property value for the forecastedX.

**ForecastedY property**  
Compare the property value for the forecastedY.

**Index (local variable) property**  
Compare the property value for the index (local variable).

**IsCalledManually property**  
Check the property value for isCalledManually.

**Leftward catch-up speed (in ratio per second) property**  
Compare the property value for the leftward catch-up speed (in ratio per second).

**Leftward maximum speed property**  
Compare the property value for the leftward maximum speed.

**LogDownwardSpeed property**  
Compare the property value for the logDownwardSpeed.

**LogLeftwardSpeed property**  
Compare the property value for the logLeftwardSpeed.

**LogRightwardSpeed property**  
Compare the property value for the logRightwardSpeed.

**LogUpwardSpeed property**  
Compare the property value for the logUpwardSpeed.

**OldX (local variable) property**  
Compare the property value for the oldX (local variable).

**OldY (local variable) property**  
Compare the property value for the oldY (local variable).

**ProjectedNewestX property**  
Compare the property value for the projectedNewestX.

**ProjectedNewestY property**  
Compare the property value for the projectedNewestY.

**ProjectedOldestX property**  
Compare the property value for the projectedOldestX.

**ProjectedOldestY property**  
Compare the property value for the projectedOldestY.

**Rightward catch-up speed (in ratio per second) property**  
Compare the property value for the rightward catch-up speed (in ratio per second).

**Rightward maximum speed property**  
Compare the property value for the rightward maximum speed.

**Upward catch-up speed (in ratio per second) property**  
Compare the property value for the upward catch-up speed (in ratio per second).

**Upward maximum speed property**  
Compare the property value for the upward maximum speed.

**WaitingEnd property**  
Compare the property value for the waitingEnd.

**WaitingSpeedXMax property**  
Compare the property value for the waitingSpeedXMax.

**WaitingSpeedYMax property**  
Compare the property value for the waitingSpeedYMax.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SmoothCamera::CurrentDelay()` | Return the current camera delay. ||
| `Object.SmoothCamera::ForecastTimeRatio()` | Return the ratio between forecast time and the duration of the history. This function is only called by UpdateForecastedPosition. ||
| `Object.SmoothCamera::FreeAreaBottom()` | Return follow free area bottom border Y. ||
| `Object.SmoothCamera::FreeAreaLeft()` | Return follow free area left border X. ||
| `Object.SmoothCamera::FreeAreaRight()` | Return follow free area right border X. ||
| `Object.SmoothCamera::FreeAreaTop()` | Return follow free area top border Y. ||
| `Object.SmoothCamera::OffsetX()` | Return the camera offset on X axis of the object. This is not the current difference between the object and the camera position. ||
| `Object.SmoothCamera::OffsetY()` | Return the camera offset on Y axis of the object. This is not the current difference between the object and the camera position. ||
| `Object.SmoothCamera::PropertyCameraDelay()` | Return the property value for the camera delay. ||
| `Object.SmoothCamera::PropertyCameraDelayCatchUpDuration()` | Return the property value for the cameraDelayCatchUpDuration. ||
| `Object.SmoothCamera::PropertyCameraDelayCatchUpSpeed()` | Return the property value for the cameraDelayCatchUpSpeed. ||
| `Object.SmoothCamera::PropertyCameraExtraDelay()` | Return the property value for the cameraExtraDelay. ||
| `Object.SmoothCamera::PropertyCameraOffsetX()` | Return the property value for the camera offset X. ||
| `Object.SmoothCamera::PropertyCameraOffsetY()` | Return the property value for the camera offset Y. ||
| `Object.SmoothCamera::PropertyDelayedCenterX()` | Return the property value for the delayedCenterX. ||
| `Object.SmoothCamera::PropertyDelayedCenterY()` | Return the property value for the delayedCenterY. ||
| `Object.SmoothCamera::PropertyDownwardSpeed()` | Return the property value for the downward catch-up speed (in ratio per second). ||
| `Object.SmoothCamera::PropertyDownwardSpeedMax()` | Return the property value for the downward maximum speed. ||
| `Object.SmoothCamera::PropertyFollowFreeAreaBottom()` | Return the property value for the follow free area bottom border. ||
| `Object.SmoothCamera::PropertyFollowFreeAreaLeft()` | Return the property value for the follow free area left border. ||
| `Object.SmoothCamera::PropertyFollowFreeAreaRight()` | Return the property value for the follow free area right border. ||
| `Object.SmoothCamera::PropertyFollowFreeAreaTop()` | Return the property value for the follow free area top border. ||
| `Object.SmoothCamera::PropertyForecastHistoryCovariance()` | Return the property value for the forecastHistoryCovariance. ||
| `Object.SmoothCamera::PropertyForecastHistoryDuration()` | Return the property value for the forecast history duration. ||
| `Object.SmoothCamera::PropertyForecastHistoryLinearA()` | Return the property value for the forecastHistoryLinearA. ||
| `Object.SmoothCamera::PropertyForecastHistoryLinearB()` | Return the property value for the forecastHistoryLinearB. ||
| `Object.SmoothCamera::PropertyForecastHistoryMeanX()` | Return the property value for the forecastHistoryMeanX. ||
| `Object.SmoothCamera::PropertyForecastHistoryMeanY()` | Return the property value for the forecastHistoryMeanY. ||
| `Object.SmoothCamera::PropertyForecastHistoryVarianceX()` | Return the property value for the forecastHistoryVarianceX. ||
| `Object.SmoothCamera::PropertyForecastHistoryVarianceY()` | Return the property value for the forecastHistoryVarianceY. ||
| `Object.SmoothCamera::PropertyForecastTime()` | Return the property value for the forecast time. ||
| `Object.SmoothCamera::PropertyForecastedX()` | Return the property value for the forecastedX. ||
| `Object.SmoothCamera::PropertyForecastedY()` | Return the property value for the forecastedY. ||
| `Object.SmoothCamera::PropertyIndex()` | Return the property value for the index (local variable). ||
| `Object.SmoothCamera::PropertyLeftwardSpeed()` | Return the property value for the leftward catch-up speed (in ratio per second). ||
| `Object.SmoothCamera::PropertyLeftwardSpeedMax()` | Return the property value for the leftward maximum speed. ||
| `Object.SmoothCamera::PropertyLogDownwardSpeed()` | Return the property value for the logDownwardSpeed. ||
| `Object.SmoothCamera::PropertyLogLeftwardSpeed()` | Return the property value for the logLeftwardSpeed. ||
| `Object.SmoothCamera::PropertyLogRightwardSpeed()` | Return the property value for the logRightwardSpeed. ||
| `Object.SmoothCamera::PropertyLogUpwardSpeed()` | Return the property value for the logUpwardSpeed. ||
| `Object.SmoothCamera::PropertyOldX()` | Return the property value for the oldX (local variable). ||
| `Object.SmoothCamera::PropertyOldY()` | Return the property value for the oldY (local variable). ||
| `Object.SmoothCamera::PropertyProjectedNewestX()` | Return the property value for the projectedNewestX. ||
| `Object.SmoothCamera::PropertyProjectedNewestY()` | Return the property value for the projectedNewestY. ||
| `Object.SmoothCamera::PropertyProjectedOldestX()` | Return the property value for the projectedOldestX. ||
| `Object.SmoothCamera::PropertyProjectedOldestY()` | Return the property value for the projectedOldestY. ||
| `Object.SmoothCamera::PropertyRightwardSpeed()` | Return the property value for the rightward catch-up speed (in ratio per second). ||
| `Object.SmoothCamera::PropertyRightwardSpeedMax()` | Return the property value for the rightward maximum speed. ||
| `Object.SmoothCamera::PropertyUpwardSpeed()` | Return the property value for the upward catch-up speed (in ratio per second). ||
| `Object.SmoothCamera::PropertyUpwardSpeedMax()` | Return the property value for the upward maximum speed. ||
| `Object.SmoothCamera::PropertyWaitingEnd()` | Return the property value for the waitingEnd. ||
| `Object.SmoothCamera::PropertyWaitingSpeedXMax()` | Return the property value for the waitingSpeedXMax. ||
| `Object.SmoothCamera::PropertyWaitingSpeedYMax()` | Return the property value for the waitingSpeedYMax. ||

## Smooth platformer camera 

Smoothly scroll to follow a character and stabilize the camera when jumping. 

### Behavior actions

**Downward speed in the air (in ratio per second) property**  
Change the property value for the downward speed in the air (in ratio per second).

**Downward maximum speed in the air property**  
Change the property value for the downward maximum speed in the air.

**Follow free area bottom in the air property**  
Change the property value for the follow free area bottom in the air.

**Follow free area top in the air property**  
Change the property value for the follow free area top in the air.

**Upward speed in the air (in ratio per second) property**  
Change the property value for the upward speed in the air (in ratio per second).

**Upward maximum speed in the air property**  
Change the property value for the upward maximum speed in the air.

**Downward speed on the floor (in ratio per second) property**  
Change the property value for the downward speed on the floor (in ratio per second).

**Downward maximum speed on the floor property**  
Change the property value for the downward maximum speed on the floor.

**Follow free area bottom on the floor property**  
Change the property value for the follow free area bottom on the floor.

**Follow free area top on the floor property**  
Change the property value for the follow free area top on the floor.

**Upward speed on the floor (in ratio per second) property**  
Change the property value for the upward speed on the floor (in ratio per second).

**Upward maximum speed on the floor property**  
Change the property value for the upward maximum speed on the floor.

**JumpOriginY property**  
Change the property value for the jumpOriginY.

### Behavior conditions

**Downward speed in the air (in ratio per second) property**  
Compare the property value for the downward speed in the air (in ratio per second).

**Downward maximum speed in the air property**  
Compare the property value for the downward maximum speed in the air.

**Follow free area bottom in the air property**  
Compare the property value for the follow free area bottom in the air.

**Follow free area top in the air property**  
Compare the property value for the follow free area top in the air.

**Upward speed in the air (in ratio per second) property**  
Compare the property value for the upward speed in the air (in ratio per second).

**Upward maximum speed in the air property**  
Compare the property value for the upward maximum speed in the air.

**Downward speed on the floor (in ratio per second) property**  
Compare the property value for the downward speed on the floor (in ratio per second).

**Downward maximum speed on the floor property**  
Compare the property value for the downward maximum speed on the floor.

**Follow free area bottom on the floor property**  
Compare the property value for the follow free area bottom on the floor.

**Follow free area top on the floor property**  
Compare the property value for the follow free area top on the floor.

**Upward speed on the floor (in ratio per second) property**  
Compare the property value for the upward speed on the floor (in ratio per second).

**Upward maximum speed on the floor property**  
Compare the property value for the upward maximum speed on the floor.

**JumpOriginY property**  
Compare the property value for the jumpOriginY.

### Behavior expressions

| Expression | Description |  |
|-----|-----|-----|
| `Object.SmoothPlatformerCamera::PropertyAirDownwardSpeed()` | Return the property value for the downward speed in the air (in ratio per second). ||
| `Object.SmoothPlatformerCamera::PropertyAirDownwardSpeedMax()` | Return the property value for the downward maximum speed in the air. ||
| `Object.SmoothPlatformerCamera::PropertyAirFollowFreeAreaBottom()` | Return the property value for the follow free area bottom in the air. ||
| `Object.SmoothPlatformerCamera::PropertyAirFollowFreeAreaTop()` | Return the property value for the follow free area top in the air. ||
| `Object.SmoothPlatformerCamera::PropertyAirUpwardSpeed()` | Return the property value for the upward speed in the air (in ratio per second). ||
| `Object.SmoothPlatformerCamera::PropertyAirUpwardSpeedMax()` | Return the property value for the upward maximum speed in the air. ||
| `Object.SmoothPlatformerCamera::PropertyFloorDownwardSpeed()` | Return the property value for the downward speed on the floor (in ratio per second). ||
| `Object.SmoothPlatformerCamera::PropertyFloorDownwardSpeedMax()` | Return the property value for the downward maximum speed on the floor. ||
| `Object.SmoothPlatformerCamera::PropertyFloorFollowFreeAreaBottom()` | Return the property value for the follow free area bottom on the floor. ||
| `Object.SmoothPlatformerCamera::PropertyFloorFollowFreeAreaTop()` | Return the property value for the follow free area top on the floor. ||
| `Object.SmoothPlatformerCamera::PropertyFloorUpwardSpeed()` | Return the property value for the upward speed on the floor (in ratio per second). ||
| `Object.SmoothPlatformerCamera::PropertyFloorUpwardSpeedMax()` | Return the property value for the upward maximum speed on the floor. ||
| `Object.SmoothPlatformerCamera::PropertyJumpOriginY()` | Return the property value for the jumpOriginY. ||

---

*This page is an auto-generated reference page about the **Smooth Camera** extension, made by the community of [GDevelop, the open-source, cross-platform game engine designed for everyone](https://gdevelop.io/).* Learn more about [all GDevelop community-made extensions here](/gdevelop5/extensions).