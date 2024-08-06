import { Component } from '@angular/core';
import { SharedService } from '../../../../@shared/services/shared.service';
import { environment } from 'src/environments/environment';
import { SeoService } from 'src/app/@shared/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  constructor(public sharedService: SharedService, private seoService: SeoService) {
    const data = {
      title: 'Freeedom.buzz Privacy Policy',
      url: `${environment.webUrl}privacy-policy`,
      description: 'Privacy Policy page',
      image: `${environment.webUrl}assets/images/landingpage/meetus.png`,
    };
    this.seoService.updateSeoMetaData(data);
  }
}
