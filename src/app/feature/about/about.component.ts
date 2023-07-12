import { Component } from '@angular/core';

interface Card {
  img:string;
  cardTitle:string;
  cardText:string;
  buttonText:string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cards:Card[]=[];

  constructor(){
   this.cards= [{
     img:"../../../assets/images/about_card1.jpeg",
     cardTitle:"Commitment to Quality",
     cardText:"We're dedicated to improving the way we prepare our quality food and the ingredients that go into it.",
     buttonText:"Learn More"
    },{
     img:"../../../assets/images/about_card2.jpeg",
     cardTitle:"What's in Your Food",
     cardText:"Find out what makes our ingredients special.",
     buttonText:"Learn More"
    },
    {
     img:"../../../assets/images/about_card3.jpeg",
     cardTitle:"Our Food Philosophy",
     cardText:"We’re passionate about our food. That’s why we’re committed to always evolving what matters to you.",
     buttonText:"Learn More"
    },
    {
     img:"../../../assets/images/about_card4.jpeg",
     cardTitle:"Nutrition Calculator",
     cardText:"Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals.",
     buttonText:"Learn More"
    }];
    
  }
}
