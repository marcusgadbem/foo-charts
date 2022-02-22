# FooCharts

This repo reproduces an issue with Android devices where `VictoryZoomContainer` seems to prevent `VictoryScatter` to capture `onPress` event.
On simulator works fine.

### Versions

* react-native: 0.67.2
* victory-native: 36.3.0

## Reproducing the problem

1. Run server: `yarn start`
2. Connect an Android device to your machine and run the application on it. Eg.:
```sh
$ adb devices -l
List of devices attached
12345679         device usb:XXXXX product:XXXXX model:XXXXX device:XXXXX transport_id:2

$ yarn android --deviceId=12345679
```
3. From this point on, you should be able to see 2 charts: first one without `VictoryZoomContainer` and second one with `VictoryZoomContainer`. Tapping datapoints in first chart logs a `Tap` to JS console, while in the second chart nothing happens.

Please check `App.js` for implementaion details.
