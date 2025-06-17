import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-student-feedback',
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './student-feedback.component.html',
  styleUrl: './student-feedback.component.css',
})
export class StudentFeedbackComponent {
  feedbackList: any[] = [];
  feedbackData = {
    name: '',
    course: '',
    comment: '',
  };
  isEdit: boolean = false;
  editId: number | undefined = undefined;

  constructor(private service: FeedbackService) {}

  ngOnInit() {
    this.loadFeedback();
  }

  loadFeedback() {
    this.service.getFeedback().subscribe((data) => {
      this.feedbackList = data;
    });
  }

  submitFeedback() {
    if (this.isEdit && this.editId !== undefined) {
      this.service
        .updatedFeedback(this.editId, this.feedbackData)
        .subscribe(() => {
          this.resetForm();
          this.loadFeedback();
        });
    } else {
      this.service.addFeedback(this.feedbackData).subscribe(() => {
        this.resetForm();
        this.loadFeedback();
      });
    }
  }

  editFeedback(feedback: any) {
    this.feedbackData = { ...feedback };
    this.editId = feedback.id;
    this.isEdit = true;
  }

  deleteFeedback(id: number) {
    this.service.deleteFeedback(id).subscribe(() => this.loadFeedback());
  }

  resetForm() {
    this.feedbackData = { name: '', course: '', comment: '' };
    this.isEdit = false;
    this.editId = undefined;
  }
}
