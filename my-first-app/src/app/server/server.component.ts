/**
 * Created by kchekuri on 5/3/2017.
 */


import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent{

  serverId :  number = 10;
  serverStatus : string = "Online";

  getServerStatus() {
    return this.serverStatus;
  }

}

