import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAihcP5K6ihw-ax6hsO-BrpFh9ZL9EZBog",
      authDomain: "bookshelves-b8645.firebaseapp.com",
      projectId: "bookshelves-b8645",
      storageBucket: "bookshelves-b8645.appspot.com",
      messagingSenderId: "971746993381",
      appId: "1:971746993381:web:0747dbb51fca7d0161600c",
      measurementId: "G-D8S3QMB5TQ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
