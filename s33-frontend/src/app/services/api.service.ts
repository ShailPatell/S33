import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getChart1(token: string) {
    return this.http.get(`${this.baseUrl}/chart1`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }

  getChart2(token: string) {
    return this.http.get(`${this.baseUrl}/chart2`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }
}
