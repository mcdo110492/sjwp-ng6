import {
  trigger,
  query,
  style,
  animate,
  transition,
  animateChild
} from "@angular/animations";

export const slideUpAnim = trigger("slideUpAnim", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      style({ position: "fixed", width: "100%", height: "100%" }),
      {
        optional: true
      }
    ),

    query(
      ":enter",
      [
        style({ transform: "translateY(100%)" }),
        animate("0.5s ease-in-out", style({ transform: "translateY(0%)" })),
        animateChild()
      ],
      { optional: true }
    ),

    query(
      ":leave",
      [
        style({ transform: "translateY(0%)", opacity: 1 }),
        animate(
          "0.5s ease-in-out",
          style({ transform: "translateY(-100%)", opacity: 0 })
        ),
        animateChild()
      ],
      { optional: true }
    )
  ])
]);
