---
title: companyLEARN
description: Lernplattform im CompanyGPT mit Kursen, Lektionen, Quizzen, Abschlussprüfung, zugewiesenen Pflichtkursen und Zertifikaten, auch direkt im Chat nutzbar.
---

companyLEARN ist die Lernplattform im CompanyGPT. Kurse bestehen aus Kapiteln mit Text- und Videolektionen, Quizzen und optional einer Abschlussprüfung. Du kannst Kurse selbst aus dem Katalog wählen oder bekommst Pflichtkurse mit Frist zugewiesen, zum Beispiel für Compliance-Schulungen oder das Onboarding. Nach dem Abschluss lädst du dein Zertifikat herunter.

Du findest companyLEARN unter **Alle Apps** und im Apps-Bereich des Chats. Die Anmeldung läuft mit deinem bestehenden Konto. Wie Kurse erstellt und zugewiesen werden, steht in der [Admin-Anleitung](/de/company-gpt/addons/companylearn/admin/).

## Katalog und zugewiesene Kurse

Auf deiner Startseite stehen zuerst die **dir zugewiesenen Kurse**, jeweils mit Frist, Fortschritt und einer Schaltfläche zum Weitermachen. Ist die Frist verstrichen und der Kurs nicht abgeschlossen, erscheint der Hinweis **Überfällig seit …** mit dem Fristdatum. Fristen gelten bis zum Ende des Tages (Zeitzone Europe/Berlin). Bist du über mehrere Zuweisungen demselben Kurs zugeordnet, gilt die früheste Frist.

Der **Katalog** zeigt alle Kurse, in die du dich selbst einschreiben darfst. Zugewiesene Kurse sind dort markiert. Kurse, die ein Admin nur für bestimmte Personen freigegeben hat, siehst du im Katalog nicht. Sie erscheinen erst, wenn sie dir zugewiesen wurden.

## Lektionen

Eine Lektion ist ein Text mit Bildern oder ein Video. Unter der Lektion findest du gegebenenfalls **Anhänge** zum Herunterladen, etwa PDFs oder Arbeitsblätter.

Neben der Lektion zeigt die **Kursübersicht** den gesamten Kurs: Kapitel mit Lektionen und Quiz, erledigte Schritte, gesperrte Kapitel und den aktuellen Schritt. Mit **Zurück** und **Weiter** unten gehst du in der Reihenfolge der Kursübersicht voran. Gesperrte Schritte werden übersprungen. Auf schmalen Bildschirmen klappt die Kursübersicht ein.

Ist die **Kapitel-Sperre** für den Kurs eingeschaltet (Standard), bleibt ein Kapitel gesperrt, bis die Lektionen des vorherigen Kapitels erledigt und dessen Quiz bestanden ist.

## Quizze

Ein Quiz kann folgende Regeln haben:

- **Zufällige Fragen:** Du bekommst nur eine Auswahl aus einem größeren Fragenpool. Die Auswahl bleibt für einen Versuch fest.
- **Gemischte Antworten:** Die Reihenfolge der Antwortoptionen ist pro Versuch gemischt.
- **Versuchslimit:** Die Anzeige „Versuch X von Y" zeigt, wie viele Versuche du noch hast. Sind alle verbraucht, wendest du dich an einen Admin, der die Versuche zurücksetzen kann.
- **Wartezeit:** Nach einem nicht bestandenen Versuch kann eine Wartezeit gelten. Die Seite zeigt dir, ab wann du es erneut versuchen kannst.

Nach dem Absenden siehst du zu jeder Frage, ob sie richtig war, welche Optionen richtig gewesen wären und, falls hinterlegt, eine **Erklärung**. Vor dem Absenden sind die richtigen Antworten nie sichtbar.

## Abschlussprüfung

Manche Kurse haben eine **Abschlussprüfung** nach dem letzten Kapitel. Sie ist erst freigeschaltet, wenn alle Kapitel abgeschlossen sind, und funktioniert wie ein Quiz (Fragenpool, Versuchslimit, Wartezeit, Auswertung mit Erklärungen). Hat ein Kurs eine Abschlussprüfung, gilt er erst als abgeschlossen, wenn du sie bestanden hast. Sie zählt beim Fortschritt als ein weiterer Schritt.

Ein bereits abgeschlossener Kurs bleibt abgeschlossen, auch wenn später Kapitel oder eine Prüfung ergänzt werden.

## Abschluss und Zertifikate

Wenn du den letzten Schritt erledigt hast, öffnet sich die **Abschlussseite**. Sie zeigt das Abschlussdatum, deine Quiz- und Prüfungsergebnisse, den Download des Zertifikats (sofern der Kurs eines hat) und wie es weitergeht: zuerst offene zugewiesene Kurse, dann weitere Kurse. Du erreichst sie später auch über den Kurs.

Auf deiner Startseite listet **Abgeschlossen** deine beendeten Kurse. Unter **Meine Zertifikate** findest du alle Zertifikate und lädst sie als PDF herunter, wahlweise **auf Deutsch oder auf Englisch**, sofern der Admin für die Sprache eine Vorlage hinterlegt hat.

:::note
Auf dem Zertifikat steht dein Name aus deinem Konto. Ist kein Name bekannt, wird der Download verweigert, statt ein Zertifikat ohne Namen auszustellen. Wurde deine Einschreibung durch einen Admin entfernt, ist das Zertifikat nicht mehr abrufbar.
:::

## companyLEARN im Chat

Du kannst companyLEARN auch im Chat nutzen, wenn der Agent oder das Modell das Tool **Learn** hat. Frage zum Beispiel „Welche Kurse gibt es?" oder „Wie weit bin ich in meinen Kursen?". Folgende Werkzeuge stehen zur Verfügung:

- **learn_list_courses**: Listet die Kurse auf, die du sehen darfst, wahlweise nur deine eingeschriebenen.
- **learn_course_overview**: Zeigt Kapitel, Lektionen, Quiz und Abschlussprüfung eines Kurses mit Sperr- und Abschlussstatus.
- **learn_enroll**: Schreibt dich in einen Kurs ein.
- **learn_my_progress**: Zeigt deinen Fortschritt, zugewiesene Kurse mit Fristen und den nächsten Schritt.
- **learn_watch_lesson**: Zeigt eine Lektion direkt im Chat.
- **learn_take_quiz**: Zeigt ein Quiz im Chat. Das Ergebnis wird nach dem Absenden ins Gespräch zurückgemeldet.
- **learn_open_ui**: Öffnet companyLEARN (Startseite, Katalog oder einen Kurs) im Chat.

Im Chat zeigen Lektionen nur den Inhalt, ohne Kursübersicht. Beim Abschluss eines Kurses erscheint eine kompakte Abschlussansicht.
