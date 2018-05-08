import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  teams = [{ logo: 'assets/7.jpg', name: 'Team 1', far: '1m' },
  { logo: 'assets/8.jpg', name: 'Team 2', far: '2m' },
  { logo: 'assets/2.jpg', name: 'Team 3', far: '3m' },
  { logo: 'assets/4.jpg', name: 'Team 4', far: '4m' },
  { logo: 'assets/5.jpg', name: 'Team 5', far: '5m' }];
  ngOnInit() {
  }

}
