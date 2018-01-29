import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { LicenseRegistrationComponent } from './licenseRegistration/registration/licenseRegistration.component';
import { SubmittedApplicationsComponent } from './licenseReviewer/submittedApplications/submittedApplications.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';

let firebaseConfig  = {
  apiKey: "AIzaSyAxKgI4njnV5aRL9Ri0Ww4Z3ChJ3D-JxXk",
    authDomain: "licensingapp-94706.firebaseapp.com",
    databaseURL: "https://licensingapp-94706.firebaseio.com",
    projectId: "licensingapp-94706",
    storageBucket: "licensingapp-94706.appspot.com",
    messagingSenderId: "258735342578"
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LicenseRegistrationComponent,
    SubmittedApplicationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'license-registration', component: LicenseRegistrationComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'submitted-applications', component: SubmittedApplicationsComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
