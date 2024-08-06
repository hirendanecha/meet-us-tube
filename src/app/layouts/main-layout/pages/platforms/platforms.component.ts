import { Component } from '@angular/core';
import { SharedService } from '../../../../@shared/services/shared.service';
import { environment } from 'src/environments/environment';
import { SeoService } from 'src/app/@shared/services/seo.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss'],
})
export class PlatformsComponent {
  constructor(public sharedService: SharedService, private seoService: SeoService) {
    const data = {
      title: 'MeetUs.tube Platforms',
      url: `${environment.webUrl}platforms`,
      description: '',
      image: `${environment.webUrl}assets/images/landingpage/meetus.png`,
    };
    this.seoService.updateSeoMetaData(data);
  }
}
