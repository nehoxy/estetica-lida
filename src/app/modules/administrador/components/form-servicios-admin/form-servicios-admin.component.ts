import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-form-servicios-admin',
  templateUrl: './form-servicios-admin.component.html',
  styleUrls: ['./form-servicios-admin.component.css']
})
export class FormServiciosAdminComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}


