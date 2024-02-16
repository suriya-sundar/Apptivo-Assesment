import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  tabs = [
    { label: 'OVERVIEW', contentComponent: OverviewComponent },
    { label: '360°', content: 'Content 2' },
    { label: 'News Feed', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/001-envelope.png' },
    { label: 'Calender', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/002-event.png' },
    { label: 'Follow Ups', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/003-3d-pin.png' },
    { label: 'Tasks', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/004-task-actions.png' },
    { label: 'Call Logs', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/006-conversation.png' },
    { label: 'Mails', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/007-email.png' },
    { label: 'Notes', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/008-note.png' },
    { label: 'Documents', content: 'Content 3', isImageLabel: true, imagePath: '../../assets/img/009-folders.png' },
  ];
}
