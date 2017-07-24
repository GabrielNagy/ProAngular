import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
  moduleId: module.id,
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
}
