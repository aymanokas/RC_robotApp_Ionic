import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-tel',
  templateUrl: 'tel.html'
})
export class TelPage {

  

  constructor(
    public navCtrl: NavController,
    private screenOrientation: ScreenOrientation,
    private statusBar: StatusBar,
    private androidFullScreen: AndroidFullScreen,
    private bluetoothSerial: BluetoothSerial
  ) {
   //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.statusBar.hide();
    this.androidFullScreen.immersiveMode(); 
  }
msgBlu = "Bluetooth Connected";

  angle = 90;
  VAR:any;
  av = 'A';
  rc = 'B';
  tdd = 'C';
  tgg = 'D';
  sl = 'E' ;
  sr = 'F';
  od = 'G';
  cd = 'H';
  pu = 'I';
  pd = 'J';
  pl = 'K';
  pr = 'L';
  op = 'M';
  cp = 'N';
  kpc = 'O';

  pinceL(){
    this.bluetoothSerial.write(this.pl).then(()=>{
      console.log("done")
      this.VAR = this.pl
    }, () => console.log("not Done"))
  }

  pinceR(){
    this.bluetoothSerial.write(this.pr).then(()=>{
      console.log("done")
      this.VAR = this.pr
    }, () => console.log("not Done"))
  }


  logAngle(){
    if (this.angle < 90) {
      this.bluetoothSerial.write(this.pl).then(() => {
        console.log("Sent"),
        () => (console.log("not Sent")
      )});
    } else if ( this.angle > 90 ){
      this.bluetoothSerial.write(this.pr).then(() => {
        console.log("Sent"),
        () => (console.log("not Sent")
      )});
    }else if (this.angle == 90 ){
      this.bluetoothSerial.write('S').then(() => {
        console.log("Sent"),
        () => (console.log("not Sent")
      )});
    }
  }
  stopAngle(){
    this.angle = 90;
    this.bluetoothSerial.write('S').then(() => {
      console.log("Sent")
      this.VAR = 'S'
    },() => (console.log("not Sent")
    ));
    
  }
  sendZ(){
    this.bluetoothSerial.write('Z').then(() => {
      console.log("Sent"),
   
      () => (console.log("not Sent")
    )});
  }
  avancer(){
    this.bluetoothSerial.write(this.av).then(() => {
      console.log("Sent")
      this.VAR = this.av
    },() => (console.log("not Sent")
    ));
  }
  reculer(){
    this.bluetoothSerial.write(this.rc).then(() => {
      console.log("Sent")
    this.VAR = this.rc
    },() => (console.log("not Sent")
    ));
  }
  td(){
    this.bluetoothSerial.write(this.tdd).then(() => {
      console.log("Sent")
      this.VAR = this.tdd
    }, () => (console.log("not Sent")
    ));
  }
  tg(){
    this.bluetoothSerial.write(this.tgg).then(() => {
      console.log("Sent")
      this.VAR = this.tgg
    }, () => (console.log("not Sent")
    ));
  }
  sekaLeft(){
    this.bluetoothSerial.write(this.sl).then(() => {
      console.log("Sent")
      this.VAR = this.sl
    },() => (console.log("not Sent")
    ));
  }
  sekaRight(){
    this.bluetoothSerial.write(this.sr).then(() => {
      console.log("Sent")
      this.VAR = this.sr
    },() => (console.log("not Sent")
    ));
  }
  openD(){
    this.bluetoothSerial.write(this.od).then(() => {
      console.log("Sent")
      this.VAR = this.od
     }, () => (console.log("not Sent")
    ));
  }
  closeD(){
    this.bluetoothSerial.write(this.cd).then(() => {
      console.log("Sent")
      this.VAR = this.cd
     }, () => (console.log("not Sent")
    ));
  }
  pinceUp(){
    this.bluetoothSerial.write(this.pu).then(() => {
      console.log("Sent")
      this.VAR = this.pu
     }, () => (console.log("not Sent")
    ));
  }
  pinceDown(){
    this.bluetoothSerial.write(this.pd).then(() => {
      console.log("Sent")
      this.VAR = this.pd
     }, () => (console.log("not Sent")
    ));
  }
  pinceLeft(){
    this.bluetoothSerial.write(this.pl).then(() => {
      console.log("Sent")
      this.VAR = this.pl
    },
      () => (console.log("not Sent")
    ));
  }
  pinceRight(){
    this.bluetoothSerial.write(this.pr).then(() => {
      console.log("Sent")
      this.VAR = this.pr
    },() => (console.log("not Sent")
    ));
  }
  openPince(){
    this.bluetoothSerial.write(this.op).then(() => {
      console.log("Sent")
      this.VAR = this.op
     }, () => (console.log("not Sent")
    ));
  }
  closePince(){
    this.bluetoothSerial.write(this.cp).then(() => {
      console.log("Sent")
      this.VAR = this.cp
    },() => (console.log("not Sent")
    ));
  }
  keepPinceClosed(){
    this.bluetoothSerial.write(this.kpc).then(() => {
      console.log("Sent")
      this.VAR = this.kpc
    },() => (console.log("not Sent")
    ));
  }
  
  
  
  setVarDefault(){
    this.av = 'A';
    this.rc = 'B';
    this.tdd = 'C';
    this.tgg = 'D';
    this.sl = 'E' ;
    this.sr = 'F';
    this.od = 'G';
    this.cd = 'H';
    this.pu = 'I';
    this.pd = 'J';
    this.pl = 'K';
    this.pr = 'L';
    this.op = 'M';
    this.cp = 'N';
    this.kpc = 'O';
  }
  

  sendS(){
    this.bluetoothSerial.write('S').then(() => {
      console.log("Sent"),
      () => (console.log("not Sent")
    )});
  }
 

}
