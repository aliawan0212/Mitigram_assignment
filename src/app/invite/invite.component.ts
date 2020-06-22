import { Output, Component, OnInit ,EventEmitter } from '@angular/core';
import contacts from '../data.json';

@Component({
  selector: 'invite',
  templateUrl: './invite.component.html',
  styleUrls: [ './invite.component.css' ]
})
export class InviteComponent implements OnInit  {
  @Output() inviteContactView: EventEmitter<any> = new EventEmitter();
  contacts = JSON.parse(JSON.stringify(contacts));
  
  filter: string = "all";
  inviteAll = false;
  inviteAdhoc = false;
  groupInviteAll = false;
  groupsName= [];
  groups= [];
  newInvitelist =[]; 
  invitelist =[]; 
  inviteListView= false;
  newinvite: string;
  ngOnInit(){
    this.contacts.forEach(contact =>{
      contact['invite'] = false;
      if(contact.groups){
        this.groupsName = this.groupsName.concat(contact.groups);
      }
    });
     this.groups =this.groupsName.filter((v,i) => this.groupsName.indexOf(v) === i);
  }

  closeInviteCard() {
    this.inviteContactView.emit(false);
  }

  checkgroup(arr, val) {
    if(arr.includes(val)){
      return true;
    } else {
      return false;
    }
  }

  selectAll(val){    
    this.contacts.forEach(contact =>{
      contact['invite'] = val;
    });
  }

  selectAllFromGroup(group ,val){    
    this.contacts.forEach(contact =>{
      if(contact.groups){
        if(contact.groups.includes(group)){
         contact['invite'] = val;
        }
      }
    });
  }

  accordinClosed() {
    this.groupInviteAll = false;
  }

  inviteNew(){
    if(this.inviteAdhoc){
      this.inviteAdhoc = false;
    } else {
      this.inviteAdhoc = true;
    }
  }

  AddtoInviteList(newinvite) {
    this.inviteAdhoc = false;
    this.newInvitelist.push(newinvite);
    this.newinvite = "";
  }

  removeNewInvite(index) {
    this.newInvitelist.splice(index, 1);
  }
  
  removeInvite(index) {
    this.invitelist.splice(index, 1);
  }

  invite(){
    this.inviteListView = false;
    this.inviteContactView.emit(false);
  }

  backtoInvite() {
    this.inviteListView = false;
    this.invitelist = [];
  }

  viewInviteList(){
    if(this.newInvitelist.length){
     this.invitelist.push(this.newInvitelist);
    }
    this.contacts.forEach(contact => {
      if(contact.invite){
        this.invitelist.push(contact.email);
      }
    });
    if(this.invitelist.length){
       this.inviteListView = true;
    }
   
  }



}