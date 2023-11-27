import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Domicilio } from 'src/app/models/domicilio';
import { CrudPerfilService } from '../../services/crud-perfil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  userData: any = {};

  domicilioForm = new FormGroup({
    direccion: new FormControl('',Validators.required),
    codigo_postal: new FormControl('',Validators.required),
    provincia: new FormControl('',Validators.required),
    localidad: new FormControl('',Validators.required),
  })

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private crudService:CrudPerfilService) {}

  async agregarDomicilio(){
    alert('a')
    if (this.domicilioForm.valid){
      let nuevoDomicilio: Domicilio = {
        idDomicilio: '', // único que guardamos vacío; lo creamos en el CRUD
        direccion: this.domicilioForm.value.direccion!,
        codigo_postal: this.domicilioForm.value.codigo_postal!,
        provincia: this.domicilioForm.value.provincia!,
        localidad: this.domicilioForm.value.localidad!,
      };

      // ENVIAMOS NUESTRO NUEVO Servicio
      await this.crudService.agregarDomicilio(nuevoDomicilio)
      .then(domicilio => {
        Swal.fire({
            icon: 'success',
            iconColor: '#C8ECCB',
            buttonsStyling:false,
            customClass:{
                confirmButton:'btn btn-sweetalert'
            },
            text: '¡Se ha agregado su domicilio con exito!',
          })
      })
      .catch(error => {
        alert("Hubo un error al cargar el nuevo domicilio :( \n"+error);
      })
    }else{
        alert('error')
    }
  }


  

  getUserData() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // Usuario está autenticado
        const userId = user.uid;
  
        // Obtener datos del usuario desde Firestore
        this.firestore.collection('usuarios').doc(userId).valueChanges().subscribe(userData => {
          // userData contiene los datos del usuario
        });
      }
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;

        this.firestore.collection('usuarios').doc(userId).valueChanges().subscribe(userData => {
          this.userData = userData;
        });
      }
    });
  }
}

