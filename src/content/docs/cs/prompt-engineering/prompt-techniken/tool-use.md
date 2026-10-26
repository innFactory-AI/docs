---
title: Používání nástrojů a provádění akcí s CompanyGPT
description: Rozšíření schopností CompanyGPT o externí nástroje a procesy
---

## Používání nástrojů a provádění akcí s CompanyGPT

Velké jazykové modely (LLM), jako jsou ty integrované v CompanyGPT, jsou neuvěřitelně výkonné, pokud jde o porozumění textu a jeho generování. Jejich hlavní kompetence však spočívá ve zpracování jazyka. Aby byly v podnikovém prostředí skutečně užitečné, často potřebují **komunikovat s externími systémy**, **získávat aktuální informace** nebo **provádět konkrétní akce**. Právě zde přichází na řadu **používání nástrojů (tool use)**.

### Co je používání nástrojů?

Používání nástrojů umožňuje CompanyGPT překročit čistě jazykové schopnosti a komunikovat s digitálním prostředím jako inteligentní agent. Místo pouhých textových odpovědí umožňuje integrace nástrojů CompanyGPT:

*   **Přistupovat k dynamickým a aktuálním informacím:** Informacím, které nejsou součástí původní trénovací datové sady LLM (např. aktuální stav ticketu v Jiře, obsah nedávno aktualizovaného článku v Confluence nebo data z interních systémů v reálném čase).
*   **Provádět akce v externích systémech:** Měnit data, spouštět procesy nebo komunikovat s jinými aplikacemi.
*   **Řešit složité úlohy:** Kombinací více kroků, z nichž každý vyžaduje konkrétní nástroj.

CompanyGPT se tak v podstatě stává nejen partnerem pro konverzaci, ale **asistentem, který se může aktivně zapojit do vašich podnikových pracovních postupů.**

### Jak funguje používání nástrojů v CompanyGPT?

Mechanismus používání nástrojů je elegantní:

1.  **Definice nástrojů:** CompanyGPT dostane seznam dostupných nástrojů. Každý nástroj má jasný popis své funkce a parametrů, které vyžaduje (např. `jira_create_ticket(summary, description, project, assignee)` nebo `confluence_search(search term)`).
2.  **Rozhodnutí LLM:** Na základě požadavku uživatele LLM analyzuje, zda a jaký nástroj je potřeba k co nejlepšímu zodpovězení požadavku nebo provedení požadované akce.
3.  **Extrakce parametrů:** LLM z požadavku uživatele extrahuje parametry potřebné ke správnému volání zvoleného nástroje.
4.  **Volání nástroje:** CompanyGPT vrátí „volání nástroje“ (tool call), které systému sdělí, jaký nástroj má spustit a s jakými parametry.
5.  **Provedení a výsledek:** Externí „vykonavatel nástrojů“ (tool executor) spustí samotný nástroj (např. volání API Jiry nebo Confluence). Výsledek tohoto provedení (např. stav vytvořeného ticketu, výsledky vyhledávání) se poté odešle zpět do CompanyGPT.
6.  **Generování odpovědi:** CompanyGPT použije výsledek volání nástroje jako doplňující kontext k vytvoření úplné a relevantní odpovědi uživateli nebo k naplánování dalších akcí.

### Příklady používání nástrojů v CompanyGPT

Možnosti jsou nekonečné a lze je přesně přizpůsobit potřebám vaší společnosti:

*   **Získávání informací z firemních systémů:**
    *   „Najdi v **SharePointu** nejnovější směrnici k vyúčtování výdajů.“
    *   „Kolik otevřených ticketů má náš tým aktuálně v **Jiře**?“
    *   „Shrň mi článek o našem novém produktu z interní **wiki Confluence**.“
    *   „Ukaž mi poslední tři zprávy v kanálu ‚Projekt X‘ v **Teams**.“
* **Provádění akcí a automatizace:**
    * „Vytvoř nový ticket v Jiře pro chybu s názvem ‚Problém s přihlášením v aplikaci X‘, priorita vysoká, přiřazený Janu Novákovi.“
    * „Naplánuj schůzku s marketingovým týmem na příští středu v 10 hodin, téma: plánování kampaně.“
* „Pošli zprávu všem v týmu ‚Vývoj‘ v Teams: ‚Daily standup začíná za 5 minut!‘“
* „Změň stav ticketu ABC-123 v Jiře na ‚Probíhá‘.“

### MCP (Model Context Protocol) jako nástroj

Obzvlášť důležitým prvkem architektury nástrojů CompanyGPT je **MCP (Model Context Protocol)**. MCP je specializovaný protokol a rozhraní, které CompanyGPT umožňuje bezproblémově komunikovat s **externími službami běžícími na zákaznických serverech MCP**. Tyto servery často hostují složité backendové funkce nebo orchestrují konkrétní podnikové procesy.

Když CompanyGPT obdrží požadavek, který vyžaduje interakci s takovou specializovanou službou, použije se MCP jako vyhrazený nástroj.

**Jak nástroj MCP funguje:**

*   **Standardizovaná komunikace:** MCP poskytuje CompanyGPT standardizovaný způsob, jak odesílat požadavky službám hostovaným na serverech MCP a přijímat jejich odpovědi.
*   **Spouštění specializovaných služeb:** CompanyGPT nemusí znát vnitřní detaily složité služby, jednoduše zavolá příslušný nástroj MCP. Tento nástroj ví, jak s danou službou prostřednictvím MCP komunikovat.
* **Předání parametrů:** CompanyGPT předá MCP potřebné počáteční parametry (např. „Vytvořit nového uživatele“ s parametry „Jméno“, „Role“, „Oprávnění“). MCP je poté předá externí službě.
*   **Abstraktní provedení služby:** Externí služba připojená přes MCP pak převezme kompletní provedení uložené logiky. To může zahrnovat například:
*   Vytvoření nového účtu v Active Directory nebo v HR softwaru.
    * Konfiguraci přístupových práv v různých systémech.
* Spuštění vícekrokového onboardingového pracovního postupu.
* **Zpětné hlášení stavu:** Externí služba odešle stav nebo výsledek provedení zpět do CompanyGPT prostřednictvím MCP, aby mohl být uživatel informován o průběhu nebo dokončení akce.

Díky používání MCP jako nástroje se CompanyGPT stává centrálním přístupovým bodem pro zahajování a sledování složitých, podnikově kritických procesů, které spravují specializované externí služby. Výrazně tím rozšiřuje automatizační možnosti CompanyGPT, protože poskytuje robustní a standardizované rozhraní k těmto výkonným backendovým systémům.

### Přínosy používání nástrojů v CompanyGPT

Integrace nástrojů (včetně MCP) do CompanyGPT zásadně mění způsob, jakým komunikujete se svým interním AI asistentem:

*   **Vyšší produktivita:** Automatizace opakujících se úloh a rychlý přístup k potřebným informacím.
*   **Lepší rozhodnutí:** CompanyGPT vám může pomáhat na základě dat v reálném čase a znalostí specifických pro vaši společnost.
*   **Bezproblémová integrace:** CompanyGPT se stává nedílnou součástí vaší stávající IT infrastruktury.
*   **Rozšířená funkčnost:** CompanyGPT dokáže věci, které by čistý jazykový model nikdy nezvládl, od vyhledávání dat po automatizaci procesů.
