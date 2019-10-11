import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
    private aboutUs: string =  "John and I met while working at a pizza place in college. It wasn’t long into dating that we both knew it was the real deal. We both graduated college, moved into careers, and got married. John is a high school teacher and baseball coach. I struggled for 3 years trying to find a job I enjoyed. I was eventually laid off at my previous job but by then, I was two months into pregnancy with our miracle baby! Losing my job was especially difficult with a baby on the way but after a couple months of pushing John finally convinced me to do what I love and paint. Out of our difficult time, Lillee & Me Designs was born. We began by cutting a few designs in our garage one night, since then, our business has become our passion. John cuts and sands designs then I take it from there. I work with customers to understand their vision and then hand paint all orders. We love making pieces that customers love and seeing the smiles on their faces when they receive their sign or door hanger. We are humbled to know that customers trust us to make pieces for special occasions such as weddings, the birth of new family members, gifts, or everyday pieces to brighten up their home.";
    private aboutOurWork: string = "All signs and door hangers are cut on half inch wood. Hand cut and painted. Art is sealed to ensure longevity of paint and help outdoor signs withstand weather. Customer choose colors of designs, writing, and bows. Door hangers have the options to hang by wire or jute/twine. Custom orders are always welcome.";

    getAboutUs() {
        return this.aboutUs;
    }

    getAboutOurWork() {
        return this.aboutOurWork;
    }

    setAboutUs(au: string) {
        this.aboutUs = au;
    }

    setAboutOurWork(aow: string) {
        this.aboutOurWork = aow;
    }
 }
