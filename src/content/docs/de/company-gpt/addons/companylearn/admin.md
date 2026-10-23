---
title: companyLEARN für Admins
description: Kurse mit Kapiteln, Lektionen, Quizzen und Abschlussprüfung erstellen, veröffentlichen, per Person, Gruppe oder an alle zuweisen, Zertifikatsvorlagen pflegen und den Lernstand auswerten.
---

Diese Seite richtet sich an Personen mit der Berechtigung `ext:learn:admin`. Wie Lernende companyLEARN nutzen, steht in der [Übersicht](/de/company-gpt/addons/companylearn/).

## Kurse erstellen

Ein Kurs besteht aus **Kapiteln**. Ein Kapitel enthält **Lektionen** (Text in Markdown oder ein Video) und optional ein **Quiz**. Kapitel und Lektionen lassen sich mit **Nach oben** und **Nach unten** umsortieren.

- **Textlektionen:** Neben dem Markdown-Editor zeigt eine Live-Vorschau das Ergebnis. Bilder (PNG, JPEG, WebP, GIF) lädst du an der Cursorposition hoch. Externe Bild-URLs werden aus Sicherheitsgründen nicht geladen, sondern als Link dargestellt.
- **Videolektionen:** Du lädst die Videodatei hoch. Die Wiedergabe ist geschützt und unterstützt Vorspulen.
- **Anhänge:** Sobald eine Lektion gespeichert ist, hängst du Dateien an (PDF, Word, Excel, PowerPoint, TXT, CSV, ZIP, PNG, JPEG), kannst sie entfernen und umsortieren. Lernende laden sie unter der Lektion herunter. Wenn du eine Lektion löschst, werden ihre Anhänge und Bilder mitgelöscht, sofern sie nirgends sonst verwendet werden.

### Quiz-Einstellungen

Im Quiz-Editor legst du Fragen mit Antwortoptionen fest und kannst pro Frage eine **Erklärung** (Markdown) hinterlegen. Dazu kommen die Einstellungen:

- Antwortoptionen mischen (ja/nein)
- „N zufällige Fragen aus M": Pro Versuch wird eine feste Auswahl gezogen und genau darauf ausgewertet.
- Versuchslimit (leer = unbegrenzt)
- Wartezeit in Minuten nach einem nicht bestandenen Versuch (leer = keine)

Bestehende Quizze verhalten sich unverändert (nicht gemischt, alle Fragen, unbegrenzte Versuche, keine Erklärung).

Hat jemand alle Versuche eines Quiz verbraucht, setzt du sie in der Personenansicht der Übersicht über **Versuche zurücksetzen** zurück. Frühere Versuche bleiben im Verlauf, als zurückgesetzt markiert. Nur spätere Versuche zählen zum Limit.

### Abschlussprüfung

Im Kurs-Editor legst du unter **Abschlussprüfung** ein optionales Quiz für den ganzen Kurs an, mit denselben Einstellungen wie ein Kapitel-Quiz. Es wird freigeschaltet, wenn alle Kapitel abgeschlossen sind. Mit Prüfung gilt ein Kurs erst nach bestandener Prüfung als abgeschlossen.

:::note
Abschlüsse sind endgültig. Wenn du nachträglich ein Kapitel, ein Quiz oder eine Prüfung ergänzt, werden bereits abgeschlossene Einschreibungen nicht wieder geöffnet, und ihre Zertifikate bleiben gültig. Wer noch nicht fertig ist, muss die neuen Teile absolvieren.
:::

## Veröffentlichen und Sichtbarkeit

Ein neuer Kurs ist ein **Entwurf**, den Lernende nicht sehen. Das Statusabzeichen zeigt **Entwurf**. Mit dem Schalter **Veröffentlicht** gibst du den Kurs frei und nimmst ihn durch Ausschalten wieder aus dem Angebot.

Der Schalter **Selbsteinschreibung erlauben** steuert die Sichtbarkeit:

- **An (Standard):** Der Kurs steht im Katalog, und jede Person darf sich einschreiben. Du kannst ihn trotzdem zuweisen.
- **Aus:** Der Kurs steht nicht im Katalog. Nur Personen mit einer Zuweisung oder einer bestehenden Einschreibung sehen und öffnen ihn, alle anderen erhalten eine „nicht gefunden"-Antwort. Eine Selbsteinschreibung ist nicht möglich. Wer aus einer Zuweisung entfernt wurde, behält Zugriff auf den eigenen Fortschritt.

Admins sehen immer alle Kurse.

## Zuweisungen

Im Bereich **Zuweisungen** weist du einen Kurs zu. Das Ziel wählst du über ein gemeinsames Suchfeld für Personen und Gruppen:

- **Eine Person**
- **Eine Entra-Gruppe:** Die Mitglieder werden sofort übernommen und täglich automatisch abgeglichen. Neue Mitglieder erhalten die Zuweisung, ausgeschiedene verlieren sie. Fortschritt und Einschreibung bleiben bestehen, der Kurs ist nur nicht mehr verpflichtend und zählt nicht mehr als überfällig. Über eine Schaltfläche startest du den Abgleich jederzeit selbst.
- **Alle:** Gilt für alle bekannten Lernenden sowie für jede Person bei ihrem ersten Besuch.

Als Frist wählst du ein **festes Datum** oder **N Tage nach der Zuweisung**. Letzteres eignet sich für das Onboarding, weil es für jede Person ab ihrer Zuweisung zählt.

Pro Zuweisung siehst du die Statuszahlen (zugewiesen, in Bearbeitung, abgeschlossen, überfällig) und die Personenliste mit Status, Frist und Fortschritt. Du kannst nach **überfällig** filtern und die Liste als **CSV** exportieren. Das Löschen einer Zuweisung entzieht sie allen Personen.

:::note
Bei Gruppen erhalten alle Mitglieder die Zuweisung, auch wer companyLEARN noch nie geöffnet hat. Solche Personen sind in der Liste mit **Noch nie angemeldet** markiert, damit sofort klar ist, warum jemand überfällig ist. Wähle deshalb Gruppen, deren Mitglieder Zugriff auf companyLEARN haben. Bei der Zuweisung an **Alle** zählen nur Personen, die companyLEARN schon genutzt haben, die Zahlen sind entsprechend begrenzt.
:::

Auf Systemen mit Keycloak statt Entra beziehen sich Gruppenzuweisungen auf einen Gruppennamen. Die Zuweisung greift, sobald sich jemand mit dieser Gruppe anmeldet. Dort zählen nur Personen, die sich seit der Zuweisung angemeldet haben.

## Übersicht

Die **Übersicht** (im Menü) zeigt Kennzahlen mit Verlauf (7, 30 oder 90 Tage), eine Kurstabelle, Kursberichte mit allen Lernenden (auch „ins Stocken geraten": seit mehr als 14 Tagen ohne Aktivität), eine Lernendenliste und eine Personenansicht mit Kursen, Quiz-Versuchen und Verlauf. Hier schreibst du Personen ein oder aus und exportierst als CSV. Beim Ausschreiben bleiben Fortschritt und Quizergebnisse erhalten, nur das Abschlussdatum entfällt. Das zugehörige Zertifikat ist dann nicht mehr abrufbar. Zuweisungen und Fristen erscheinen auch in den Kurs- und Personenansichten. Namen und E-Mail-Adressen sehen nur Admins.

## Zertifikate

Zertifikate entstehen aus **Word-Vorlagen** (`.docx`). Du lädst eine Vorlage pro Sprache (Deutsch, Englisch) hoch, entweder als Standard für alle Kurse oder für einen einzelnen Kurs. Pro Kurs schaltest du **Zertifikat bei Abschluss** an oder aus und wählst die Vorlage (kursspezifisch oder Standard).

In der Vorlage stehen feste Platzhalter, die als Text ersetzt werden. Es wird nichts berechnet oder ausgeführt:

| Platzhalter | Inhalt |
|---|---|
| `{name}` | Name der lernenden Person |
| `{course}` | Kurstitel |
| `{completionDate}` | Abschlussdatum, in der Sprache des Zertifikats formatiert |
| `{certificateId}` | Eindeutige Kennung, mit der sich ein Zertifikat prüfen lässt |

Beim Hochladen zeigt companyLEARN die gefundenen Platzhalter an, lehnt unbekannte ab und warnt vor fehlenden. Mit **Vorschau** erzeugst du ein PDF mit Beispieldaten.

Das PDF wird beim ersten Download je Sprache erzeugt und gespeichert. Eine geänderte Vorlage gilt für Downloads, die danach erfolgen. Bereits erzeugte PDFs bleiben unverändert. Über die Personenansicht lädst du das Zertifikat einer Person herunter. Zertifikate stehen nur zur Verfügung, wenn der Betreiber die PDF-Erzeugung für den Tenant eingerichtet hat.

## Kurse im Chat aus einem Dokument erstellen

Du kannst einen ganzen Kurs im Chat erstellen lassen, zum Beispiel aus einer Richtlinie oder einem Handbuch. Hänge das Dokument an (oder nutze companyRAG oder M365) und bitte das Modell, einen Kurs daraus zu erstellen. Das Modell liest das Dokument und legt Kapitel, Textlektionen, Quizze mit Erklärungen und optional eine Abschlussprüfung über das Tool `learn_admin_create_course` an. Alle Admin-Werkzeuge stehen nur Admins zur Verfügung:

- **learn_admin_list_courses**: alle Kurse inklusive Entwürfen.
- **learn_admin_get_course**: der vollständige Kurs mit Lösungen und Erklärungen.
- **learn_admin_create_course**: legt einen ganzen Kurs als Entwurf an.
- **learn_admin_update_course**: ändert einen Entwurf.
- **learn_admin_publish**: veröffentlicht einen Kurs oder zieht ihn zurück. Das Modell fragt vorher nach.
- **learn_admin_report**: Auswertungen (Übersicht, Kurs, Person).
- **learn_admin_enroll**: schreibt eine Person ein oder aus.
- **learn_admin_reset_quiz_attempts**: setzt die Versuche einer Person bei einem Quiz zurück.
- **learn_admin_find_people**: sucht Personen und Gruppen für eine Zuweisung.
- **learn_admin_assign**: weist einen Kurs einer Person, einer Gruppe oder allen zu, mit Frist.

So kannst du auch direkt im Chat zuweisen, zum Beispiel „Weise den Kurs an die Gruppe Alle Mitarbeitenden zu, Frist 30. November". Dafür muss der Kurs veröffentlicht sein.

Eine Schritt-für-Schritt-Anleitung mit Prompt liefert der Skill [Kurse erstellen](/de/tutorials/skills/company-learn/course-authoring-skill/).

:::caution[Der Kurs bleibt ein Entwurf]
Ein im Chat erzeugter Kurs ist immer unveröffentlicht. Das Tool liefert dir einen Link zum Kurs-Editor. Prüfe Inhalt und Quizfragen, ergänze Videos und Bilder (die gibt es nur im Editor) und veröffentliche den Kurs erst dann. Über den Chat lässt sich ein bereits veröffentlichter Kurs nicht ändern. Zieh ihn dazu zuerst zurück oder bearbeite ihn im Editor.
:::
