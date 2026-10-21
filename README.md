# CompanyGPT Dokumentation

Willkommen bei der offiziellen Dokumentation für den CompanyGPT von [innFactory](https://innfactory.ai/). Diese Seite dient als zentrale Anlaufstelle für alle Informationen, Anleitungen und Ressourcen rund um unseren unternehmensinternen KI-Assistenten.

## Über diese Dokumentation

Diese Dokumentation bietet einen umfassenden Einblick in zwei Kernbereiche:

*   **CompanyGPT**: Detaillierte Beschreibungen der Benutzeroberfläche, der verschiedenen Funktionen und Einstellungsmöglichkeiten.
*   **Prompt Engineering**: Eine Einführung in die Kunst des Promptings, inklusive Best Practices, Techniken und Beispielen, um das Beste aus dem CompanyGPT herauszuholen.

## Für wen ist diese Dokumentation?

Diese Dokumentation richtet sich an alle Mitarbeiter, die den CompanyGPT nutzen oder mehr über die Möglichkeiten von KI-Assistenten im Unternehmenskontext erfahren möchten.

## Quick Links

*   **Zur CompanyGPT Webseite:** [innFactory CompanyGPT](https://innfactory.ai/company-gpt-dsgvo-konformes-chatgpt-fur-ihr-unternehmen/)
*   **Zur innFactory Webseite:** [innFactory](https://innfactory.ai/)

## Beitrag

Diese Dokumentation ist ein lebendiges Dokument und wird kontinuierlich erweitert und verbessert. 
## Design: companyGPT UI theme

Die Seite nutzt dieselben Farbrollen, Schriften und Radien wie der companyGPT-Chat und alle Extensions
(`@innfactory/companygpt-ui` aus `innFactory/companygpt-sdk`). Die Dateien liegen in `src/styles/companygpt-ui/`
und werden nicht von Hand bearbeitet; `src/styles/global.css` bildet Starlight nur auf diese Rollen ab.

- `npm run ui:sync` holt das Theme vom gepinnten SDK-Release (`REF` in `scripts/sync-companygpt-ui.mjs`, braucht `gh` mit Zugriff auf innFactory).
  Lokal geht auch `node scripts/sync-companygpt-ui.mjs --from ../companygpt-sdk/ui`.
- `npm run ui:check` prüft, ob die eingecheckten Dateien zum gepinnten Release passen.
