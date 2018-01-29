import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    title = 'welcome component';
}
