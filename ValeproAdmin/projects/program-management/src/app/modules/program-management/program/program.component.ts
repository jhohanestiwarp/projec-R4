import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  istrue = true;
  istrue2 = false;

  activo() {
    this.istrue = !this.istrue;
    this.istrue2 = !this.istrue
  }
}
