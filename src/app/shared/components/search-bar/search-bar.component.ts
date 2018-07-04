import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";

import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() placeHolder: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchText = new FormControl();
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.searchText.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => this.search.emit(value));
  }

  clear() {
    this.searchText.setValue("");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
