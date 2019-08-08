import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{ title }}</h1>
      {{ first * second }}
      <h1 [innerHTML]="title"></h1>
      <h1>{{title}}</h1>
      <button (click)="handleClick()">Click</button>
      <input type="text">
      <input type="text">
      <h1>{{ input }}</h1>
    </div>
  `
})

export class AppComponent {
  title: string;
  first: number = 3;
  second: number = 2;
  input: string = 'Raffy';
  handleClick(){
    if(this.input === 'Raffy'){
      this.input = 'Pogi';
    }

    else if(this.input === 'Pogi'){
      this.input = 'Raffy';
    }else{
      this.input = 'Yikes'
    }
    
  };

  constructor(){
    this.title = 'hehe'
  }
}