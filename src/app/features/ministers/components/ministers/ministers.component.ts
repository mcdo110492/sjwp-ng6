import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ministers",
  templateUrl: "./ministers.component.html",
  styleUrls: ["./ministers.component.scss"]
})
export class MinistersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getSearchText(e) {
    console.log(e);
  }
}
