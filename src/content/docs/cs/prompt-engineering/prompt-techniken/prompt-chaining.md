---
title: Řetězení promptů
description: Řetězení promptů (prompt chaining) je technika, která rozkládá složité úlohy pro LLM na postupné kroky, a zlepšuje tak přesnost, ovladatelnost a dohledatelnost.
---


## Popis

Řetězení promptů (prompt chaining) označuje techniku, při které se jazykovému modelu (LLM) nepředkládá jediná složitá instrukce, ale pracovní postup se rozdělí do několika po sobě jdoucích kroků. Přestože LLM velmi dobře plní jednotlivé instrukce, přesnost často klesá, když se v promptu spojí příliš mnoho instrukcí nebo složitých úloh. Aby se tomuto problému předešlo, instrukce se rozloží na logické dílčí úlohy a zpracovávají se jedna po druhé. Každý krok staví na výsledku předchozího, čímž vzniká řetězec promptů a odpovědí.

Řetězení promptů umožňuje modelu pracovat systematičtěji, omezit zdroje chyb a spolehlivě a srozumitelně řešit i složité úlohy. Mezivýsledky jednotlivých dílčích úloh se výslovně zaznamenávají a v dalším kroku cíleně zpracovávají.

## Výhody

- Složité úlohy se stávají zvládnutelnými díky rozložení na jednoduché, postupné kroky.
- Výsledky jednotlivých dílčích kroků lze ručně zkontrolovat nebo upravit, což zvyšuje kontrolu.
-   Hrozí menší riziko nedorozumění a chyb ze strany modelu, protože úlohy jsou jasně strukturované a oddělené.

## Typické příklady

### Tvorba obsahu (např. článků na blog)

```
Prompt 1: „Vymysli 5 názvů blogových článků o AI ve zdravotnictví.“
Prompt 2: (Uživatel vybere název) „Navrhni osnovu blogového článku s názvem ‚[vybraný název]‘ a rozděl ji do 3 hlavních částí.“
Prompt 3: „Napiš úvod k zadané osnově.“
Prompt 4: „Rozpracuj část 1 z osnovy...“ atd.
```

### Analýza/vyhodnocení dat

```
Prompt 1: „Vyber z tohoto dokumentu nejdůležitější entity.“
Prompt 2: „Shrň vztah mezi těmito entitami.“
Prompt 3: „Vytvoř na základě shrnutí zprávu.“
```

## Oblasti použití

Řetězení promptů je vhodné zejména tehdy, když jsou úlohy příliš rozsáhlé nebo příliš složité na to, aby je bylo možné spolehlivě zpracovat jediným promptem. Tento přístup je ideální pro zpracování surových dat, automatizované obsahové pipeline, analytické pracovní postupy a jakékoli postupné procesy, které vyžadují vysokou míru přesnosti nebo dohledatelnosti.
