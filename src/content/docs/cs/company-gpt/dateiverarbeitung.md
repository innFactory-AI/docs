---
title: Zpracování souborů
description: Zjistěte, jak CompanyGPT zpracovává nahrané soubory – obrázky a PDF předávané přímo modelu AI, dokumenty Office jako text, vyhledávání v souborech a Code Interpreter podle aktivních nástrojů a integraci SharePointu.
---

:::note[Nové rozhraní chatu]
Snímky obrazovky a popisky na této stránce ukazují [nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/). V současnosti je k dispozici v demo přístupu a v pilotních prostředích; v ostatních prostředích se popisky a kroky mohou ještě lišit.
:::

V CompanyGPT můžete ke svým zprávám připojovat soubory. CompanyGPT automaticky rozhodne, jak se soubor zpracuje, a to na základě typu souboru, zvoleného modelu AI a aktivních nástrojů. Při nahrávání již nemusíte volit cíl.

:::tip[Rychlý přehled]
- Obrázky a PDF: odesílají se přímo modelu AI, pokud tyto soubory dokáže zpracovat. Zohlední se tak i grafika, rozvržení a ručně psaný obsah.
- Dokumenty Office a textové soubory: převedou se na text a připojí ke zprávě, až 100 000 tokenů na soubor. Delší texty se zkrátí.
- Vyhledávání v souborech a Run Code: pokud je některý z těchto nástrojů aktivní, má k souborům v případě potřeby přístup i on.
:::

## Nahrávání souborů

Ve vstupním poli chatu klikněte na ikonu plus (**Attach and tools**), v části **Attach** zvolte **From Local Computer** a poté vyberte soubory. Pokud je ve vašem prostředí povolena [integrace SharePointu](#integrace-sharepointu), najdete tam také **From SharePoint**.

Standardní konfigurace má následující limity, které může vaše organizace upravit:

- až 50 souborů na zprávu
- až 100 MB na soubor

## Jak se soubory zpracovávají

### Obrázky a PDF

Obrázky a soubory PDF se odesílají modelu AI spolu s vaší zprávou. Model tak může obsah úplně přečíst a interpretovat, například analyzovat obrázky, zpracovat texty včetně grafiky nebo vyhodnotit ručně psané skeny a fotografie. Ve zprávě můžete zadat doplňující pokyny.

Pokud zvolený model nedokáže soubory PDF zpracovat přímo, CompanyGPT místo toho extrahuje text.

**Omezení**: Které informace a typy souborů lze zpracovat, určuje model AI. Navíc platí limity příslušného poskytovatele AI na jeden požadavek, například 32 MB nebo 100 stran PDF u modelů Claude a 20 MB pro celý požadavek včetně připojených souborů u modelů Gemini (Google Vertex AI). Velmi velké soubory PDF je proto nejlepší rozdělit.

### Dokumenty Office a textové soubory

Z dokumentů Office se načte text a připojí se ke zprávě. Zahrne se až 100 000 tokenů na soubor; delší texty se zkrátí. To se hodí, pokud chcete například shrnout texty nebo vytáhnout důležité body.

| Typ souboru | Zpracování |
| --- | --- |
| Word (`.docx`), PowerPoint (`.pptx`, `.potx`, `.ppt`), e-knihy (`.epub`) | Rozpoznávání textu (OCR) modelem AI, až 30 stran na dokument. U souborů Word převezme zpracování vestavěný parser (až 15 MB na soubor), pokud rozpoznávání textu selže nebo má dokument více než 30 stran. |
| Excel (`.xlsx`, `.xls`), OpenDocument (`.odt`, `.ods`) | Vestavěný parser, až 15 MB na soubor. Soubory Excel se přebírají list po listu jako tabulka (CSV). |
| Starší soubory Word (`.doc`, Word 97–2003) | se nenačítají. Takové soubory prosím nahrajte jako `.docx` nebo PDF. |
| Textové soubory (např. `.txt`, `.md`, `.csv`, `.json`) | se načítají přímo jako text |

V některých prostředích bez rozpoznávání textu načítá soubory Word (`.docx`) přímo vestavěný parser.

**Omezení**: Při převodu na text se obrázky v dokumentech nezohledňují.

### Vyhledávání v souborech a Run Code

Pokud je v chatu nebo v agentovi aktivní [vyhledávání v souborech](/cs/company-gpt/integrationen/dateisuche/) nebo [Run Code](/cs/company-gpt/code-interpreter/), poskytne CompanyGPT připojené soubory v případě potřeby i těmto nástrojům:

- **Vyhledávání v souborech** zaindexuje obsah a vyhledá v něm pasáže, které odpovídají otázce. Informace o tom, jak to funguje, najdete zde: [RAG - Retrieval Augmented Generation](/cs/prompt-engineering/prompt-techniken/rag/#pracovní-postup-rag-při-zpracování-souborů)
- **Run Code** dokáže soubory, například soubory CSV nebo Excel, analyzovat a převádět pomocí kódu.

**Omezení**: Dokumenty ve vyhledávání v souborech jsou přístupné pouze příslušnému uživateli. Aby byly dokumenty ve vyhledávání v souborech přístupné více uživatelům nebo celé organizaci, lze je integrovat prostřednictvím [agentů](/cs/company-gpt/agenten) nebo [companyRAG](/cs/company-gpt/addons/companyrag).

## Soubory v odpovědích

Pokud nástroj vytvoří soubor, například Code Interpreter nebo companyFILES, zobrazí se v odpovědi jako karta. Odtud můžete soubor stáhnout; u mnoha formátů je k dispozici i náhled.

## Spouštění kódu

Když je aktivní integrace [Run Code](/cs/company-gpt/code-interpreter/), umístí se připojené soubory také do sandboxu Code Interpreteru. Soubory Excel nebo CSV lze pak například přesně analyzovat, filtrovat a zobrazit v grafech, místo aby se jen načetly jako text.

## Soubory v rozšířeních

Rozšíření jako [companyFILES](/cs/company-gpt/addons/companyfiles/), companyTRANSCRIBE nebo companyTRANSLATE přistupují k připojeným souborům přímo podle jejich ID souboru: mohou upravit soubor Word, přepsat zvukový soubor nebo přeložit dokument, aniž by bylo nutné jej znovu nahrávat. Soubory vytvořené companyFILES se v chatu opět zobrazí jako přílohy.

:::note
Soubory z chatu se v [companyRAG](/cs/company-gpt/addons/companyrag) **neindexují**. Dokumenty, ve kterých má trvale vyhledávat mnoho uživatelů, patří do kolekce companyRAG.
:::

## Integrace SharePointu

Pomocí **From SharePoint** nemusíte soubory nahrávat ručně, ale můžete je přidat přímo ze všech umístění SharePointu, ke kterým máte přístup. Zpracují se stejně jako nahrané soubory.

:::note[Není k dispozici ve všech prostředích]
O tom, zda je tato funkce ve vašem prostředí k dispozici, rozhoduje vaše organizace. S dotazy se obraťte na svého administrátora.
:::
