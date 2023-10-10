**Alte Aufgabe:**

```markdown
# BE-Mongoose-Express-Books

## Beschreibung

Erstellen Sie ein Buchverwaltungssystem mit Express und MongoDB. Das System ermöglicht das Hinzufügen von Büchern sowie das Löschen aller Buchdaten.

## Was Sie tun werden

Sie werden eine Express-Anwendung erstellen und mit einer MongoDB-Datenbank verbinden. Anschließend implementieren Sie die Routen und Controller für das Hinzufügen von Büchern und das Löschen aller Buchdaten.

## Aufgaben

**Aufgabe 1: Express-Anwendung einrichten**

-   Arbeiten Sie in der Datei `server.js` welcher als Einstiegspunkt für die Anwendung fungiert.
-   Importieren Sie die erforderlichen Module: `express` und `mongoose`.
-   Verbinden Sie die Anwendung mit der MongoDB-Datenbank `booksDB` (URL: `mongodb://127.0.0.1:27017/booksDB`).
-   Konfigurieren Sie die Anwendung, um JSON-Anfragen zu parsen.
-   Definieren Sie eine Basisroute `/books` für Buchoperationen.
-   Starten Sie den Server auf Port 3000.

**Aufgabe 2: Buchmodell definieren**

-   Erstellen Sie eine Datei `models/book.schema.js` und definieren Sie das Schema für ein Buch.
-   Das Buchschema sollte die folgenden Felder enthalten:
    -   `title` (String, erforderlich)
    -   `author` (Subschema, erforderlich)
        -   `firstName` (String, erforderlich)
        -   `lastName` (String, erforderlich)
    -   `genre` (String, erforderlich)
    -   `year` (Number, erforderlich)
-   Exportieren Sie das Buchmodell.

**Aufgabe 3: Datenbanklogik für das Buch implementieren**

-   Erstellen Sie eine Datei `models/book.model.js`.
-   Importieren Sie das Buchmodell.
-   Implementieren Sie die Funktion `addBook`, um ein neues Buch zur Datenbank hinzuzufügen.
    -   Die Funktion sollte die Parameter `title`, `author`, `genre` und `year` akzeptieren.
    -   Erstellen Sie eine neue Instanz des Buchmodells mit den übergebenen Werten.
    -   Speichern Sie das Buch in der Datenbank.
    -   Geben Sie ein Promise zurück, das das gespeicherte Buch enthält.
-   Exportieren Sie die Funktion `addBook`.

**Aufgabe 4: Controller für Buchoperationen implementieren**

-   Erstellen Sie eine Datei `controllers/book.controller.js`.
-   Importieren Sie die Funktion `addBook` aus `models/book.model.js`.
-   Implementieren Sie den Controller `httpAddBook`, um ein neues Buch hinzuzufügen.
    -   Der Controller sollte die Anfrageparameter `title`, `author`, `genre` und `year` verwenden.
    -   Rufen Sie die Funktion `addBook` auf und übergeben Sie die Parameterwerte.
    -   Bei erfolgreichem Hinzufügen des Buches senden Sie eine Erfolgsmeldung mit dem Statuscode 201 zurück.
    -   Bei einem Fehler beim Hinzufügen des Buches senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
-   Exportieren Sie den Controller `httpAddBook`.

**Aufgabe 5: Implementieren Sie Routen für Buchoperationen**.

-   Erstellen Sie eine Datei `routes/book.routes.js`.

-   Importieren Sie den `httpAddBook` Controller aus `controllers/book.controller.js`.
-   Definieren Sie die POST-Route `/add`, um ein neues Buch hinzuzufügen.
-   Verwenden Sie den `httpAddBook`-Controller als Handler für die POST-Route.
-   Exportiere den Router.

**Aufgabe 6: Implementieren Sie die Datenbanklogik für das Buch**.

-   Bearbeiten Sie die Datei `models/book.model.js`.
-   Implementieren Sie die Funktion `purgeBooks`, um alle Buchdaten zu löschen.
    -   Rufen Sie die Funktion `deleteMany` für das Buchmodell auf, um alle Bücher zu löschen.
-   Exportieren Sie die Funktion "purgeBooks".

**Aufgabe 7: Implementieren Sie eine Route zum Löschen aller Buchdaten**.

-   Bearbeiten Sie die Datei `controllers/book.controller.js`.
-   Implementieren Sie den `httpPurgeBooks` Controller, um alle Buchdaten zu löschen.
-   Importieren Sie die Funktion `purgeBooks` aus `models/book.model.js`.
    -   Rufen Sie die Funktion `purgeBooks` für das Buchmodell auf, um alle Bücher zu löschen.
    -   Wenn die Buchdaten erfolgreich gelöscht wurden, senden Sie eine Erfolgsmeldung mit Statuscode 200 zurück.
    -   Tritt beim Löschen der Buchdaten ein Fehler auf, senden Sie eine Fehlermeldung mit dem Statuscode 500 zurück.
-   Exportieren Sie den Controller `httpPurgeBooks`.

**Aufgabe 8: Implementieren Sie Routen zum Löschen aller Buchdaten**.

-   Bearbeiten Sie die Datei `routes/book.routes.js`.
-   Importieren Sie den Controller `httpPurgeBooks` aus `controllers/book.controller.js`.
-   Definieren Sie die DELETE-Route `/purgeBooks`, um alle Buchdaten zu löschen.
-   Verwenden Sie den `httpPurgeBooks`-Controller als Handler für die DELETE-Route.
-   Exportieren Sie den Router.

**Aufgabe 9: Implementiere die `findById`-Funktion im Buchmodell.**

-   Bearbeite die Datei `models/book.model.js`.
-   Importiere das Buchmodell.
-   Implementiere die `findById`-Funktion, um ein Buch anhand seiner ID abzurufen.
    -   Die Funktion sollte den Parameter `id` akzeptieren.
    -   Verwende die Methode `findById` des Buchmodells, um das Buch mit der entsprechenden ID zu finden.
    -   Gib eine Promise zurück, die das gefundene Buch enthält.
-   Exportiere die `findById`-Funktion.

**Aufgabe 10: Implementiere die Route zum Abrufen eines Buchs anhand seiner ID.**

-   Bearbeite die Datei `routes/book.routes.js`.
-   Importiere den `httpGetBookById`-Controller aus `controllers/book.controller.js`.
-   Definiere die GET-Route `/:id`, um ein Buch anhand seiner ID abzurufen.
-   Verwende den `httpGetBookById`-Controller als Handler für die GET-Route.
-   Exportiere den Router.

**Aufgabe 11: Implementiere eine Route zum Abrufen eines Buchs anhand seiner ID.**

-   Bearbeite die Datei `controllers/book.controller.js`.
-   Implementiere den `httpGetBookById`-Controller, um ein Buch anhand seiner ID abzurufen.
-   Importiere das Buchmodell aus `models/book.model.js`.
-   Die `httpGetBookById`-Funktion sollte den Request-Parameter `id` verwenden.
-   Rufe die `findById`-Funktion des Buchmodells auf und übergebe die `id` als Parameter.
-   Wenn das Buch gefunden wird, sende das Buch als JSON-Antwort mit dem Statuscode 200.
-   Wenn das Buch nicht gefunden wird, sende eine Fehlermeldung mit dem Statuscode 404.
-   Exportiere den `httpGetBookById`-Controller.

Nachdem du diese Aufgaben in der angegebenen Reihenfolge abgeschlossen hast, kannst du die `findById`-Funktion verwenden, um ein Buch anhand seiner ID abzurufen. Die Funktion wird in der Route `/books/:id` verwendet.

**Aufgabe 12: Implementiere die Funktion `getAllBooks` im Buchmodell.**

-   Bearbeite die Datei `models/book.model.js`.
-   Importiere das Buchmodell.
-   Implementiere die Funktion `getAllBooks`, um alle Bücher abzurufen.
    -   Die Funktion sollte keine Parameter akzeptieren.
    -   Verwende die Methode `find` des Buchmodells, um alle Bücher abzurufen.
    -   Gib eine Promise zurück, die alle gefundenen Bücher enthält.
-   Exportiere die Funktion `getAllBooks`.

**Aufgabe 13: Implementiere den Controller `httpGetAllBooks`, um alle Bücher abzurufen.**

-   Bearbeite die Datei `controllers/book.controller.js`.
-   Importiere das Buchmodell aus `models/book.model.js`.
-   Implementiere den Controller `httpGetAllBooks`, um alle Bücher abzurufen.
-   Rufe die Funktion `getAllBooks` des Buchmodells auf, um alle Bücher abzurufen.
-   Wenn Bücher gefunden werden, sende die Bücher als JSON-Antwort mit dem Statuscode 200.
-   Wenn keine Bücher gefunden werden, sende eine leere Liste als JSON-Antwort mit dem Statuscode 200.
-   Exportiere den Controller `httpGetAllBooks`.

**Aufgabe 14: Implementiere Routen, um alle Bücher abzurufen.**

-   Bearbeite die Datei `routes/book.routes.js`.
-   Importiere den `httpGetAllBooks`-Controller aus `controllers/book.controller.js`.
-   Definiere die GET-Route `/books`, um alle Bücher abzurufen.
-   Verwende den `httpGetAllBooks`-Controller als Handler für die GET-Route.
-   Exportiere den Router.

Nachdem du diese Aufgaben in der gegebenen Reihenfolge abgeschlossen hast, hast du die Funktionalität, um alle Bücher mit der Route `/books` abzurufen. Der `httpGetAllBooks`-Controller wird diese Route behandeln und alle Bücher als JSON-Antwort zurückgeben.
```

Bitte hier einfach weiter machen:
**Neue Aufgabe:**

**Aufgabe 15: Implementiere die Funktion `updateBook` im Buchmodell.**

-   Bearbeite die Datei `models/book.model.js`.
-   Implementiere die Funktion `updateBook`, um ein Buch anhand seiner ID zu aktualisieren.
    -   Die Funktion sollte die Parameter `id` und `data` akzeptieren.
    -   Verwende die Methode `findByIdAndUpdate` des Buchmodells, um das Buch mit der entsprechenden ID zu aktualisieren.
    -   Übergebe `data` als zweiten Parameter, um die zu aktualisierenden Daten anzugeben.
    -   Verwende die Option `new: true`, um das aktualisierte Buch zurückzugeben.
    -   Verwende die Option `runValidators: true`, um die Schema-Validierung durchzuführen.
    -   Gib eine Promise zurück, die das aktualisierte Buch enthält.
-   Exportiere die Funktion `updateBook`.

**Aufgabe 16: Implementiere den Controller `httpUpdateBook`, um ein Buch zu aktualisieren.**

-   Bearbeite die Datei `controllers/book.controller.js`.
-   Implementiere den Controller `httpUpdateBook`, um ein Buch zu aktualisieren.
-   Die `httpUpdateBook`-Funktion sollte die Request-Parameter `id` und `data` verwenden.
-   Rufe die Funktion `updateBook` des Buchmodells auf und übergebe `id` und `data` als Parameter.
-   Wenn das Buch erfolgreich aktualisiert wurde, sende das aktualisierte Buch als JSON-Antwort mit dem Statuscode 200.
-   Wenn das Buch nicht gefunden wurde oder die Aktualisierung fehlgeschlagen ist, sende eine Fehlermeldung mit dem Statuscode 404 oder 500.
-   Exportiere den Controller `httpUpdateBook`.

**Aufgabe 17: Implementiere die Route zum Aktualisieren eines Buchs.**

-   Bearbeite die Datei `routes/book.routes.js`.
-   Importiere den `httpUpdateBook`-Controller aus `controllers/book.controller.js`.
-   Definiere die PUT-Route `/:id`, um ein Buch anhand seiner ID zu aktualisieren.
-   Verwende den `httpUpdateBook`-Controller als Handler für die PUT-Route.
-   Exportiere den Router.

**Aufgabe 18: Implementiere die Funktion `deleteBook` im Buchmodell.**

-   Bearbeite die Datei `models/book.model.js`.
-   Implementiere die Funktion `deleteBook`, um ein Buch anhand seiner ID zu löschen.
    -   Die Funktion sollte den Parameter `id` akzeptieren.
    -   Verwende die Methode `findByIdAndRemove` des Buchmodells, um das Buch mit der entsprechenden ID zu entfernen.
    -   Gib eine Promise zurück, die das gelöschte Buch enthält.
-   Exportiere die Funktion `deleteBook`.

**Aufgabe 19: Implementiere den Controller `httpDeleteBook`, um ein Buch zu löschen.**

-   Bearbeite die Datei `controllers/book.controller.js`.
-   Implementiere den Controller `httpDeleteBook`, um ein Buch zu löschen.
-   Die `httpDeleteBook`-Funktion sollte den Request-Parameter `id` verwenden.
-   Rufe die Funktion `deleteBook` des Buchmodells auf und übergebe die `id` als Parameter.
-   Wenn das Buch erfolgreich gelöscht wurde, sende eine Erfolgsmeldung mit dem Statuscode 200 zurück.
-   Wenn das Buch nicht gefunden wurde oder das Löschen fehlgeschlagen

ist, sende eine Fehlermeldung mit dem Statuscode 404 oder 500.

-   Exportiere den Controller `httpDeleteBook`.

**Aufgabe 20: Implementiere die Route zum Löschen eines Buchs.**

-   Bearbeite die Datei `routes/book.routes.js`.
-   Importiere den `httpDeleteBook`-Controller aus `controllers/book.controller.js`.
-   Definiere die DELETE-Route `/:id`, um ein Buch anhand seiner ID zu löschen.
-   Verwende den `httpDeleteBook`-Controller als Handler für die DELETE-Route.
-   Exportiere den Router.

Wenn du diese Aufgaben in der gegebenen Reihenfolge abgeschlossen hast, hast du die Funktionalität, um ein Buch anhand seiner ID zu aktualisieren und zu löschen. Die Route `/:id` wird den `httpUpdateBook`-Controller verwenden, um das Buch zu aktualisieren, und den `httpDeleteBook`-Controller, um das Buch zu löschen.
