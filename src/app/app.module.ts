import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MuseumSlideComponent } from './museum-slide/museum-slide.component';
import { SlidePresentationComponent } from './slide-presentation/slide-presentation.component';
import { TrustPipe } from './trust.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MuseumSlideComponent,
    SlidePresentationComponent,
    TrustPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
