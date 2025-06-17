import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) {}

  getFeedback(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }

  updatedFeedback(id: number, feedback: any): Observable<any[]> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, feedback);
  }

  deleteFeedback(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
