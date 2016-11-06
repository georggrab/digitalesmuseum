# DigitalesmuseumFront

Hallo! Dies ist das Github Projekt für das Projektteam DM3 - Digitales Museum, Vorlesung Datenbanken I an der DHBW Stuttgart.
Dieses README dient zur allgemeinen Beschreibung der Projektfunktionalität.

Notiz: Der Code ist auf Github gehostet und da wahrscheinlich komfortabler einzusehen.
Die relevanten Repositories sind

 Repository | Zweck 
 --- | --- 
[digitalesmuseum-front](https://github.com/talkdirty/digitalesmuseum) | Hauptseite 
[digitalesmuseum-cms](https://github.com/danielsimon1/digitalesmuseum-cms) | Daten hinzufügen 
[digitalesmuseum-backend](https://github.com/talkdirty/digitalesmuseum-backend) | REST Backend 

## Vorliegende Struktur

Dieses Projekt nutzt Angular2. Der Code kann ohne tiefere Kenntnisse dieses Frameworks verstanden werden, aber ein grober Überblick über die Funktionsweise ist [sicherlich hilfreich](https://angular.io/).
Die (visuelle) Funktionalität des Frontends wird bei Angular2 als Komponenten realisiert und in eine hierarchische Baumstruktur gruppiert. Technische Funktionalität wird durch Services realisiert. Die in diesem Projekt Benutzte Komponenten- und Servicehierarchie sowie deren Datenflüsse:

```
app.component.ts   < - - - [ PersonDirectory ] - - - backend.service.ts
|               \ 1
|                \
|  *              \ [ Datenfluss: PersonDirectory ]
|                  \ *
|                   \
menu.component.ts    \ 1
                museum-slide.component.ts
               /      |         |        \ 1  [ Datenfluss: PersonInputStream ]
              /       |         |         \ N
             slide-presentation.component.ts (1 Komponent pro Person)
                          | *
                          |
                  game.component.ts

*: Datenflüsse zur Vereinfachung weggelassen, weitere Information entnehmen Sie dem Code.
```

Viele Grüße
Das Team DM3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
