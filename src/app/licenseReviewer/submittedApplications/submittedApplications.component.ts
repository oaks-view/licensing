import { Component, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LicenseApplication } from '../../shared/models/licenseApplication.model';
import { LicenseApplicationStatus } from '../../shared/models/licenseApplicationStatus';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-submitted-application',
    templateUrl: './submittedApplications.component.html'
})
export class SubmittedApplicationsComponent implements OnInit{
    submittedApplications: Observable<LicenseApplication[]>;
    licenseApplicationCol: AngularFirestoreCollection<LicenseApplication>;
    selectedApplication: LicenseApplication;

    constructor(
        private afs: AngularFirestore,
        private spinnerService: Ng4LoadingSpinnerService
    ) {
        //
    }

    setSelectedApplication(application) {
        this.selectedApplication = application;
    }

    updateSelectedApplicationStatus() {
        // alert(this.selectedApplication.id);
        // this.spinnerService.show();

        this.licenseApplicationCol.doc(this.selectedApplication.id).update({
            status: LicenseApplicationStatus.reviewed
        }).then(() => {
          this.spinnerService.hide()
        })
        .catch(() => {
            this.spinnerService.hide();
        })
      }

    ngOnInit(): void {
        this.licenseApplicationCol = this.afs.collection('LicenseApplication');
        this.submittedApplications = this.licenseApplicationCol.valueChanges();
        // this.licenseApplication = new LicenseApplication();
    }
}
