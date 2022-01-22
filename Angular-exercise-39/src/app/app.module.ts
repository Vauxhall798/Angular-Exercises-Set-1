import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, ParentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
