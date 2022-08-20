import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { VsyncPipeModule } from "vsync-pipe";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VsyncPipeModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
