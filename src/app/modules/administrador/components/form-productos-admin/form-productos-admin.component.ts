import { Component } from '@angular/core';

@Component({
  selector: 'app-form-productos-admin',
  templateUrl: './form-productos-admin.component.html',
  styleUrls: ['./form-productos-admin.component.css']
})
export class FormProductosAdminComponent {

  dtoptions:DataTables.Settings={}
 

  ngOnInit(): void {
    this.dtoptions={
      pagingType:'full_numbers'
    }
  }
}
