# Solar Terrestrial Data Widget for iOS (Scriptable)

![Widget Preview](https://www.hamqsl.com/solar101vhf.php)  

Ein kleines **iOS-Widget** für Scriptable, das die aktuellen **Solar-Terrestrial Data** von [HAMQSL](https://www.hamqsl.com/solar101vhf.php) direkt auf deinen Homescreen bringt. Perfekt für **Amateurfunk-Fans**, die schnell einen Überblick über Sonnenaktivität, Sonnenflecken, geomagnetische Daten und Ausbreitungsbedingungen haben wollen.  

## Features

- Holt das **Live-Diagramm** von HAMQSL als Bild  
- **Breites Widget** für gute Lesbarkeit
- **Automatische Aktualisierung** -> jede Stunde  
- Tippen auf das Widget öffnet die **Originalseite**  
- Komplett in **JavaScript** für [Scriptable](https://scriptable.app/)  

## Installation für Apple-Nutzer

1. **Scriptable installieren**  
   Lade die App [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) aus dem App Store auf dein iPhone oder iPad.  

2. **Skript auf GitHub öffnen**  
   Gehe auf diese GitHub-Seite und klicke auf die Datei `SolarTerrestrialWidget.js`.  

3. **Code kopieren**  
   Drücke auf diese Datei, markiere den gesamten Code und kopiere ihn.

4. **Skript in Scriptable einfügen**  
   - Öffne Scriptable.  
   - Tippe auf das **+** oben rechts, um ein neues Skript zu erstellen.  
   - Füge den kopierten Code ein (kurzes gedrückthalten und dann auf "Einsetzen").  
   - Speichere das Skript, z.B. unter dem Namen `SolarWidget`.  

5. **Widget zum Homescreen hinzufügen**  
   - Gehe zum Homescreen, halte irgendwo auf dem Bildschirm gedrückt, sodass die App-Icons wackeln.  
   - Tippe auf das **Edit** oben links, um ein neues Widget hinzuzufügen.  
   - Drücke auf **Add Widget**.  
   - Suche nach **Scriptable** und wähle die breiteste Widget-Größe.
   - Drücke auf **Add Widget**.  
   - Tippe nun auf das Widget -> wähle **Skript** -> wähle dein gespeichertes `SolarWidget` aus.  

6. **Fertig!**  
   Jetzt zeigt dein Widget die aktuellen Solar-Terrestrial Daten direkt auf deinem Homescreen an. Tippe darauf, um die Originalseite von HAMQSL zu öffnen.  

## Vorschau

> Das Widget zeigt die aktuelle Solar-Terrestrial Grafik direkt auf dem Homescreen an.  

![Widget Preview](https://raw.githubusercontent.com/PhilTec-Philip/HAMQSL-Widget/refs/heads/main/preview.jpg)

## Hinweise
 
- Das Widget funktioniert **nur** mit **Scriptable** auf iOS.  
- **Refresh**: Das Widget lädt sich jede Stunde neu, du kannst das Intervall aber im Skript anpassen.  
- Wenn du einen Siri-Kurzbefehl zur Ausführung erstellst, kannst du Slashes bzw. Schrägstriche aus den Zeilen 16 bis 21 entfernen, dann wird als kleiner Hinweis der Phrase **Hey Siri, Amateurfunkdaten** zusätzlich angezeigt.
- In der Zeile 27 wird die Zahl **1** als Stunde für die Refresh-Rate genutzt, wird z.B. eine **3** eingesetzt, so wird das Image alle drei Stunden aktualisiert.