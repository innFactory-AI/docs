---
title: "companyADMIN: Einstiegs-Agent, Export mit Prompts, Rollen aus Entra ID und Modellwechsel für viele Agents"
excerpt: "companyADMIN bekommt in dieser Ausgabe viele Neuerungen von Version 3.4 bis 3.14: einen Einstiegs-Agent für neue Chats, Rollen aus Entra ID nur noch lesend, Export und Rückschreiben auch für Prompts, neue Rechte für Branding, Sammlungen und companyVibes sowie den Wechsel von Provider und Modell für viele Agents auf einmal."
date: 2026-11-15
author:
  name: innFactory Team
lang: de
tags:
  - CompanyGPT
  - companyADMIN
  - companyFILES
  - companyRAG
  - Agents
  - Skills
---

Im November hat companyADMIN die Versionen 3.4 bis 3.14 erhalten. Hier steht, was du als Administrator davon merkst. Mehr dazu unter [companyADMIN](/de/company-gpt/addons/companyadmin/). Einige Punkte hängen von deiner Umgebung ab; sprich uns an, wenn etwas bei dir fehlt.

:::caution[Aktion vor dem Update von companyFILES]
Das neue Recht **Eigenes Branding festlegen** (siehe unten) gilt in companyFILES, sobald deine Version es prüft. Wenn weiterhin jede Person ihr eigenes Branding festlegen soll, gib das Recht vorher unter **Konfiguration** → **Erweiterungen** → companyFILES mit **Für alle** frei. Sonst behalten nur Administratoren und ausdrücklich berechtigte Rollen und Gruppen ihr eigenes Branding.
:::

## 🛡️ companyADMIN

- **Einstiegs-Agent (3.4)**: Ein öffentlicher Agent kann der Start jedes neuen Chats sein. Du setzt ihn auf der Agent-Seite mit **Als Einstieg setzen**, entweder **fest** oder **weich** (Personen können dann selbst etwas anderes wählen). Unter **Konfiguration** → **Labels** gibt es zusätzlich **Einstieg pro Rolle oder Gruppe**; die erste passende Regel gilt. companyADMIN prüft vorher, ob Agent und Modell für alle Rollen nutzbar sind. Mehr unter [Provider und Modelle](/de/company-gpt/addons/companyadmin/modelle/#einstieg-für-neue-chats).
- **Rollen aus Entra ID nur lesend (3.7)**: Rollen, die Entra ID bei der Anmeldung setzt, etwa ADMIN über die Admin-Gruppe und die Rollen des Role-Sync, lassen sich in companyADMIN nicht mehr zuweisen; Entra ID würde sie ohnehin bei der nächsten Anmeldung zurücksetzen. Entfernen geht weiterhin, aber Entra ID gibt die Rolle zurück, solange die Person in der Gruppe ist. Ersetzt du die bisherige Rolle einer Person, fragt companyADMIN jetzt **Bisherige Rolle ersetzen?**. Die Mitgliederliste zeigt in der Spalte **Herkunft**, ob jemand über Entra-Gruppe oder von Hand eingetragen ist. Mehr unter [Rollen](/de/company-gpt/addons/companyadmin/rollen-und-rechte/#rollen-aus-entra-id).
- **Export und Rückschreiben für Agents, Skills und Prompts (3.8)**: Der Export bestehender Inhalte nach Git und das Rückschreiben decken jetzt auch Prompts ab. Angeboten werden nur Inhalte, die für alle oder Gruppen freigegeben sind, und deine eigenen; nichts ist vorausgewählt. Ein Prompt ohne Befehl bekommt einen aus seinem Namen, in companyGPT erscheint also ein neuer Slash-Befehl. Skills mit in companyGPT hochgeladenen Dateien lassen sich nicht exportieren. Die Vorschau nennt übersprungene Inhalte mit Grund. Mehr unter [Bibliotheks-Sync](/de/company-gpt/addons/companyadmin/library-sync/).
- **Mit mir teilen (3.9)**: Superadmins können einen Agent, den sie in der Liste sehen, mit sich selbst teilen, um ihn im Chat zu nutzen und weiterzugeben. Jede Freigabe steht im Audit-Log.
- **Skill-Dateien in der Code-Sandbox (3.10)**: Dateien synchronisierter Skills, etwa Skripte und Vorlagen, stehen der Code-Ausführung von Agents zur Verfügung, wenn deine Umgebung dafür eingerichtet ist. Dann übernimmt der Sync auch Binärdateien; sonst nennt er sie unter **Hinweise**.
- **Recht „Eigenes Branding festlegen“ (3.11)**: Das neue Recht der Erweiterung companyFILES entscheidet, wer vom Organisations-Branding abweichen darf. Beachte den Hinweis oben.
- **Cowork (3.12)**: Unter **Konfiguration** → **Cowork** pflegst du allgemeine Anweisungen für den Cowork-Agent der Desktop-App, gleich für alle Personen, bis 20.000 Zeichen. Speichern braucht das Recht **Konfiguration bearbeiten**.
- **Chat-Projekte (3.12.2)**: In Umgebungen, die die Funktion bieten, steuerst du je Rolle, ob Personen ihre Chat-Projekte teilen und öffentlich teilen dürfen.
- **companyVibes-Rechte (3.12.3)**: Sechs neue Rechte für companyVibes: **companyVibes nutzen**, **Apps erstellen**, **Apps teilen**, **Apps öffentlich freigeben**, **Apps prüfen und freigeben** und **companyVibes verwalten**. Die beiden Rechte zum öffentlichen Freigeben und Prüfen gibt es nur ausdrücklich, nie automatisch und nie für alle.
- **Sammlungen und Quellen anlegen (3.13)**: In companyRAG lässt sich Nutzen und Anlegen jetzt trennen. Nach dem Update kopiert companyADMIN einmalig alle Vergaben von **Wissen nutzen** auf das neue Recht **Sammlungen und Quellen anlegen**, damit niemand etwas verliert; bis dahin steht dort **Übernahme ausstehend**. Jede Rolle, die nutzen darf, darf danach zunächst auch anlegen. Sollen Rollen nur nutzen, entziehe ihnen das neue Recht und gib es nicht **Für alle** frei. Mehr unter [Erweiterungen](/de/company-gpt/addons/companyadmin/erweiterungen/#übernahme-ausstehend).
- **Provider und Modell für viele Agents umstellen (3.14)**: Unter **Inhalte** → **Agents** wechselst du Provider und Modell für bis zu 500 markierte Agents, oder mit **Alle Agents eines Providers umstellen …** für alle Agents eines Providers, auf Wunsch nur für bestimmte Modelle. Erst zeigt eine Vorschau, was sich ändert, dann bestätigst du. Auch private Agents anderer Personen werden umgestellt. Gib das Zielmodell vorher unter **Modellzugriff** frei, denn companyADMIN prüft nicht, ob jede Rolle es nutzen darf. Agents aus einem Repository ohne **Wir besitzen dieses Repo** überschreibt der nächste Sync wieder. **Rückgängig** stellt Agents zurück, die seitdem niemand gespeichert hat. Mehr unter [Inhalte und Sichtbarkeit](/de/company-gpt/addons/companyadmin/inhalte/#provider-und-modell-für-mehrere-agents-umstellen).
