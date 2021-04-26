import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public contact: string = '/contact-us'
  public result: any;
  public firstName: string = 'Mandy'
  constructor() { }

  async ngOnInit() {

  }

  goTo() {
    // console.log('test')
  }

}
