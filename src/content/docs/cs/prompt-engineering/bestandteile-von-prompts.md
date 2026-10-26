---
title: Součásti promptů
description: Přehled nejdůležitějších prvků a struktur promptů v prompt engineeringu.
---

Dobře strukturovaný prompt se skládá z několika podstatných prvků, které ovlivňují kvalitu a přesnost odpovědi. Nejdůležitější součásti jsou vysvětleny níže a doplněny příklady.

:::tip[Základní principy]
Ne všechny součásti musí být v každém promptu. Každá součást má svůj účel a výsledek zpřesňuje určitým směrem, její význam se však liší podle konkrétního použití.

Každý prompt pro složitější úlohy by se mohl skládat alespoň z následujících součástí:
1. Instrukce
2. Kontext
3. Vstup
4. Výstupní formát
5. Persona
:::

## 1. Instrukce
Instrukce popisuje, co má jazykový model udělat nebo na co má odpovědět. Často je jádrem promptu.

**Příklad:**  
*Napiš báseň o létě.*



## 2. Kontext
Kontext poskytuje doplňující informace nebo pozadí, aby byla odpověď modelu cílenější.

**Příklad:**  
*Jsi účastník poetry slamu a chceš publikum nadchnout.*



## 3. Vstup
Vstupem jsou konkrétní data, otázky nebo text, ke kterým se má odpověď vztahovat.

**Příklad:**  
*Text: Slunce svítí, moře se třpytí.*



## 4. Výstupní formát
Výstupní formát popisuje, jak má odpověď vypadat (např. jako seznam, tabulka, souvislý text).

**Příklad:**  
*Vypiš odpověď jako tabulku se dvěma sloupci (Co se děje? Proč je to důležité?).*



## 5. Persona
Persona určuje perspektivu nebo roli, ze které má být odpověď podána (např. jako odborník, učitel, dítě).

**Příklad:**  
*Jsi profesor informatiky a vysvětluješ pojem „cloud computing“.*



## 6. Omezení
Omezení jsou požadavky, které odpověď omezují co do délky, stylu nebo obsahu.

**Příklad:**  
*Odpověz nejvýše třemi větami a nepoužívej odborné výrazy.*


## 7. Ukázkový postup (`Examples`)
Příklady uvedené na začátku promptu modelu ukazují, jak by odpověď mohla vypadat.

**Příklad:**  
*Příklad:  
Otázka: Co je AI?  
Odpověď: Umělá inteligence je schopnost strojů inteligentně řešit úlohy.*



## 8. Nástroje
Prompt někdy může obsahovat informace o externích nástrojích nebo funkcích, které se mají použít.

**Příklad:**  
*K vyhledání aktuálních dat použij Wikipedia API.*



## Složení účinného promptu

Typický prompt se může skládat z cílené kombinace výše uvedených prvků:

```text
Jsi environmentální vědec (persona). 
Vysvětli skleníkový efekt (instrukce) s ohledem na aktuální emise CO2 (kontext). 
Odpověz nejvýše pěti větami (omezení). 
Uveď odpověď jako číslovaný seznam (výstupní formát).
```



Každá součást přispívá k jasnosti a přesnosti v prompt engineeringu. Vědomým zapojením a kombinováním těchto prvků lze interakci s modely AI učinit přesnější a účinnější.
