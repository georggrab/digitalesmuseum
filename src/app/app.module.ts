import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MuseumSlideComponent } from './museum-slide/museum-slide.component';
import { SlidePresentationComponent } from './slide-presentation/slide-presentation.component';
import { TrustPipe } from './trust.pipe';
import { GameComponent } from './game/game.component';
import { BackendService } from './backend.service';
import { SharedServiceService } from './shared-service.service';
import { ToUrlPipe } from './to-url.pipe';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MuseumSlideComponent,
    SlidePresentationComponent,
    TrustPipe,
    GameComponent,
    ToUrlPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BackendService, SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
