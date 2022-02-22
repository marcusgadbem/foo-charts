# FooCharts

This repo reproduces an issue with Android devices where `VictoryZoomContainer` seems to prevent `VictoryScatter` to capture `onPress` event.
On simulator works fine.

### Versions

* react-native: 0.67.2
* victory-native: 36.3.0

## Setup

1. Install packages & run server: `yarn && yarn start`
2. Connect a physical Android device to your machine (via USB) and run the application on it. Eg.:
```sh
$ adb devices -l
List of devices attached
12345679         device usb:XXXXX product:XXXXX model:XXXXX device:XXXXX transport_id:2

$ yarn android --deviceId=12345679
```
3. From this point on, you should be able to see 2 charts: first one does not use `VictoryZoomContainer` and second one using `VictoryZoomContainer`. 

## Expectation 

Tapping datapoints in both charts should log `Tap` to **javascript console**

## Results

**Android**
* simulator: `onPress` works fine for both charts
* physical device: `onPress` only works on first chart, without `VictoryZoomContainer`

**iOS**
* simulator: works fine both charts
* physical device:

Please check `App.js` for implementaion details.
