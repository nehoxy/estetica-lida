import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';
import { ProductosModule } from './modules/productos/productos.module';
import { SharedModule } from './shared/shared.module';
import {DataTablesModule} from 'angular-datatables'

//firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; //firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage';




@NgModule({
  declarations: [
    AppComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule,
    SharedModule,
    ProductosModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    DataTablesModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
