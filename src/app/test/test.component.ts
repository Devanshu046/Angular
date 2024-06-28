import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ message | titlecase }}</h2>
    <h2>{{ name | slice : 3 : 8 }}</h2>
    <h2>{{ person | json }}</h2>

    <h2>{{ 5.678 | number : '1.2-3' }}</h2>
    <h2>{{ 5.678 | number : '3.4-5' }}</h2>
    <h2>{{ 5.678 | number : '3.1-2' }}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <h2>{{ 0.25 | currency: 'INR' : 'code' }}</h2>

    <h2>{{ date | date : 'short' }}</h2>
    <h2>{{ date | date : 'shortDate' }}</h2>
    <h2>{{ date | date : 'shortTime' }}</h2>

    <h2>{{ date | date : 'medium' }}</h2>
    <h2>{{ date | date : 'mediumDate' }}</h2>
    <h2>{{ date | date : 'mediumTime' }}</h2>

    <h2>{{ date | date : 'long' }}</h2>
    <h2>{{ date | date : 'longDate' }}</h2>
    <h2>{{ date | date : 'longTime' }}</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Devanshu';
  public message = 'welcome parmar dev';
  public person = {
    firstname: 'dev',
    lastname: 'parmar',
  };

  public date = new Date()

  constructor() {}

  ngOnInit() {}
}
