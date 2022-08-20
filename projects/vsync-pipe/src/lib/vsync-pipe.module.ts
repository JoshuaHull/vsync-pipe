import { NgModule } from "@angular/core";
import { VsyncPipe } from "./vsync.pipe";

@NgModule({
  declarations: [
    VsyncPipe,
  ],
  exports: [
    VsyncPipe,
  ]
})
export class VsyncPipeModule { }
