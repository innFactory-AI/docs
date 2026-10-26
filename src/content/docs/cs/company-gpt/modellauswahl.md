---
title: Výběr modelu
description: Kdy použít který model AI? Tento přehled vám pomůže.
---

Které modely se ve vašem výběru modelů zobrazí, rozhoduje vaše organizace – ne každé prostředí nabízí všechny zde popsané modely. Ve většině prostředí je pro nové chaty předvybraným modelem **gpt-6-luna**.

### Orientační pravidlo:

- **Rychle a levně** → Luna / Mini / Nano / Flash / Haiku
- **Standardně a spolehlivě** → velké univerzální modely
- **Složité a kritické** → nejvýkonnější modely
- **Hosting v Německu / open source** → modely STACKIT v [CompanyGPT Sovereign](/cs/company-gpt/sovereign/) nebo, pokud jsou k dispozici, ve vašem prostředí

Modely označené jako zastaralé jsou uvedeny v části [Starší modely](#starší-modely), spolu s modelem, na který byste měli přejít.

:::note[Kde modely běží?]
V CompanyGPT běží modely od OpenAI, Google a Anthropic ve výchozím nastavení v datových centrech v EU (Azure OpenAI v datové zóně EU, Google Vertex AI v regionech EU). Jednotlivá prostředí nebo modely – zejména pro generování obrázků – se mohou lišit. Modely STACKIT běží v datových centrech v Německu. Podrobnosti pro vaše prostředí vám sdělí váš administrátor.
:::

---

## OpenAI

### Rodina GPT-6

V CompanyGPT je GPT-6 k dispozici ve dvou úrovních. Patří ke stejné generaci a liší se tím, kolik hloubky uvažování, rychlosti a nákladů dostanete: **Sol** (výkonnější úroveň) a **Luna** (nejrychlejší a nejúspornější). Úroveň Sol je k dispozici také v novější verzi **gpt-6.1-sol**. Úroveň volte podle složitosti úlohy, ne ze zvyku.

### gpt-6.1-sol

- **Pro:** náročné úlohy, u kterých chcete nejnovější verzi úrovně Sol
- **Kdy:** agentní programování, vícekrokové vývojové úlohy, složité analýzy a pracovní postupy
- **Proč:** aktualizovaná verze gpt-6-sol – stejná úroveň, novější vydání

### gpt-6-sol

- **Pro:** náročné úlohy se silnou inteligencí za přiměřenou cenu
- **Kdy:** agentní programování, vícekrokové vývojové úlohy, složité pracovní postupy
- **Proč:** výkonnější úroveň generace GPT-6 s pečlivou validací

### gpt-6-luna (výchozí model)

- **Pro:** rychlé odpovědi za minimální náklady
- **Kdy:** každodenní úlohy, aplikace s velkým objemem, automatizované pipeline
- **Proč:** nejúspornější a nejlehčí model rodiny GPT-6 – ve většině prostředí předvybraný pro nové chaty

### Rodina GPT-5.6

GPT-5.6 je k dispozici ve třech úrovních. Patří ke stejné generaci a liší se tím, kolik hloubky uvažování, rychlosti a nákladů dostanete: **Sol** (maximální výkon), **Terra** (vyvážená) a **Luna** (nejrychlejší a nejúspornější). Úroveň volte podle složitosti úlohy, ne ze zvyku.

### GPT-5.6 Sol

- **Pro:** vlajková úroveň s nejvyšším výkonem
- **Kdy:** složitá softwarová architektura, pokročilé programování, kybernetická bezpečnost, hluboké vícekrokové vědecké analýzy, náročná kreativní strategie, dohled nad jinými modely — kdykoli přesnost převáží nad náklady
- **Proč:** nejsilnější uvažování generace 5.6

### GPT-5.6 Terra

- **Pro:** vyvážená střední úroveň pro každodenní profesní a firemní pracovní postupy
- **Kdy:** standardní firemní aplikace, tvorba dokumentů, obecné asistenční pracovní postupy
- **Proč:** střední cesta mezi rychlostí a inteligencí

### GPT-5.6 Luna

- **Pro:** nejrychlejší a nákladově nejefektivnější úroveň
- **Kdy:** rutinní vysokofrekvenční automatizace, rychlé parsování, vysoce paralelní úlohy agentů a další objemná nebo na rychlost citlivá práce nižší složitosti
- **Proč:** nejnižší latence a náklady v generaci 5.6

### gpt-5.4

- **Pro:** náročné úlohy napříč mnoha tématy
- **Kdy:** programování, analýzy, práce s textem a plánování v každodenní práci
- **Proč:** silný univerzální model generace GPT-5; pro nejvyšší výkon zvolte GPT-5.6 Sol, gpt-6-sol nebo gpt-6.1-sol

### gpt-5.1

- **Pro:** hluboké uvažování s vysokou spolehlivostí
- **Kdy:** složité dokumenty, analýzy dat, pokročilá práce s textem
- **Proč:** silný výkon generace GPT-5 optimalizovaný pro praktické použití

### gpt-5-mini

- **Pro:** vysoká kvalita při vysoké rychlosti
- **Kdy:** každodenní programátorské úlohy, strukturovaná rešerše, logické iterace
- **Proč:** vynikající rovnováha mezi inteligencí GPT-5 a rychlým zpracováním

### gpt-5-nano

- **Pro:** ultrarychlé odpovědi a jednoduchá asistence
- **Kdy:** rychlé dotazy, jednoduché formátování, opravy textu
- **Proč:** mimořádně úsporný model rodiny GPT-5 s minimální latencí

:::note[Další modely GPT v jednotlivých prostředích]
Některá prostředí navíc nabízejí další varianty generace GPT-5, například **gpt-5.4-mini**, **gpt-5**, **gpt-5.2** nebo **gpt-5.2-codex** (specializovaný na programátorské úlohy), a také starší model pro uvažování **o3-mini**. Pro nové úlohy doporučujeme výše popsané modely; místo o3-mini například gpt-5-mini.
:::

### GPT Image 1.5

- **Pro:** generování a úpravy obrázků
- **Kdy:** když je potřeba vytvořit nebo upravit obrázky
- **Proč:** obrazový model OpenAI, zpracovávaný v datové zóně EU

### GPT Image 2.5

- **Pro:** generování a úpravy obrázků s novější generací obrazových modelů OpenAI
- **Kdy:** když je potřeba vytvořit nebo upravit obrázky a vaše prostředí používá GPT Image 2.5
- **Proč:** novější generace obrazových modelů OpenAI; zpracování probíhá globálně, nikoli v datové zóně EU

Obrázky vytváříte pomocí **OpenAI Image Tools**. Který obrazový model za nimi stojí, rozhoduje vaše prostředí – ve většině prostředí je to GPT Image 1.5, v některých GPT Image 2.5 nebo GPT Image 2. GPT Image 2 a GPT Image 2.5 běží mimo datovou zónu EU.

:::caution
Microsoft ukončí provoz GPT Image 1.5 v Azure 16. prosince 2026. Pro generování obrázků můžete místo toho použít [Nano Banana](#gemini-image-tools--nano-banana) nebo – pokud to vaše prostředí nabízí – GPT Image 2.5.
:::

---

## Google

Modely Gemini jsou k dispozici, pokud je ve vašem prostředí povolen Google. Modely generace Gemini 2.5 byly nahrazeny, viz [Starší modely](#starší-modely).

### Gemini 4 Argon

- **Pro:** náročné úlohy s velkým množstvím kontextu
- **Kdy:** rozsáhlé dokumenty a kódové báze (až 1M tokenů kontextu), složité analýzy a vícekrokové uvažování
- **Proč:** první model generace Gemini 4, zpracovávaný v regionu EU; zatím k dispozici jen v některých prostředích

### Gemini 3.8 Flash / Gemini 3.7 Flash / Gemini 3.5 Flash

- **Pro:** autonomní uvažování při vysoké rychlosti
- **Kdy:** složité pracovní postupy, hluboké analýzy, náročné programování
- **Proč:** rychlé modely Google s flexibilními úrovněmi uvažování; 3.8 Flash je nejnovější úroveň Flash

### Gemini 3.5 Flash-Lite / Gemini 3.1 Flash-Lite

- **Pro:** maximální rychlost a nákladová efektivita
- **Kdy:** rychlé doplňující dotazy, jednoduché hromadné úlohy, překlady v reálném čase
- **Proč:** extrémně krátká doba odezvy za velmi nízké náklady; 3.5 Flash-Lite je novější úroveň

### Gemini 3.1 Pro (preview)

- **Pro:** obzvláště náročné analýzy a složité uvažování
- **Kdy:** když modely Flash narážejí na své limity, například u velmi rozsáhlých nebo vnořených úloh
- **Proč:** výkonnější úroveň Pro od Google; zatím k dispozici jen v některých prostředích a jako preview, takže se jeho chování a dostupnost mohou ještě změnit

### Gemini Image Tools / Nano Banana

- **Pro:** analýza obrázků, generování obrázků, úpravy obrázků
- **Kdy:** generování obrázků z textu, úpravy obrázků pomocí promptů (obrázek + text) a kompozice více obrázků
- **Proč:** obrazové modely Google integrované do CompanyGPT; Nano Banana je zpracováván v regionu EU

V některých prostředích používají Gemini Image Tools výkonnější **Nano Banana Pro**. Ten je zpracováván globálně, nikoli v regionu EU.

---

## Anthropic

Modely Claude jsou k dispozici, pokud je ve vašem prostředí povolen Anthropic. Aktuální generací je **Claude 5.5** s úrovněmi Opus, Sonnet a Haiku; běží přes region EU služby Google Vertex AI. Modely Claude 4.x jsou zastaralé, viz [Starší modely](#starší-modely).

### Claude Opus 5.5

- **Pro:** nejnáročnější úlohy, kde má kvalita přednost před náklady
- **Kdy:** složité analýzy, rozsáhlé změny kódu, dlouhé vícekrokové agentní úlohy
- **Proč:** nejvýkonnější model Claude aktuální generace 5.5; nástupce Claude Opus 5 a modelů Opus 4.x

### Claude Sonnet 5.5

- **Pro:** programování, složité zpracování textu a náročné univerzální úlohy (doporučeno)
- **Kdy:** vývoj softwaru, refaktoring kódu, agenti, hluboké porozumění textu
- **Proč:** ideální střed řady – vysoký výkon pro každodenní práci za výrazně nižší cenu než Opus; nástupce Claude Sonnet 5 a Sonnet 4.6

### Claude Haiku 5.5

- **Pro:** velmi rychlé zpracování za velmi nízké náklady
- **Kdy:** filtrování velkých objemů dat, chatboti v uživatelském rozhraní, jednoduché až středně náročné úlohy ve velkém měřítku, dílčí úlohy agentů
- **Proč:** nejrychlejší a nejúspornější model generace 5.5; nástupce Claude Haiku 4.5

### Claude Opus 5 / Claude Sonnet 5 (předchozí generace)

- **Pro:** nejnáročnější úlohy (Opus 5) nebo programování a univerzální úlohy (Sonnet 5)
- **Kdy:** pokud vaše prostředí zatím nenabízí generaci 5.5
- **Proč:** předchozí generace Claude 5.5; jakmile bude k dispozici, přejděte na Claude Opus 5.5 nebo Claude Sonnet 5.5

:::note
Kterou generaci Claude vidíte, závisí na vašem prostředí: některá prostředí již nabízejí Claude 5.5, jiná stále Claude 5 nebo zastaralé modely 4.x. Některá prostředí navíc nabízejí další poskytovatele, například Mistral nebo Perplexity.
:::

---

## STACKIT

Tyto open-source modely běží v STACKIT Cloud v datových centrech v Německu a jsou obzvláště vhodné pro úlohy s vysokými nároky na datovou suverenitu a interní compliance. Jsou k dispozici v [CompanyGPT Sovereign](/cs/company-gpt/sovereign/) a jinak pouze v prostředích, kde je STACKIT povolen; přesná sada modelů se mezi prostředími liší. Vyhledávání v [companyRAG](/cs/company-gpt/addons/companyrag/) navíc v závislosti na prostředí používá vlastní embeddingové modely; ty nelze v chatu vybrat.

### google/gemma-4-31B-it

- **Pro:** všestranné instrukční úlohy s dobrou efektivitou
- **Kdy:** interní asistenti, znalostní práce, strukturovaná tvorba textů
- **Proč:** novější generace Gemma jako střední volba mezi malými rychlými a velkými OSS modely

### Qwen/Qwen3.8-27B

- **Pro:** všestranné textové úlohy a silné vícejazyčné porozumění
- **Kdy:** kreativní psaní, logické řešení problémů, přesné překlady
- **Proč:** novější generace Qwen s dobrou rovnováhou kompaktní velikosti a výkonu

### openai/gpt-oss-120b

- **Pro:** nejvyšší kvalita OSS pro složité textové úlohy
- **Kdy:** když je místo maximální rychlosti vyžadován špičkový výkon s interním hostingem
- **Proč:** velký open-source model pro silné analytické a jazykové výsledky

### Qwen/Qwen3-VL-235B-A22B-Instruct-FP8

- **Pro:** špičková multimodální analýza s porozuměním obrázkům i textu
- **Kdy:** vizuální analýza dokumentů, složité úlohy s obrázky a textem, náročná inference
- **Proč:** velmi výkonný VL model pro hlubší porozumění multimodálnímu obsahu

### cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic

- **Pro:** náročnější generování a uvažování v EU stacku
- **Kdy:** složitější firemní dotazy, delší odpovědi, vyšší míra detailu
- **Proč:** třída 70B poskytuje výrazně vyšší kvalitu než malé modely a zachovává flexibilitu OSS

### openai/gpt-oss-20b

- **Pro:** nenáročné open-source textové úlohy
- **Kdy:** nákladově citlivé interní pracovní postupy s kontrolovatelnou infrastrukturou
- **Proč:** kompaktní OSS přístup pro solidní kvalitu s nižšími nároky na zdroje

---

## Starší modely

Následující modely jsou zastaralé a nahrazují je novější generace. Dokud je vaše prostředí ještě nabízí, můžete je dále používat; pro nové chaty a agenty však zvolte u každého uvedený nástupnický model.

:::caution[Bude ukončeno]
Celá rodina GPT-4 (gpt-4.1, gpt-4.1-mini, gpt-4o, gpt-4o-mini) v blízké budoucnosti přestane být podporována a bude z CompanyGPT odstraněna; v některých prostředích již není k dispozici. Přejděte prosím na aktuální model: **gpt-6-luna**, **GPT-5.6 Terra** nebo **gpt-5-mini** jako náhradu za gpt-4.1 a gpt-4o a **GPT-5.6 Luna** nebo **gpt-5-nano** jako náhradu za gpt-4.1-mini a gpt-4o-mini.

Modely Claude 4.x (Claude Opus 4.5, 4.6, 4.7 a 4.8, Claude Sonnet 4.5 a 4.6, Claude Haiku 4.5) nahrazuje generace Claude 5.5: **Claude Opus 5.5** nahrazuje Opus 4.x, **Claude Sonnet 5.5** nahrazuje Sonnet 4.x, **Claude Haiku 5.5** nahrazuje Haiku 4.5.

Modely generace Gemini 2.5 (Gemini 2.5 Pro, 2.5 Flash a 2.5 Flash-Lite) a starší již v chatu nejsou k dispozici. Jejich nástupci jsou **Gemini 3.8 Flash** pro 2.5 Pro a 2.5 Flash a **Gemini 3.5 Flash-Lite** pro 2.5 Flash-Lite; kde je k dispozici, nahrazuje 2.5 Pro **Gemini 3.1 Pro**. Obrazového nástroje Nano Banana se to netýká.
:::

### gpt-4.1

- **Pro:** spolehlivé řešení problémů a standardní kontexty
- **Kdy:** optimalizace textu, rešerše, logická srovnání
- **Proč:** osvědčený, vyladěný tahoun pro náročné každodenní úlohy
- **Přejděte na:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4.1-mini

- **Pro:** rychlé zpracování za nízké náklady
- **Kdy:** strukturovaná tvorba textů, předtřídění dat, jednoduché konverzace
- **Proč:** kompaktní verze GPT-4.1, optimalizovaná pro efektivitu a rychlost
- **Přejděte na:** GPT-5.6 Luna / gpt-5-nano

### gpt-4o

- **Pro:** všestranná multimodalita a plynulá interakce
- **Kdy:** zpracování obrázků a řeči, kreativní návrhy, brainstorming
- **Proč:** zavedený vlajkový model pro rychlé multimediální úlohy
- **Přejděte na:** gpt-6-luna / GPT-5.6 Terra / gpt-5-mini

### gpt-4o-mini

- **Pro:** vysoká rychlost za minimální náklady
- **Kdy:** jednoduché chatovací asistenti, rychlé filtrování velkých objemů dat
- **Proč:** mimořádně levný lehký model se solidní základní inteligencí
- **Přejděte na:** GPT-5.6 Luna / gpt-5-nano

### Claude Opus 4.x (4.5, 4.6, 4.7, 4.8)

- **Pro:** nejnáročnější úlohy, kde má kvalita přednost před náklady
- **Kdy:** složité analýzy, rozsáhlé změny kódu, vícekrokové agentní úlohy
- **Proč:** nejvýkonnější modely Claude generace 4.x
- **Přejděte na:** Claude Opus 5.5

### Claude Sonnet 4.x (4.5, 4.6)

- **Pro:** programování, složité zpracování textu a náročné univerzální úlohy
- **Kdy:** vývoj softwaru, refaktoring kódu, hluboké porozumění textu
- **Proč:** dřívější ideální střed řady Claude mezi výkonem a náklady
- **Přejděte na:** Claude Sonnet 5.5

### Claude Haiku 4.5

- **Pro:** velmi rychlé zpracování s vysokou logickou přesností
- **Kdy:** filtrování velkých objemů dat, chatboti v uživatelském rozhraní, jednoduché až středně náročné úlohy ve velkém měřítku
- **Proč:** rychlý a nákladově efektivní (méně uvažování než Sonnet/Opus)
- **Přejděte na:** Claude Haiku 5.5

---

## Rychlá pomůcka pro rozhodování

- **„Nevím, který model se hodí“** → gpt-6-luna (výchozí model)
- **„Chci prostě velmi dobrou odpověď“** → gpt-6-sol / gpt-6.1-sol / GPT-5.6 Terra / Claude Sonnet 5.5
- **„Má to být co nejrychlejší a nejlevnější“** → gpt-6-luna / GPT-5.6 Luna / gpt-5-nano / Gemini 3.5 Flash-Lite / Claude Haiku 5.5
- **„Chci programovat / psát kód“** → gpt-6.1-sol / gpt-6-sol / GPT-5.6 Sol / Claude Sonnet 5.5
- **„Je to složité nebo mimořádně důležité“** → GPT-5.6 Sol / gpt-6.1-sol / Claude Opus 5.5
- **„Spouštím mnoho úloh paralelně“** → gpt-6-luna / GPT-5.6 Luna / Claude Haiku 5.5
- **„Hosting v Německu je povinný“** → modely STACKIT v [CompanyGPT Sovereign](/cs/company-gpt/sovereign/) nebo, pokud jsou k dispozici, ve vašem prostředí (např. Llama 3.3 70B Instruct)
- **„Potřebuji obrázky“** → OpenAI Image Tools (GPT Image 1.5 nebo GPT Image 2.5) / Gemini Image Tools (Nano Banana)
- **„Stále používám model GPT-4 nebo Claude 4.x“** → vhodný nástupnický model najdete v části [Starší modely](#starší-modely)
