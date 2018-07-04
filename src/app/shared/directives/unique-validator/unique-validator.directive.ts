import { Directive, forwardRef, Input, OnDestroy } from "@angular/core";
import {
  NG_ASYNC_VALIDATORS,
  Validator,
  AbstractControl
} from "@angular/forms";

import { Observable, Subject, of } from "rxjs";

import { ApiHttpService } from "@services/helpers/api-http/api-http.service";
import {
  distinctUntilChanged,
  takeUntil,
  switchMap,
  first
} from "rxjs/operators";

@Directive({
  selector:
    "[appUniqueValidator][formControlName],[appUniqueValidator][ngModel]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueValidatorDirective),
      multi: true
    }
  ]
})
export class UniqueValidatorDirective implements Validator, OnDestroy {
  @Input() url: string;
  @Input() field: string;
  @Input() id: number;

  controlValue = new Subject<any>();

  validate(control: AbstractControl): Observable<{ [key: string]: any }> {
    return this.validateValue(control).pipe(first());
  }

  validateValue(control: AbstractControl) {
    this.controlValue.next();

    return control.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.controlValue),
      switchMap(value => {
        return this.validateToBackend(
          this.url,
          value,
          this.field,
          this.id
        ).pipe(
          switchMap(response => {
            if (!response.isUnique) {
              return of({ uniqueTaken: true });
            }
            return of(null);
          })
        );
      })
    );
  }

  validateToBackend(url: string, value: any, field: string, id: number) {
    const body = { field, value, id };
    return this.api.post<{ isUnique: boolean }>(url, body);
  }

  constructor(private api: ApiHttpService) {}

  ngOnDestroy() {
    this.controlValue.unsubscribe();
  }
}
