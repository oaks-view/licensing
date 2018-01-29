import { LicenseApplicationStatus } from './licenseApplicationStatus';

export class LicenseApplication {
    id: string;
    firstName: string = null;
    lastName: string = null;
    dateOfBirth: Date = null;
    stateOfOrigin: string = null;
    occupation: string = null;
    email: string = null;
    address: string = null;
    status: string = null;
    created: Date = null;
    lastModified: Date = null;

    toDto() {
        let date = new Date();
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            stateOfOrigin: this.stateOfOrigin,
            occupation: this.occupation,
            address: this.address,
            email: this.email,
            status: LicenseApplicationStatus.submitted,
            created: date,
            lastModified: date
        }
    }

    get isValid() {
        return !!this.firstName && !!this.lastName && !!this.dateOfBirth && !! this.occupation
        && !!this.email && !!this.email && this.address;
    }

    get applicantFullname() {
        return this.firstName + ' ' + this.lastName;
    }
}