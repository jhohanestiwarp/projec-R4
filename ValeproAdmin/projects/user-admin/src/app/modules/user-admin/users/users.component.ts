import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  status: boolean = false;
  statusUser: string = '';


  formGroupSearchUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroupSearchUser = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    if (this.status == false) {
      this.statusUser = 'Inactivo';
    }
  }

  filas: any[] = [
    { columna1: 'Fila 1 - Col 1', columna2: 'Fila 1 - Col 2', columna3: 'Fila 1 - Col 3', columna4: 'Fila 1 - Col 4', columna5: 'Fila 1 - Col 5', columna6: 'Fila 1 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' },
    { columna1: 'Fila 2 - Col 1', columna2: 'Fila 2 - Col 2', columna3: 'Fila 2 - Col 3', columna4: 'Fila 2 - Col 4', columna5: 'Fila 2 - Col 5', columna6: 'Fila 2 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' },
    { columna1: 'Fila 3 - Col 1', columna2: 'Fila 3 - Col 2', columna3: 'Fila 3 - Col 3', columna4: 'Fila 3 - Col 4', columna5: 'Fila 3 - Col 5', columna6: 'Fila 3 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' },
    { columna1: 'Fila 4 - Col 1', columna2: 'Fila 4 - Col 2', columna3: 'Fila 4 - Col 3', columna4: 'Fila 4 - Col 4', columna5: 'Fila 4 - Col 5', columna6: 'Fila 4 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' },
    { columna1: 'Fila 5 - Col 1', columna2: 'Fila 5 - Col 2', columna3: 'Fila 5 - Col 3', columna4: 'Fila 5 - Col 4', columna5: 'Fila 5 - Col 5', columna6: 'Fila 5 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' },
    { columna1: 'Fila 6 - Col 1', columna2: 'Fila 6 - Col 2', columna3: 'Fila 6 - Col 3', columna4: 'Fila 6 - Col 4', columna5: 'Fila 6 - Col 5', columna6: 'Fila 6 - Col 6', columna7: 'Fila 1 - Col 6', columna8: 'Fila 1 - Col 6', columna9: 'Fila 1 - Col 6', columna10: 'Fila 1 - Col 6', columna11: 'Fila 1 - Col 6', columna12: 'Fila 1 - Col 6', columna13: 'Fila 1 - Col 6' }
  ];
}
