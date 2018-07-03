import { Injectable } from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "@env/environment";
import { retry, catchError } from "rxjs/operators";

import { HttpErrorHandlerService } from "@services/helpers/http-error-handler/http-error-handler.service";

@Injectable({
  providedIn: "root"
})
export class ApiHttpService {
  private baseUrl: string = environment.baseUrl;

  get<T>(url: string, params?: HttpParams) {
    return this.http.get<T>(`${this.baseUrl}/${url}`, { params }).pipe(
      retry(3),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body).pipe(
      retry(3),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body).pipe(
      retry(3),
      catchError(error => this.errorHandler.handleError(error))
    );
  }

  constructor(
    private http: HttpClient,
    private errorHandler: HttpErrorHandlerService
  ) {}
}
