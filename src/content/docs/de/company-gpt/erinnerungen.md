---
title: Erinnerungen
description: So merkt sich CompanyGPT über einzelne Chats hinweg Fakten, Vorlieben und Projektdetails – automatisch oder manuell.
---

Wenn Erinnerungen in Ihrer Umgebung aktiv sind und Sie [gespeicherte Erinnerungen verwenden](/de/company-gpt/einstellungen/#gespeicherte-erinnerungen-verwenden), kann sich CompanyGPT über einzelne Unterhaltungen hinweg an Fakten, Vorlieben und Projektdetails erinnern. Das macht Ihre Interaktionen nicht nur persönlicher und relevanter, sondern auch deutlich effizienter.

Erinnerungen können auf zwei Arten entstehen: automatisch und manuell.

## Wie Erinnerungen gespeichert werden

Jede Erinnerung wird als Schlüssel-Wert-Paar gespeichert: Der Schlüssel ist das Stichwort, der Wert die dazugehörige Information. Die automatische Speicherung ordnet Informationen acht festen Schlüsseln zu:

| Schlüssel | Inhalt |
| --- | --- |
| `user_profile` | Wer Sie sind: Name, Rolle, Team, Hintergrund |
| `company_context` | Was Ihr Unternehmen tut: Produkte, Leistungen, Partner, eingesetzte Technik, Struktur |
| `rules_and_preferences` | Wie CompanyGPT kommunizieren und arbeiten soll: Ton, Format, Sprache, feste Vorgaben |
| `active_work` | Woran Sie gerade arbeiten: Projekte, Ziele, Fristen, offene Entscheidungen |
| `reference_data` | Wo etwas zu finden ist: Links, Dokumente, Werkzeuge, wiederkehrende Vorlagen |
| `glossary` | Unternehmensspezifische Begriffe, Abkürzungen und interne Namen |
| `decisions` | Getroffene Entscheidungen mit Begründung |
| `corrections` | Ihre ausdrücklichen Korrekturen, bis sie im passenden Schlüssel übernommen sind |

Für alle Erinnerungen zusammen stehen in der Standardkonfiguration bis zu 12.000 Token zur Verfügung; in einzelnen Umgebungen kann das Limit abweichen. Wie viel davon belegt ist, zeigt die Prozentangabe im Bereich **Erinnerungen** in der Seitenleiste. Zeigen Sie mit der Maus darauf, sehen Sie die genaue Tokenzahl. Ist das Limit erreicht, lassen sich keine weiteren Erinnerungen anlegen.

## Automatisches Speichern

Wenn Sie die Funktion aktiviert haben, wertet CompanyGPT im Hintergrund die jüngsten Nachrichten Ihrer Chats aus und speichert Informationen, die auch später noch nützlich sind. Bestehende Einträge werden dabei aktualisiert, statt sie doppelt anzulegen. Einträge werden in Ihrer Sprache und mit Datum gespeichert.

Die automatische Speicherung ist angewiesen, keine einmaligen Fragen, Vermutungen, Zugangsdaten wie Passwörter oder API-Schlüssel und keine sensiblen personenbezogenen Daten zu speichern.

## Manuelles Speichern

Sie können CompanyGPT direkt anweisen, sich etwas zu merken. Das ist besonders nützlich für Fakten, die Sie dauerhaft speichern möchten.

### Im Chat

Geben Sie einfach einen Befehl wie:

```text
"Merk dir, dass ich der Projektleiter für das Projekt 'Phönix' bin."
"Erinnere dich daran: Das Budget für Marketing beträgt 20.000 €."
"Speichere diese Information: Mein Hauptansprechpartner bei Kunde X ist Max Mustermann."
```

Ist in Ihrer Umgebung im Menü **Werkzeuge** des Eingabefelds die Option **Erinnerung** verfügbar und aktiviert, kann das Modell im laufenden Chat auch selbst Erinnerungen speichern oder löschen.

### Über die Seitenleiste

In der linken Seitenleiste finden Sie den Bereich **Erinnerungen**. Dort sehen Sie alle gespeicherten Erinnerungen und können sie über **Erinnerungen filtern...** durchsuchen, bearbeiten oder löschen.

Über das Plus-Symbol (**Erinnerung erstellen**) legen Sie eine neue Erinnerung an. Der **Schlüssel** darf nur Kleinbuchstaben und Unterstriche enthalten, den **Wert** formulieren Sie frei.

**Beispiel**:

- Schlüssel: `active_work`
- Wert: `Projekt Phönix | Projektleitung: [Ihr Name]`

Jeder Schlüssel kann nur einmal vorkommen. Gibt es den Schlüssel bereits, ergänzen Sie den vorhandenen Eintrag über **Bearbeiten**. Eigene Schlüssel sind ebenfalls möglich; Einträge unter eigenen Schlüsseln pflegt die automatische Speicherung jedoch nicht.

## Erinnerungen ein- und ausschalten

Sofern Ihre Umgebung das zulässt, legen Sie mit **Erinnerung nutzen** im Bereich **Erinnerungen** oder mit [Gespeicherte Erinnerungen verwenden](/de/company-gpt/einstellungen/#gespeicherte-erinnerungen-verwenden) in den Einstellungen fest, ob CompanyGPT Ihre Erinnerungen in Antworten einbezieht.

## Erinnerungen von Agenten

[Agenten](/de/company-gpt/agenten/) können ebenfalls Erinnerungen speichern, je nach Einstellung des Agenten auch getrennt von Ihren persönlichen Erinnerungen. Gibt es solche Erinnerungen, filtern Sie im Bereich **Erinnerungen** nach **Alle Erinnerungen**, **Persönlich** oder einem bestimmten Agenten.
