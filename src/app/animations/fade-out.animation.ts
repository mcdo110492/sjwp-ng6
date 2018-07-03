import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

export const fadeOutAnim = trigger("fadeOutAnim", [
  transition("void => *", [
    style({ opacity: 0 }),
    animate("500ms ease-in", style({ opacity: 1 }))
  ])
]);
