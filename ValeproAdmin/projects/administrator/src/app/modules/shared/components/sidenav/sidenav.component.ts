import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';
import sidenavMockup from './sidenav.mockup';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  isMenuInserted = false;
  isMobile = false;
  menuNav = sidenavMockup.MENU_DATA;
  mobileQuery = this.media.matchMedia('(max-width: 63.9em)');

  constructor(private media: MediaMatcher) {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.isMenuInserted =
      this.mobileQuery.matches &&
      window.innerWidth <= 730 &&
      window.innerWidth >= 651;
    this.isMobile = window.innerWidth <= 730;
  }

  toggleSubMenu(item: any): void {
    item.subMenuVisible = !item.subMenuVisible;
  }
}
