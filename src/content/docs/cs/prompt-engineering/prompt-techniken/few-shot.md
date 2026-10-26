---
title: Few-Shot Prompting
description: Seznamte se s few-shot promptingem, metodou, jak pomocí několika málo příkladů vést velké jazykové modely (LLM) k přesnějším, konzistentnějším a oborově specifickým výsledkům.
---

## Popis
Při few-shot promptingu se v promptu uvádí několik příkladů vstupů a odpovídajících požadovaných výstupů. Cílem je pomocí těchto příkladů jazykovému modelu (LLM) ukázat, jaký druh odpovědi nebo transformace se u konkrétní úlohy očekává. Uvedené příklady slouží modelu jako vodítko a pomáhají snížit nejistotu a zlepšit kvalitu a konzistenci odpovědí.

Model využívá jak své interní znalosti, tak strukturu danou příklady. Díky tomu je few-shot prompting obzvlášť vhodný pro úlohy, které nejsou zcela samovysvětlující a vyžadují specifické formátování nebo definovanou hodnoticí škálu. V promptu se příklady vkládají do zvláštních bloků, například `<Examples> ... </Examples>` – tento vzor jasně ukazuje, které prvky slouží jako příklady a co se od modelu očekává.

## Výhody

- Umožňuje cíleně a flexibilně řídit chování modelu bez formulování explicitních pravidel.
- Obzvlášť užitečné u oborově specifických nebo kreativních úloh, kde se požadovaný výstup může lišit.
- Vhodné k přizpůsobení kvality odpovědí specifickým požadavkům (např. vlastní štítky pro analýzu sentimentu, specifický výstupní formát apod.).

## Typické příklady

### Analýza sentimentu s uživatelsky definovanými štítky

```
Text: „To se mi moc líbí!“, Sentiment: Pozitivní.

Text: „Ujde to.“, Sentiment: Neutrální.

Text: „To je hrozné.“, Sentiment: Negativní.

Text: „Obsluha byla příkladná.“, Sentiment:
```

### Extrakce entit

```
Vstup: „Společnost Apple Inc. založil Steve Jobs.“

Výstup: {'Společnost': 'Apple Inc.', 'Zakladatel': 'Steve Jobs'}

Vstup: „Společnost Microsoft spoluzaložil Bill Gates.“

Výstup:
```

### Přepis textu v určitém tónu/stylu

Například zadáním několika transformací z hovorového do formálního stylu, např.:

```
Vstup: „Stav se!“ → Výstup: „Srdečně Vás zvu, abyste se zastavil.“

Vstup: „Já ti to říkal!“ → Výstup: „Již jsem Vás na to upozorňoval.“

(Nyní následuje nový vstup ke zpracování.)
```

## Oblasti použití

Few-shot prompting se dobře hodí pro případy použití, u nichž požadovaná struktura výstupu, styl nebo konkrétní štítky nejsou obecně známé, ale musí se zadat individuálně. Patří sem například vlastní označování (labeling), proprietární datové formáty, specifické převody textu, kreativní úlohy a případy použití specifické pro zákazníka.
