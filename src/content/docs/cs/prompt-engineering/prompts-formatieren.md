---
title: Formátování promptů
description: Naučte se pomocí Markdownu přesně formátovat prompty pro systémy AI, jako je CompanyGPT. Optimalizujte svou komunikaci pomocí nadpisů, seznamů, tabulek a odstavců pro strukturované a jasné instrukce.
---

Správné formátování promptů hraje klíčovou roli v tom, aby systémy AI dokázaly zpracovávat složité úlohy strukturovaněji, přehledněji a přesněji. Jasná struktura usnadňuje AI pochopení obsahu a formátované prompty jsou srozumitelnější i pro lidské uživatele.

## Důležitá syntaxe Markdownu pro formátování promptů

Aby byly prompty přehledné, doporučujeme používat základní prvky Markdownu ([Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)).

### Nadpisy

Pro členění do tematických oblastí.
```
# První nadpis

## Druhý nadpis

### Třetí nadpis
```

### Tučné písmo, kurzíva

Pro zvýraznění důležitých slov nebo instrukcí.
- Tučné písmo (`**Text**`)
- Kurzíva (`*kurzíva*`)
- Tučné písmo + kurzíva (`***tučněakurzívou***`)

### Číslované seznamy

```
1. Bod 1
2. Bod 2
3. Bod 3
    3.1 Bod 3.1
```

### Nečíslované seznamy

```
- Zde text
- I zde text
- Zde další text
    - A také zde text
```

### Tabulky

Důležité:
- `|` na začátku a na konci
- alespoň 3× (`---`) pro oddělení řádku záhlaví
- stejný počet buněk ve všech řádcích

```
| Text záhlaví 1 | Text záhlaví 2 | Text záhlaví 3 |
| --- | --- | --- |
| Hodnota1 řádek 1 | Hodnota2 řádek 1 | Hodnota3 řádek 1 |
| Hodnota1 řádek 2 | Hodnota2 řádek 2 | Hodnota3 řádek 2 |
| Hodnota1 řádek 3 | Hodnota2 řádek 3 | Hodnota3 řádek 3 |
```

### Odstavce

Pro jasné oddělení obsahu používejte prázdné řádky.

```
Vysvětli mi následující téma: AI

Odpověz tak, jako by mi bylo 12 let.
```

### Příklad
```
# Vytvoř shrnutí

Shrň prosím následující text do **tří odrážek**:

- Zaměř se na nejdůležitější sdělení
- Používej **věcný jazyk**
- Vyhýbej se opakování

**Text:**
> Zde je text, který se má analyzovat.
