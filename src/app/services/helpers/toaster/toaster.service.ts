import { Injectable } from "@angular/core";

import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ToasterService {
  showCreateSuccess(message: string) {
    this.toast.success(`${message} has been created`, "Create Success");
  }

  showUpdateSuccess(message: string) {
    this.toast.info(`${message} has been updated`, "Update Success");
  }

  showError(title: string, message: any) {
    this.toast.error(message, title);
  }

  showWarning(title: string, message: any) {
    this.toast.warning(message, title);
  }

  showSuccess(title: string, message: any) {
    this.toast.success(message, title);
  }

  constructor(private toast: ToastrService) {}
}
