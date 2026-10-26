---
title: Code Interpreter
description: S integrací „Run Code“ CompanyGPT píše a spouští kód v izolovaném sandboxu ve vaší vlastní infrastruktuře – pro analýzu dat, grafy a přesné výpočty.
---

:::note[Nové rozhraní chatu]
Snímky obrazovky a popisky na této stránce ukazují [nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/). To je v současné době k dispozici v demo přístupu a v pilotních prostředích; v ostatních prostředích se popisky a kroky mohou ještě lišit.
:::

Jazykové modely předpovídají text a nepočítají – u přesné matematiky, analýzy dat nebo tvorby grafů narážejí na své meze. S integrací **Run Code** (Code Interpreter) může CompanyGPT místo toho napsat kód, spustit ho v izolovaném sandboxu a zahrnout skutečný výsledek do své odpovědi. Spouštění probíhá výhradně ve vaší vlastní infrastruktuře; žádná data se nepřenášejí do externích služeb.

## Aktivace

Integraci zapnete přímo ve [vstupu chatu](/cs/company-gpt/chat/) pomocí ikony plus (**Attach and tools**) volbou **Run Code** v části **Tools**. Poté se zobrazí jako štítek ve vstupním panelu, platí pro daný chat a zůstane zapnutá, dokud ji opět nevypnete pomocí **×** na štítku. Lze ji také přiřadit [agentům](/cs/company-gpt/agenten/) jako schopnost přes Tool Library, takže agent může spouštět kód samostatně.

## Soubory

Soubory, které připojíte ke zprávě, není nutné pro Code Interpreter nahrávat zvlášť. Je-li **Run Code** aktivní, CompanyGPT připojené soubory automaticky zpřístupní Code Interpreteru, jakmile je potřebuje. U agenta můžete navíc přidat pevné soubory pro spouštění kódu. Další informace najdete v části [Zpracování souborů](/cs/company-gpt/dateiverarbeitung/).

Soubory vytvořené Code Interpreterem, například analyzovaný soubor Excel nebo graf, se v odpovědi zobrazí jako karta, ze které můžete soubor stáhnout. U mnoha formátů je tam k dispozici i náhled.

## Případy použití

- **Analýza dat**: Nahrané zdroje dat (např. soubory CSV, Excel nebo JSON) lze filtrovat, agregovat a transformovat. Výsledek je k dispozici jako výstup v chatu nebo jako soubor ke stažení.
- **Grafy a vizualizace**: Z dat lze generovat grafy (např. pomocí Matplotlib), které se zobrazují přímo v chatu.
- **Přesné výpočty**: Místo odhadu výsledku model napíše výpočet jako kód a vrátí skutečně vypočtený výsledek.
- **Převod formátů a testování kódu**: Nestrukturovaná data lze převést do strukturovaných formátů (např. JSON) a úryvky kódu lze přímo spustit a ověřit.

## Soubory v Code Interpreteru

- **Připojené soubory**: Je-li **Run Code** aktivní, jsou soubory připojené ke zprávě (např. CSV, Excel) pro kód k dispozici v pracovním adresáři `/mnt/data`.
- **Výsledné soubory**: Soubory, které kód vytvoří (např. graf jako PNG nebo vyčištěný soubor Excel), se zobrazí jako přílohy odpovědi a lze je stáhnout.
- **Šablony z companyFILES**: Pomocí nástroje `attach_template_to_chat` vloží [companyFILES](/cs/company-gpt/addons/companyfiles/) šablonu do chatu jako soubor. Od **další zprávy** ji kód může upravovat, například aby najednou změnil mnoho částí rozvržení Word nebo PowerPoint. To vyžaduje, aby companyFILES směl ukládat soubory přímo do chatu; to nastavují vaši administrátoři.
- **Skills s přibalenými soubory**: Pokud [skill](/cs/company-gpt/skills/) obsahuje vlastní soubory (např. návody v `references/` nebo skripty), jsou k dispozici pouze pro čtení v `/mnt/data/skills/<skill-name>/`. Hotové skills najdete v části [Návody ke skills](/cs/tutorials/skills/).

## Podporované jazyky

Code Interpreter spouští **Python**, **JavaScript/TypeScript** (Node.js a Bun) a **Bash**.

## Zabezpečení

- **Vlastní infrastruktura**: Spouštění kódu běží jako vyhrazená služba v clusteru společnosti – nepoužívá se žádná externí služba pro spouštění.
- **Izolovaný sandbox**: Každé spuštění probíhá ve vlastním uzavřeném sandboxu. Kód nemá přístup k firemní síti ani k internetu.
- **Dočasný sandbox**: Sandbox je k dispozici pouze po dobu spuštění. Soubory vytvořené Code Interpreterem ukládá CompanyGPT stejně jako ostatní soubory v chatu, takže si je můžete stáhnout i později přes kartu v odpovědi.

:::note[Omezení]
Doba běhu a velikost výstupu jednoho spuštění jsou omezené. Code Interpreter není vhodný pro dlouhotrvající nebo velmi paměťově náročné úlohy.
:::
