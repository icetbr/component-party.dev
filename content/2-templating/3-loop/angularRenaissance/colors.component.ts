import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-colors",
  template: `
    <ul>
      @for (color of colors; track color) {
        <li>{{ color }}</li>
      }
    </ul>
  `,
})
export class ColorsComponent {
  colors = ["red", "green", "blue"];
}
