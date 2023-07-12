import { Component } from '@angular/core';
// import {faFacebookF,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
 
// const elements = document.querySelectorAll('.container');
//    console.log(elements);
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold:.1
// }
// const callbacks = (entries:any) => {
//   entries.forEach((entry:any) => {
//     if (entry.isIntersecting){
//       entry.target.classList.add('active');
//       return;
//     }
//         entry.target.classList.remove('active');
    
//   });
// }
// let observer = new IntersectionObserver(callbacks, options);
// elements.forEach((element)=> {
//   observer.observe(element);
// });


interface Card {
  img:string;
  cardTitle:string;
  cardText:string;
  disclaimer:string;
  buttonText:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  cards:Card[]=[];

 constructor(){
  this.cards= [{
    img:"../../assets/images/card1.jpg",
    cardTitle:"New: Faster Faves, Only in the App",
    cardText:"We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.*",
    disclaimer:"*At participating McDonald’s.",
    buttonText:"Order Ahead in the App"
   },{
    img:"../../assets/images/card2.jpg",
    cardTitle:"Score Free Food with McDelivery®",
    cardText:"Earn MyMcDonald’s Rewards points on every McDelivery order only in the McD’s app to redeem for free food. And, yup, you can get ‘em delivered, too. Just order, relax and enjoy—check out how easy ordering delivery is in the app.*",
    disclaimer:"*At participating McDonald's. Only in the app. App registration required. Must be opted into MyMcDonald's Rewards.",
    buttonText:"Earn Points with McDelivery"
   },
   {
    img:"../../assets/images/card3.jpg",
    cardTitle:"Deals for Days",
    cardText:"Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.",
    disclaimer:"*Mobile Order & Pay at participating McDonald’s.",
    buttonText:"Get App Details"
   },
   {
    img:"../../assets/images/card4.jpg",
    cardTitle:"Free Large Fries Now. Even More Fries Later.",
    cardText:"Download the McDonald’s app and join MyMcDonald’s Rewards to get your free large Fries with $1 minimum purchase.* Plus, when you join MyMcDonald’s Rewards, you start earning points on every eligible order—points you can put towards more free food.",
    disclaimer:"*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Must opt in to MyMcDonald’s Rewards. Excludes tax.",
    buttonText:"Get Free Fries In The App"
   }];
   
 }
 
}


