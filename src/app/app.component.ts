import { Component } from '@angular/core';

import contacts from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public contacts = contacts;
  inviteContactView = false;
  name = 'Contacts';


  inviteContactsView(value) {
    this.inviteContactView = value;
  }
}
