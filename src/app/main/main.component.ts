import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  teams = [{ logo: 'assets/7.jpg', name: 'Team 1', far: '1', onl: true },
  { logo: 'assets/8.jpg', name: 'Team 2', far: '2', onl: false  },
  { logo: 'assets/2.jpg', name: 'Team 3', far: '3', onl: true  },
  { logo: 'assets/4.jpg', name: 'Team 4', far: '4', onl: false  },
  { logo: 'assets/5.jpg', name: 'Team 5', far: '5', onl: true  }];
  ngOnInit() {
  }

}
