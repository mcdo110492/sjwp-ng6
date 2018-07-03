import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { throwError } from "rxjs";

import { ToasterService } from "@services/helpers/toaster/toaster.service";

@Injectable({
  providedIn: "root"
})
export class HttpErrorHandlerService {
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Client side or network error occured.
      this.toast.showError("An error occured", `There' s an error occured.`);
      console.log(`An error occured: ${error.message}`);
    } else {
      //The backend return an unsuccessfull response status or code
      if (error.status == 404) {
        this.toast.showError(
          "Not Found",
          `The server cannot find what you' re looking for.`
        );
      } else if (error.status == 403) {
        this.toast.showError(
          "Unauthorized Request",
          `You' re request cannot be process.`
        );
      } else if (error.status == 422) {
        this.toast.showWarning(
          "Form Data Invalid",
          `You' re data that you send is invalid.`
        );
      } else if (error.status == 500) {
        this.toast.showError(
          "Server Error Occured",
          `There's an error while requesting to the server.`
        );
      } else {
        this.toast.showError("Server Error Occured", ``);
      }
    }

    return throwError("Something bad happened; please try again later.");
  }

  constructor(private toast: ToasterService) {}
}
