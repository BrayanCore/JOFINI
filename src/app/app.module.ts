import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { ModifyNewComponent } from './components/modify-new/modify-new.component';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    AddNewComponent,
    ModifyNewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
