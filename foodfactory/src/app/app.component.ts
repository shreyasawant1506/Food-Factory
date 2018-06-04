import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDC8wa8hw1iebvZFNsvJdPZ85yn4YYmlM8",
      authDomain: "food-factory-161af.firebaseapp.com"
    })
  }
}
