import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/about/about.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {
  aboutUs: string;
  aboutOurWork: string;
  saved: boolean;
  constructor(private as: AboutService) { }

  ngOnInit() {
    this.aboutUs = this.as.getAboutUs();
    this.aboutOurWork = this.as.getAboutOurWork();
  }

  updateAbout() {
    this.as.setAboutUs(this.aboutUs);
    this.as.setAboutOurWork(this.aboutOurWork);
    this.saved = true;
  }
}
