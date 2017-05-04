import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isAllowed = false;
  serverCreated = false;
  text = "Server Not Created";
  serverName = "Test";

  serversList  = ['Testserver', 'Testserver 2']
  constructor() {
    setTimeout(() => {
      this.isAllowed = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate(){
    this.text = 'Server Created! Name is ' + this.serverName;
    this.serversList.push(this.serverName);
    this.serverCreated = true;
  }

  // updateServerName(event : Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
