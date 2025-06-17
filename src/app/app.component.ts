import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, StudentFeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'student-feedback-portal';
}
