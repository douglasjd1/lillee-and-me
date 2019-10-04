import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  page: string = 'about-us';
  aboutUsSelected: string = 'underline';
  aboutOurWorkSelected: string = '';
  constructor() { }

  ngOnInit() {
  }
  
  pageChange(page: string) {
    this.page = page;
    if (page == 'about-us') {
      this.aboutUsSelected = 'underline';
      this.aboutOurWorkSelected = '';
    } else if (page == 'about-our-work') {
      this.aboutOurWorkSelected = 'underline';
      this.aboutUsSelected = '';
    }
  }
}
