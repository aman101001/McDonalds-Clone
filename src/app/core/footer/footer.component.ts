import { Component } from '@angular/core';
import {faFacebookF,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook=faFacebookF;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faInstagram=faInstagram;
}
