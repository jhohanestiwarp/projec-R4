import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, ViewChild, OnInit, inject } from '@angular/core';
import sidenavMockup from './sidenav.mockup';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isMenuInserted = false;
  isMobile = false;
  menuNav = sidenavMockup.MENU_DATA;
  mobileQuery = this.media.matchMedia('(max-width: 63.9em)');
  @ViewChild('snav') snav: MatSidenav | undefined;
  menuDesktop = true;
  isSidenavOpen = true;
  menuAbierto = true;
  drawerMode: MatDrawerMode = 'side';
  router = inject(Router);

  constructor(private media: MediaMatcher) {
    this.checkScreenWidth();
  }
  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.isMobile = window.innerWidth <= 1023;

    if (this.isMobile) {
      this.menuAbierto = false;
      this.drawerMode = 'over';
    } else {
      this.menuAbierto = true;
      this.drawerMode = 'side';
    }
  }

  toggleSubMenu(item: any): void {
    item.subMenuVisible = !item.subMenuVisible;
  }


  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
