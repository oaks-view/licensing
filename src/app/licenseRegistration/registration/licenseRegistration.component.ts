import { Component, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LicenseApplication } from '../../shared/models/licenseApplication.model';
import { LicenseApplicationStatus } from '../../shared/models/licenseApplicationStatus';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-license-registration',
    templateUrl: './licenseRegistration.component.html'
})
export class LicenseRegistrationComponent implements OnInit{
    title = 'license registration component';
    licenseApplication: LicenseApplication;
    stateOfOrigin: string;
    states: string[] = [ 'Lagos', 'Abuja', 'Nasarawa', 'Delta', 'Abia', 'Adamawa', 'Yola'];

    licenseApplicationCol: AngularFirestoreCollection<LicenseApplication>;

    constructor(
        private afs: AngularFirestore,
        private spinnerService: Ng4LoadingSpinnerService) {
        //
    }

    @ViewChild('frm') form;
    get formIsValid(): boolean {
        return this.form.valid;
    }

    submitApplication() {
        this.spinnerService.show();
        this.afs.collection('LicenseApplication').add(this.licenseApplication.toDto())
        .then(() => {
            this.spinnerService.hide();
        })
        .catch(() => {
            this.spinnerService.hide();
        });
    }

    ngOnInit(): void {
        this.licenseApplication = new LicenseApplication();
    }
}
