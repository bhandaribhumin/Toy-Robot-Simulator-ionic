import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { BoardViewComponent } from "./board-view.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [BoardViewComponent],
  exports: [BoardViewComponent],
})
export class BoardViewComponentModule {}
