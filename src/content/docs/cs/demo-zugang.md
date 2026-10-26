---
title: Začínáme s demo účtem CompanyGPT
description: Průvodce úvodem do Vašeho demo účtu CompanyGPT – základní pojmy, předpřipravení agenti RAG a ukázkové prompty, které můžete hned vyzkoušet.
topic: documentation
---

Vítejte ve svém demo účtu CompanyGPT! Tato stránka Vás během několika minut provede klíčovými pojmy a na předpřipravených ukázkových agentech ukáže, co můžete hned vyzkoušet. Pro vše ostatní máte vždy k dispozici úplnou dokumentaci.

:::note[Váš demo účet zobrazuje nové rozhraní chatu]
Váš demo účet již zobrazuje nové rozhraní chatu. V současnosti je k dispozici pouze v demo přístupu a v pilotních prostředích. Některé ovládací prvky proto vypadají jinak než na některých stránkách této dokumentace – například klávesa Enter ve výchozím stavu vkládá zalomení řádku a odesíláte pomocí Ctrl+Enter (macOS: ⌘+Enter). Co se mění, popisuje stránka [Nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/).
:::

## Co je CompanyGPT?

CompanyGPT je Váš bezpečný asistent AI pro maximální produktivitu — postavený na známém rozhraní ve stylu ChatGPT a rozšířený o agenty, RAG (Retrieval Augmented Generation) a další addony. Úplný úvod najdete na stránce [Co je CompanyGPT?](/cs/intro/company-gpt/).

## Základní pojmy

### Chat a modely

Chatujete jako obvykle a podle případu použití a požadované rychlosti či kvality si můžete vybrat z různých modelů AI. Které modely jsou k dispozici a k čemu se hodí, se dozvíte na stránce [Výběr modelu](/cs/company-gpt/modellauswahl/).

### Prompty (šablony promptů)

Šablony promptů jsou uložené, opakovaně použitelné požadavky — nezávislé na modelu nebo agentovi. Hodí se zejména pro opakující se úlohy. Více se dozvíte v části [Prompty](/cs/company-gpt/prompts/).

### Agenti

Agenti jsou pokročilé systémy AI, které nejen odpovídají, ale umí také používat nástroje k získávání informací — například prohledávat Vaše dokumenty nebo web. Více se dozvíte v části [Agenti](/cs/company-gpt/agenten/).

## Znalosti a RAG ve Vašem demo účtu

[companyRAG](/cs/company-gpt/addons/companyrag/) zpřístupňuje velké objemy dokumentů pro sémantické vyhledávání a pro agenty — základní metoda se nazývá [RAG (Retrieval Augmented Generation)](/cs/prompt-engineering/prompt-techniken/rag/).

:::note
Ve svém demo účtu **nemůžete vytvářet vlastní sbírky** — o to se postaráme při nastavení my. Můžete však vytvářet vlastní **agenty**, kteří přistupují k existujícím sbírkám, nebo hned použít některého z níže uvedených předpřipravených ukázkových agentů.
:::

## Předpřipravení ukázkoví agenti

Pro Váš demo účet jsme připravili čtyři ukázkové agenty. Stačí kliknout na některý z odkazů níže a rovnou zahájíte nový chat s daným agentem. Agenty najdete také v [Agent Marketplace](/cs/company-gpt/agenten/#agent-marketplace) v postranním panelu, kde se jmenují **[DEMO] Wiki**, **[DEMO] AI Search Datensatz**, **[DEMO] AI Search (AI Topics)** a **Web Research Agent**.

:::tip
Ukázková data za agenty RAG (interní wiki, dotazy na datovou sadu, témata AI) slouží pouze pro ilustraci. Ve skutečném nasazení by tito agenti přistupovali k Vašim vlastním dokumentům, datovým sadám a interním obsahům. Agent pro webový průzkum naproti tomu vždy pracuje s aktuálním, skutečným obsahem z internetu.
:::

### Interní wiki

Odpovídá na otázky o interních směrnicích, procesech a znalostech — jako kolega, který zná Vaši firemní wiki nazpaměť.

**[→ Zahájit chat s agentem Interní wiki](https://companygpt.innfactory.ai/c/new?agent_id=agent_So5F8M3RZk7vyF_0mO8ai)**

Ukázkové prompty:

- „Jak podám žádost o dovolenou?“
- „Co upravuje naše dohoda o práci z domova?“
- „Na koho se mám obrátit s problémy s IT?“
- „Co stanoví naše směrnice o ochraně osobních údajů?“
- „Jak probíhá proces nástupu nových zaměstnanců?“

### Dotazy na datovou sadu

Odpovídá na cílené otázky ke strukturované datové sadě, místo aby jen shrnoval jednotlivé dokumenty.

**[→ Zahájit chat s agentem Dotazy na datovou sadu](https://companygpt.innfactory.ai/c/new?agent_id=agent_3C3ntNImkWEL7wpRiokGb)**

Ukázkové prompty:

- „Jakých 10 produktů má nejvyšší tržby?“
- „Kolik zákazníků máme na jednu prodejnu?“
- „Ukaž mi průměrnou slevu podle kategorie produktů.“
- „Porovnej rychlost doručení napříč prodejnami.“
- „Které produkty mají aktuálně nízké skladové zásoby?“

### Obecný agent RAG (témata AI)

Odpovídá na obecné otázky o tématech AI na základě indexované znalostní sbírky — skvělý způsob, jak si vyzkoušet samotný princip RAG.

**[→ Zahájit chat s agentem Témata AI](https://companygpt.innfactory.ai/c/new?agent_id=agent_ulS_lcjGwTAG2Ly3zTcgz)**

Ukázkové prompty:

- „Jaký je rozdíl mezi RAG a fine-tuningem?“
- „Vysvětli, co je embedding.“
- „Co je prompt engineering a proč je důležitý?“
- „Co znamená halucinace v souvislosti s modely AI?“

### Webový průzkum

Vyhledává na internetu aktuální informace a shrnuje výsledky s uvedením zdrojů — ideální pro průzkum aktuálních témat, firem nebo zpráv. Více o základním principu se dozvíte v části [Vyhledávání na webu a WebFetch](/cs/company-gpt/integrationen/websuche/).

**[→ Zahájit chat s agentem Webový průzkum](https://companygpt.innfactory.ai/c/new?agent_id=agent_X6vzStAf378z5NejY3VmK)**

Ukázkové prompty:

- „Jaký je nejnovější vývoj ohledně AI Act EU?“
- „Vyhledej nejnovější tiskové zprávy společnosti podle mého výběru.“
- „Co je nového v oblasti AI v souladu s GDPR?“
- „Porovnej aktuální ceny modelů AI u různých poskytovatelů cloudu.“

## Vytváření vlastních agentů

Jakmile si osvojíte základy, můžete vytvářet vlastní agenty, kteří přistupují k existujícím sbírkám. Návod najdete v části [Agenti](/cs/company-gpt/agenten/) a tipy pro psaní dobrých instrukcí v části [Prompt Engineering](/cs/prompt-engineering/uebersicht/).

## Máte otázky?

Váš demo účet obsahuje také agenta nápovědy (**CompanyGPT Hilfe**), který zná tuto dokumentaci a odpovídá na Vaše otázky ke CompanyGPT přímo v chatu — nejrychlejší cesta k odpovědi.

**[→ Zahájit chat s agentem nápovědy](https://companygpt.innfactory.ai/c/new?agent_id=agent_nGxgjeBKLv1vRTxrEAluy)**

Chcete-li jít více do hloubky, úplná dokumentace začíná na stránce [Co je CompanyGPT?](/cs/intro/company-gpt/).

## Vaše další kroky

- [ ] Položte agentovi Interní wiki svou první otázku
- [ ] Vyzkoušejte agenta Dotazy na datovou sadu
- [ ] Otestujte obecného agenta RAG na tématech AI
- [ ] Nechte agenta Webový průzkum prozkoumat aktuální téma
- [ ] Vytvořte vlastní šablonu promptu
- [ ] Vytvořte svého prvního vlastního agenta
- [ ] Máte otázky? Zeptejte se agenta nápovědy
