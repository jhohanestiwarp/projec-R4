import { Component, HostListener } from '@angular/core';
import sidenavMockup from '../../shared/components/sidenav/sidenav.mockup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuNav = sidenavMockup.MENU_DATA;
  bienvenidoText = 'Bienvenido(a), Nombre';
  isMenuInserted = false;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth()
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 730;
  }

  setIsMenuInserted(value: boolean): void {
   this.isMenuInserted = value;
   }

  toggleSubMenu(item: any): void {
    item.subMenuVisible = !item.subMenuVisible;
   }
}
