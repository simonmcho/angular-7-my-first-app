import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // can select attributes or class
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = `No Server was created!`;
	constructor() {
		setTimeout(() => this.allowNewServer = true, 2000);
	}

  	ngOnInit() {
	}

	onCreateServer() {
		this.serverCreationStatus = 'Server was created!';
	}
}
