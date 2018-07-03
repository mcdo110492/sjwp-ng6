import {
  trigger,
  query,
  style,
  animate,
  transition
} from "@angular/animations";

export const fadeInOut = trigger("fadeInOut", [
  transition("* => *", [
    query(":enter", style({ opacity: 0 }), {
      optional: true
    }),

    query(
      ":leave",
      [style({ opacity: 1 }), animate("0.5s", style({ opacity: 0 }))],
      { optional: true }
    ),

    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
