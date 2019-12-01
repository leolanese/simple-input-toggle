import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { faCoffee, faCloudRain, faDiceD6, faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular8-seed';
  faCoffee = faCoffee;

  isActive = true;
  faUserDefault = ['fas', 'square'];
  faUser = ['fas', 'square'];
  faUserCheck = ['fas', 'check-square'];

  toggle(): boolean {
    return this.isActive = !this.isActive;
  }

  onClickBtn(e) {
    this.toggle() ? this.faUserDefault = this.faUser :  this.faUserDefault = this.faUserCheck;
  }
}
