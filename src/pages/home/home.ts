import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

import { TelPage } from '../tel/tel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(

    public nav: NavController,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private androidFullScreen: AndroidFullScreen,
    private bluetoothSerial: BluetoothSerial,
    public navParams: NavParams,
    private alertCtrl: AlertController,
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.androidFullScreen.immersiveMode();
    this.bluetoothSerial.enable();
  }
  
  public rootPage: any = HomePage;
  startSearch:boolean=false;
  public Adevices = [];
  isScanning:Boolean;
  isConnecting:Boolean = false ;
  

goTotel(){
  this.nav.push(TelPage);
}



 /*search(){
   this.startSearch = true;
  this.bluetoothSerial.isEnabled().then(() => {
    this.bluetoothSerial.discoverUnpaired().then((devices) => {
      devices.array.forEach(device => {
        this.Adevices.push(device);
      });
    })
  })
 }*/
conn(){
  this.isConnecting = true;
  this.bluetoothSerial.connect("98:D3:31:FC:45:51").subscribe((data)=>{
    let alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: data,
        buttons: ['ok']
        
        });
        alert.present();
        this.nav.push(TelPage);
        this.bluetoothSerial.write('S').then(() => {
          console.log("Sent"),
          () => (console.log("not Sent")
        )});
},error=>{
    let alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: error,
        buttons: ['ok']
        });
        alert.present();
});

}

/*
 connectToIt(dev){
  let device = this.navParams.get('device');
        this.bluetoothSerial.connect(dev).subscribe((data)=>{
            let alert = this.alertCtrl.create({
                title: 'Bluetooth',
                subTitle: data,
                buttons: ['ok']
                
                });
                alert.present();
                this.nav.push(TelPage);
        },error=>{
            let alert = this.alertCtrl.create({
                title: 'Bluetooth',
                subTitle: error,
                buttons: ['ok']
                });
                alert.present();
        });

  }*/
}
