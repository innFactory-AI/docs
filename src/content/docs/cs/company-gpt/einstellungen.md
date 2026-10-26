---
title: Nastavení
description: Přehled a konfigurace nastavení CompanyGPT, rozdělených do oblastí General, Chat, Speech, Data & Privacy, Account a About.
---

:::note[Nové rozhraní chatu]
Snímky obrazovky a popisky na této stránce zobrazují [nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/). V současnosti je k dispozici v ukázkovém přístupu a v pilotních prostředích; v ostatních prostředích se popisky a postupy mohou ještě lišit.
:::

Nastavení otevřete přes nabídku účtu vlevo dole položkou **Settings** nebo stisknutím `Ctrl` + `Shift` + `,` (macOS: `⌘` + `⇧` + `,`). Dialog nastavení je pomocí levé navigace rozdělen do oblastí **General**, **Chat**, **Speech**, **Data & Privacy**, **Account** a **About**. Pomocí pole **Search settings** najdete nastavení přímo.

Která nastavení se zobrazí, závisí na konfiguraci vašeho prostředí a na vašich oprávněních. V německém rozhraní se některé novější volby zatím zobrazují s anglickými popisky.

## Obecné

V oblasti **General** se nastavuje vzhled, rozvržení, oznámení a přístupnost:

![Nastavení, oblast General s volbami vzhledu](general-en.png)

### Vzhled

#### Theme

- **Light**
- **Dark**
- **System**

Kromě toho jsou k dispozici vysoce kontrastní varianty **High contrast light** a **High contrast dark**.

#### Language

Jazyk, ve kterém se zobrazuje uživatelské rozhraní.

#### Message Font Size

Vyberte velikost písma, ve které se mají zobrazovat zprávy chatu.

#### UI scale

Změní měřítko celého rozhraní. Aktuální velikost se zobrazuje v procentech; tlačítky minus a plus ji zmenšíte nebo zvětšíte.

#### Chat direction

- `ltr`: zleva doprava
- `rtl`: zprava doleva

#### Clock Format

Určuje, zda se časy zobrazují ve formátu **12-hour** nebo **24-hour**, nebo zda se řídí nastavením **System**.

#### Week Starts On

Určuje, zda týden začíná v pondělí (**Monday**), nebo v neděli (**Sunday**), případně zda se řídí nastavením **System**.

### Rozvržení

#### Maximize chat space

Podokno chatu se roztáhne na celou šířku.

#### Center Chat Input on Welcome Screen

Vstupní pole chatu je na úvodní obrazovce umístěno uprostřed, nebo uprostřed dole.

#### Scroll to the end button

Zobrazí v dolní části oblasti chatu tlačítko, kterým můžete rychle přejít na konec chatu.

#### Show chat beside the sidebar on mobile

Na mobilních zařízeních končí otevřený postranní panel kousek před okrajem, takže zůstane viditelný pruh konverzace. Klepnutím na tento pruh postranní panel zavřete.

#### Display chat title in tab

Zobrazí název otevřeného chatu v názvu karty prohlížeče.

### Oznámení

#### Show unread count in the tab title

Zobrazí počet chatů s nepřečtenými odpověďmi v názvu a ikoně karty prohlížeče.

#### Notify me when a reply arrives

Zobrazí oznámení na ploše, když přijde odpověď ve chvíli, kdy nejste v CompanyGPT. Při prvním zapnutí vás prohlížeč požádá o povolení. Když se na CompanyGPT právě díváte, oznámení se nezobrazují.

#### Play a sound for new replies

Přehraje krátký zvuk, když přijde odpověď ve chvíli, kdy nejste v CompanyGPT. Prohlížeče přehrávají zvuky až poté, co jste se stránkou interagovali.

### Přístupnost

#### Keep screen awake during response generation

Zabrání přechodu obrazovky do režimu spánku, zatímco se generuje odpověď.

## Chat

### Odesílání

#### Press Enter to send messages

Je-li zapnuto, k odeslání zpráv stačí `Enter`. Nové řádky lze přidat pomocí `Shift` + `Enter`. Je-li vypnuto, musíte zprávy odesílat pomocí `Ctrl` + `Enter` (macOS: `⌘` + `Enter`) a `Enter` pak přidá nový řádek. Ve výchozím nastavení je volba vypnutá. Pokud jste ji již nastavili sami, vaše volba zůstane zachována.

#### While generating, Enter will

Určuje, co udělá `Enter`, zatímco se odpověď ještě generuje:

- **Steer**: vaše zpráva se zahrne do probíhající odpovědi.
- **Interrupt**: probíhající odpověď se okamžitě zastaví. Dosud vygenerovaná část odpovědi zůstane zachována a odpověď pokračuje s vaší zprávou.
- **Queue**: vaše zpráva se odešle jako nová zpráva, jakmile aktuální odpověď skončí.

Tlačítko pro odeslání umožňuje volbu i pro jednotlivé zprávy, viz [Chat](/cs/company-gpt/chat/#zprávy-během-probíhající-odpovědi).

#### Save drafts locally

Je-li zapnuto, text a přílohy zadané do formuláře chatu se automaticky ukládají lokálně jako koncepty. Tyto koncepty jsou k dispozici i po opětovném načtení stránky nebo při přepnutí do jiné konverzace. Koncepty se ukládají lokálně v zařízení a po odeslání zprávy se smažou.

#### Resize images before upload

Je-li zapnuto, velké obrázky se před nahráním zmenší ve vašem prohlížeči. Tím se nahrávání urychlí. Obrázky, které jsou již v rámci limitů velikosti, se odešlou beze změny. Ve výchozím nastavení zapnuto.

#### Paste long text as a file

Je-li zapnuto, vložení velmi dlouhého textu jej přiloží jako textový soubor místo vyplnění pole zprávy. Platí limity [zpracování souborů](/cs/company-gpt/dateiverarbeitung/).

#### Save badges state

Je-li zapnuto, ukládá se stav odznaků chatu. To znamená, že při vytvoření nového chatu zůstanou odznaky ve stejném stavu jako v předchozím chatu. Pokud je tato volba vypnutá, odznaky se při každém vytvoření nového chatu vrátí do výchozího stavu.

### Příkazy

Příkazy jsou zkratky, které lze spustit ve vstupním poli zprávy a které umožňují rychlý přístup k modelům, promptům a více odpovědím.

#### @ command for switching models

Zapíná a vypíná příkaz `@` pro přepínání endpointů, modelů, předvoleb atd.

#### Command + for multiple responses

Zapíná a vypíná příkaz `+` pro přidání nastavení více odpovědí.

#### Command / for prompt template

Zapíná a vypíná příkaz `/` pro výběr [šablony promptu](/cs/company-gpt/prompts/) pomocí klávesnice.

### Zprávy

#### Render user messages as markdown

Řídí zobrazení zpráv uživatele jako Markdown. Markdown je jednoduchá syntaxe pro formátování textu. AI také odpovídá v Markdownu a obsah se podle toho zobrazuje (např. tučně). Toto nastavení určuje, zda se mají v tomto formátu zobrazovat i zprávy uživatele.

#### Collapse long user messages

Je-li zapnuto, vaše dlouhé zprávy se zobrazují sbalené jako náhled s možností zobrazit více. Vložený text nebo kód tak nezahltí konverzaci. Celý text zůstává k dispozici ke kopírování nebo vyhledávání. Ve výchozím nastavení zapnuto.

#### Display username in messages

Je-li zapnuto, nad každou odeslanou zprávou se zobrazí uživatelské jméno odesílatele. Je-li vypnuto, zobrazí se nad zprávami „You“.

#### Parsing LaTeX in messages (may affect performance)

Je-li zapnuto, kód LaTeX ve zprávách se vykresluje jako matematické rovnice. Vypnutí může zlepšit výkon, pokud vykreslování LaTeX nepotřebujete.

#### Open Thinking Dropdowns by Default

Když modely AI přemýšlejí, může se myšlenkový proces zobrazovat ve výchozím stavu, nebo být skrytý v rozbalovací nabídce a otevřít se podle potřeby.

#### Smooth streaming text (fade in new words)

Je-li zapnuto, nově streamovaná slova se v nejnovější odpovědi plynule objevují. Jde čistě o vizuální efekt, který výstup nezpomaluje. Automaticky se vypne, pokud je vaše zařízení nastaveno na omezení pohybu.

#### Copy messages as rich text

Je-li zapnuto, kopírování zprávy uloží do schránky i formátovanou verzi. Nadpisy, seznamy, tabulky a kód si zachovají formátování, když je vložíte do aplikací, které Markdown nepodporují, jako jsou Teams, Outlook nebo Word.

#### Auto-expand tool details

Automaticky rozbalí podrobné zobrazení volání nástrojů, takže provedené kroky jsou ihned viditelné.

### Konverzace

#### Switch to Chat History on new chat

Při vytvoření nového chatu se automaticky přepne do zobrazení historie chatů.

#### Auto-Scroll to latest message on chat open

Toto nastavení určuje, zda se mají existující chaty při otevření automaticky posunout dolů na nejnovější zprávu.

#### Enable switching Endpoints mid-conversation

Umožňuje uživateli změnit endpoint uprostřed konverzace. To může být užitečné, pokud například zjistíte, že se pro aktuální úlohu lépe hodí jiný model.

#### Temporary Chat by default

Je-li zapnuto, nové chaty se ve výchozím stavu spouštějí v [dočasném režimu](/cs/company-gpt/chat/#dočasný-chat). Dočasné chaty se neukládají do historie.

#### Use default fork option

Je-li zapnuto, [větvení](/cs/company-gpt/chat/#možnosti-zpráv) chatu vždy použije stejnou volbu. Zvolte ji níže v části **Default fork option**: **Visible messages only**, **Include related branches** nebo **Include all to/from here**.

#### Start fork from target message by default

Je-li zapnuto, větvení začíná od cílové zprávy a pokračuje k poslední zprávě konverzace, v souladu se zvoleným chováním.

### Prompty

#### Advanced prompts editor

Zapne správu verzí a řízení produkčních verzí pro [prompty](/cs/company-gpt/prompts/).

#### Always make new prompt versions production

Nové verze promptu se automaticky převezmou jako produkční verze, aniž by je bylo nutné ručně uvolnit.

#### Send prompts on select

Je-li zapnuto, prompt se při výběru rovnou odešle, místo aby se nejprve vložil do vstupního pole.

## Řeč

V CompanyGPT je k dispozici převod řeči na text (STT) i převod textu na řeč (TTS). Obojí lze používat prostřednictvím integrovaného modulu prohlížeče i prostřednictvím externí řečové služby (služba musí být ve vašem prostředí nastavena).

### Převod řeči na text

Lze použít k diktování vstupů promptu místo psaní.

- **Speech to Text**: zapíná nebo vypíná funkci.
- **Engine**: **External** (řečová služba vašeho prostředí) nebo **Browser** (modul aktuálního prohlížeče).
- **Language**: jazyk vstupu.
- **Auto transcribe audio**
- **Decibel sensitivity**
- **Auto send text** s **Delay (s)**

### Převod textu na řeč

Lze použít k předčítání zpráv.

- **Text to Speech**: zapíná nebo vypíná funkci.
- **Engine**: **External** (řečová služba vašeho prostředí) nebo **Browser** (modul aktuálního prohlížeče).
- **Voice**: dostupné hlasy zvoleného modulu.
- **Conversation Mode**: zapne automatický přepis zvuku. Převod řeči na text i převod textu na řeč musí být zapnuty.
- **Autoplay Latest Message**
- **Use cloud-based voices** (pouze s modulem **Browser**)
- **Audio Playback Rate**
- **Enable cache TTS**

## Data a soukromí

### Paměť

#### Reference saved memories

Umožní AI při odpovídání přistupovat k vašim uloženým [pamětem](/cs/company-gpt/erinnerungen/) a používat je.

### Vaše data

#### Import conversations

Pomocí **Import** naimportujete konverzace z exportovaného souboru JSON, například abyste je sdíleli s kolegy.

#### Shared chats

**Manage** otevře přehled chatů, které jste [sdíleli](/cs/company-gpt/chat/#sdílení) prostřednictvím odkazů. Odtud můžete otevřít zdrojový chat nebo smazat sdílené odkazy, i několik najednou.

#### Manage Files

**Manage** otevře přehled vašich nahraných souborů.

#### Archive all chats

Přesune všechny chaty do archivu. Zmizí ze seznamu chatů a zůstanou k dispozici v části **Archived chats**.

### Klíče API

#### Agent API Keys

Pokud smíte používat [Agents API](/cs/api/agents-api/), můžete zde vytvářet a odvolávat klíče API pro agenty.

#### Revoke all provider API keys

Pokud jste uložili vlastní klíče API pro poskytovatele AI, můžete je zde odvolat tlačítkem **Revoke**.

### Nebezpečná zóna

#### Delete TTS cache storage

Zvuk převodu textu na řeč se ukládá ve vašem prohlížeči, aby se při opětovném přehrání zprávy nemusel znovu vyžadovat. Zde můžete toto úložiště vymazat.

#### Delete all chats

Smaže všechny chaty.

:::danger[Pozor]
Smazání všech chatů nelze vrátit zpět.
:::

## Účet

### Profil

#### Profile Picture

Profilový obrázek změníte pomocí **Change picture**.

### Vyúčtování

:::note[Není k dispozici ve všech prostředích]
O tom, zda je tato funkce ve vašem prostředí k dispozici, rozhoduje vaše organizace. S dotazy se obraťte na svého administrátora.
:::

#### Balance

Přehled aktuálního zůstatku. Již využitý podíl se zobrazuje také v [indikátoru kontextu](/cs/company-gpt/chat/#indikátor-kontextu) v chatu.

#### Auto-Refill Settings

Zobrazuje, kdy byl zůstatek naposledy doplněn, výši doplnění, interval a čas dalšího automatického doplnění.

### Nebezpečná zóna

#### Delete account

Smaže uživatelský účet.

:::danger[Pozor]
Smazání uživatelského účtu nelze vrátit zpět.
:::

## O aplikaci

### Informace o verzi

Zobrazuje informace o nainstalované verzi: **Version**, **Commit**, **Branch** a **Built** (datum sestavení). Pomocí **Copy diagnostics** lze tyto údaje zkopírovat, aby podpora innFactory mohla identifikovat konkrétní sestavení.
