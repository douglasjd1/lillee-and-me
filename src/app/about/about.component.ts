import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutUs: string;
  aboutOurWork: string;
  page: string = 'about-us';
  aboutUsSelected: string = 'underline';
  aboutOurWorkSelected: string = '';
  constructor(private as: AboutService) { }

  ngOnInit() {
    this.aboutUs = this.as.getAboutUs();
    this.aboutOurWork = this.as.getAboutOurWork();
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
