# RC_robotApp_Ionic

### Installation


Install Ionic 

```sh
$ npm install -g cordova ionic
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd /yourPath/Native_App
$ (sudo) npm install -d
$ ionic cordova platform add android
or
$ ionic cordova platform add ios
$ ionic cordova build android
$ ionic serve
```

For test on device 

```sh
$ ionic cordova run android --device
or
$ ionic cordova run ios --device
```
Full Doc of Ionic [Here](https://ionicframework.com/getting-started) .
