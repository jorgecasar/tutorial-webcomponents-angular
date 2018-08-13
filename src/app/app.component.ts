import { Component } from '@angular/core';

import './wc-mood/wc-mood';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private moods: Array<string> = ['awesome', 'formidable', 'great', 'terrifying', 'wonderful', 'astonishing', 'breathtaking'];
  mood: string;

  constructor() {
    this.randomMood();
  }

  randomMood() {
    const index = Math.floor(Math.random()*this.moods.length);
    this.mood = this.moods[index];
  }
}
