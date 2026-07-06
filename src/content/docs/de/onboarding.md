---
title: Erste Schritte mit Ihrem CompanyGPT Demo-Zugang
description: Geführter Einstieg für Ihren CompanyGPT-Demo-Zugang – Kernkonzepte, vorbereitete RAG-Agenten und Beispiel-Prompts zum direkten Ausprobieren.
topic: documentation
---

Willkommen in Ihrem CompanyGPT-Demo-Zugang! Diese Seite führt Sie in wenigen Minuten durch die wichtigsten Konzepte und zeigt Ihnen anhand vorbereiteter Beispiel-Agenten, was Sie direkt ausprobieren können. Für alle Details darüber hinaus steht Ihnen die vollständige Dokumentation offen.

## Was ist CompanyGPT?

CompanyGPT ist Ihr sicherer KI-Assistent für höchste Produktivität – angelehnt an die vertraute Oberfläche von ChatGPT, erweitert um Agenten, RAG (Retrieval Augmented Generation) und weitere Addons. Eine ausführliche Einführung finden Sie unter [Was ist CompanyGPT?](/de/intro/company-gpt/).

## Kernkonzepte

### Chat und Modelle

Sie chatten wie gewohnt und können dabei zwischen verschiedenen KI-Modellen wählen, je nach Anwendungsfall und gewünschter Geschwindigkeit oder Qualität. Details zu den verfügbaren Modellen und Parametern finden Sie unter [KI Einstellungen](/de/company-gpt/ki-einstellungen/).

### Prompts (Promptvorlagen)

Promptvorlagen sind gespeicherte, wiederverwendbare Anfragen – unabhängig von Modell oder Agent. Sie eignen sich besonders für wiederkehrende Aufgaben. Mehr dazu unter [Prompts](/de/company-gpt/prompts/).

### Agenten

Agenten sind fortgeschrittene KI-Systeme, die nicht nur antworten, sondern auch Werkzeuge nutzen können, um Informationen zu beschaffen – zum Beispiel eine Suche in Ihren Dokumenten oder im Internet. Mehr dazu unter [Agenten](/de/company-gpt/agenten/).

## Wissen & RAG in Ihrem Demo-Zugang

Über [CompanyRAG](/de/company-gpt/addons/companyrag/) lassen sich große Dokumentenmengen semantisch durchsuchbar machen und Agenten zur Verfügung stellen – die zugrunde liegende Methode heißt [RAG (Retrieval Augmented Generation)](/de/prompt-engineering/prompt-techniken/rag/).

:::note
In Ihrem Demo-Zugang können Sie **keine eigenen Sammlungen (Collections)** anlegen – das übernehmen wir für Sie bei der Einrichtung. Sie können aber eigene **Agenten** erstellen, die auf die bestehenden Sammlungen zugreifen, oder direkt eine der vorbereiteten Beispiel-Agenten unten nutzen.
:::

## Die vorbereiteten Beispiel-Agenten

Für Ihren Demo-Zugang haben wir vier Beispiel-Agenten vorbereitet. Klicken Sie einfach auf einen der Links, um direkt einen neuen Chat mit dem jeweiligen Agenten zu starten – Sie finden die Agenten alternativ auch über die Modellauswahl im Chat.

:::tip
Die Beispieldaten hinter den RAG-Agenten (Internes Wiki, Datensatz-Abfrage, KI-Themen) dienen zur Veranschaulichung. In einer echten Einrichtung würden diese Agenten auf Ihre eigenen Dokumente, Datensätze und internen Inhalte zugreifen. Der Web-Recherche-Agent arbeitet dagegen immer mit aktuellen, echten Inhalten aus dem Internet.
:::

### Internes Wiki

Beantwortet Fragen zu internen Richtlinien, Prozessen und Wissen – wie ein Kollege, der Ihr Firmenwiki auswendig kennt.

**[→ Chat mit dem Internes-Wiki-Agenten starten](https://companygpt.innfactory.ai/c/new?agent_id=agent_So5F8M3RZk7vyF_0mO8ai)**

Beispiel-Prompts:

- „Wie stelle ich einen Urlaubsantrag?“
- „Was regelt unsere Homeoffice-Betriebsvereinbarung?“
- „An wen wende ich mich bei IT-Problemen?“
- „Was besagt unsere Datenschutzrichtlinie?“
- „Wie läuft das Onboarding neuer Mitarbeitender ab?“

### Datensatz-Abfrage

Beantwortet gezielte Fragen zu einem strukturierten Datensatz, statt nur einzelne Dokumente zusammenzufassen.

**[→ Chat mit dem Datensatz-Abfrage-Agenten starten](https://companygpt.innfactory.ai/c/new?agent_id=agent_3C3ntNImkWEL7wpRiokGb)**

Beispiel-Prompts:

- „Was sind die Top 10 Produkte nach Umsatz?“
- „Wie viele Kunden kommen pro Filiale?“
- „Zeige mir den durchschnittlichen Rabatt pro Produktkategorie.“
- „Vergleiche die Versandgeschwindigkeit zwischen den Filialen.“
- „Welche Produkte haben aktuell niedrige Lagerbestände?“

### Generischer RAG-Agent (KI-Themen)

Beantwortet allgemeine Fragen rund um KI-Themen auf Basis einer indexierten Wissenssammlung – ideal, um das Prinzip von RAG selbst zu erleben.

**[→ Chat mit dem KI-Themen-Agenten starten](https://companygpt.innfactory.ai/c/new?agent_id=agent_ulS_lcjGwTAG2Ly3zTcgz)**

Beispiel-Prompts:

- „Was ist der Unterschied zwischen RAG und Fine-Tuning?“
- „Erkläre mir, was ein Embedding ist.“
- „Was ist Prompt Engineering und warum ist es wichtig?“
- „Was bedeutet Halluzination im Kontext von KI-Modellen?“

### Web-Recherche

Durchsucht das Internet nach aktuellen Informationen und fasst die Ergebnisse mit Quellenangaben zusammen – ideal für Recherchen zu aktuellen Themen, Unternehmen oder Nachrichten. Mehr zum zugrunde liegenden Prinzip unter [Websuche & WebFetch](/de/company-gpt/integrationen/websuche/).

**[→ Chat mit dem Web-Recherche-Agenten starten](https://companygpt.innfactory.ai/c/new?agent_id=agent_X6vzStAf378z5NejY3VmK)**

Beispiel-Prompts:

- „Was sind die aktuellen Entwicklungen beim EU AI Act?“
- „Recherchiere die letzten Pressemitteilungen eines Unternehmens Ihrer Wahl.“
- „Was gibt es Neues zum Thema DSGVO-konforme KI?“
- „Vergleiche die aktuellen Preise verschiedener Cloud-Anbieter für KI-Modelle.“

## Eigene Agenten erstellen

Sobald Sie sich mit den Grundlagen vertraut gemacht haben, können Sie eigene Agenten erstellen, die auf die bestehenden Sammlungen zugreifen. Eine Anleitung dazu finden Sie unter [Agenten](/de/company-gpt/agenten/); Tipps für gute Anweisungen unter [Prompt Engineering](/de/prompt-engineering/uebersicht/).

## Fragen?

In Ihrem Demo-Zugang steht Ihnen außerdem ein Hilfe-Agent zur Verfügung, der diese Dokumentation kennt und Ihre Fragen zu CompanyGPT direkt im Chat beantwortet – der schnellste Weg zu einer Antwort.

**[→ Chat mit dem Hilfe-Agenten starten](https://companygpt.innfactory.ai/c/new?agent_id=agent_nGxgjeBKLv1vRTxrEAluy)**

Wenn Sie tiefer einsteigen möchten, finden Sie die vollständige Dokumentation unter [Was ist CompanyGPT?](/de/intro/company-gpt/).

## Ihre nächsten Schritte

- [ ] Stellen Sie dem Internen-Wiki-Agenten eine erste Frage
- [ ] Probieren Sie den Datensatz-Abfrage-Agenten aus
- [ ] Testen Sie den generischen RAG-Agenten zu KI-Themen
- [ ] Lassen Sie den Web-Recherche-Agenten ein aktuelles Thema für Sie recherchieren
- [ ] Erstellen Sie eine eigene Promptvorlage
- [ ] Erstellen Sie Ihren ersten eigenen Agenten
- [ ] Haben Sie Fragen? Fragen Sie den Hilfe-Agenten
