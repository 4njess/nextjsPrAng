import { Component } from '@angular/core';
import { abc } from '../configuration/configuration';
import { KeyValuePipe, NgFor } from '@angular/common';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-object-atr',
  standalone: true,
  imports: [NgFor, KeyValuePipe],
  templateUrl: './object-atr.component.html',
  styleUrl: './object-atr.component.css'
})
export class ObjectAtrComponent {
  conf:any = null
  confMod:any = null
  //объекты конфигурации
  mdc:any = null
  channels:any = null
  msi:any = null
  rso:any = null
  modRso:any = null
  rsi:any = null
  servers:any = null
  usGroup:any = null
  init = abc().then(config => (
    this.conf = config,
    this.channels = { ...this.conf.Channels},
    this.mdc = { ...this.conf.MobileDevicesCapabilities},
    this.msi = {...this.conf.MobileServerInfo},
    this.rso = {...this.conf.RootSecObject},
    this.rsi = {...this.conf.RtspServerInfo},
    this.servers = {...this.conf.Servers},
    this.usGroup = {...this.conf.UserGroup},
    this.confMod = {...this.conf},
    this.confMod.RootSecObject = {
      Id: this.conf.RootSecObject.Id,
      Name: this.conf.RootSecObject.Name,
      ChildChannels: this.conf.RootSecObject.ChildChannels,
      ChildSecObjects: this.conf.RootSecObject.ChildSecObjects.map((secObj: any) =>
        ({...secObj,
            ChildChannels: secObj.ChildChannels.map((ch:any) => this.conf.Channels.find((chan:any) => chan.Id === ch))
         }))
    },
    this.modRso = {...this.confMod.RootSecObject}
  ))

}
abc().then(r => console.log(r))

