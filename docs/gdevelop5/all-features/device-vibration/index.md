---
title: Device vibration
---
# Device vibration

These actions give you access to the vibration functionality on mobile devices.

Vibration is supported on these devices:

HTML web games:

  - Android: Yes
  - Apple iOS: **No**

Native mobile apps:

  - Android: Yes
  - Apple iOS: Yes

!!! note

    The **[gamepad](/gdevelop5/all-features/gamepad)** extension can be used to control vibration on game controllers.

### Actions

#### Vibrate

This action vibrates the device once by the given value in milliseconds. (numerical value).

#### Vibrate by pattern

This action vibrates the device in a pattern. Every first value represents the time of vibration, every second the time of silence. Each value must be given in milliseconds as a comma-separated list of numerical values. *Don't forget the quotation marks!*

!!! note

        **Example:** "1000,500,1000"

    One second of vibration, followed by half a second of silence and then one more second of vibration.

#### Stop vibration

This action stops the vibration after the current pattern interval.

![](/gdevelop5/all-features/devicevibrationevents.png)

## Reference

All actions, conditions and expressions are listed in [the device vibration reference page](/gdevelop5/all-features/device-vibration/reference/).
