---
title: Strukturování promptů
description: Úvod do funkcí CompanyGPT
---

Při vytváření složitých promptů má smysl rozdělit je do jasně rozpoznatelných oddílů. Systému AI i lidským uživatelům je tak zřejmé, které části promptu plní jakou funkci. Strukturované rozdělení pomáhá předcházet nejasnostem, zlepšuje sledovatelnost a obvykle vede k přesnějším a konzistentnějším výsledkům.

## Označování oddílů

Pro jasné ohraničení oddílů existují různé formáty. Obzvlášť se osvědčilo používání lomených závorek, podobně jako v XML nebo HTML. Každý oddíl je přitom označen otevírací a uzavírací značkou – například:

```
<Pokyn>
Shrň prosím následující text do tří vět.
</Pokyn>

<Formát_výstupu>
- Bod 1
- Bod 2
- Bod 3
</Formát_výstupu>

<Persona>
Jsi zkušený redaktor.
</Persona>

<Kontext>
Text pochází z aktuálního novinového článku.
</Kontext>

<Vstup>
Zde následuje text k analýze.
</Vstup>
```

Tento postup umožňuje AI obzvlášť snadno cíleně přiřadit různé informace, a dodat tak požadovaný výstup strukturovaně. Není však nezbytně nutné používat přesně tento formát. Lze použít jakýkoli jednoznačný princip strukturování, pokud jsou oddíly od sebe jasně odlišitelné.

### Alternativa: Použití nadpisů

K jasnému označení jednotlivých oddílů promptu se hodí i nadpisy v Markdownu:

```
# Pokyn
Shrň prosím text.

# Formát výstupu
Seznam s odrážkami

# Persona
Jsi odborník na marketing.

# Kontext
Obsah produktové brožury.
```
Nadpisy jsou užitečné zejména tehdy, když se prompty rozrůstají nebo když je třeba pokrýt více tematických rovin. Podporují přehlednost a srozumitelnost – pro AI i pro lidské autory promptů.

## Kdy jsou oddíly a nadpisy užitečné?

- **Krátké prompty**: Pokud se prompty skládají jen z jedné nebo dvou vět, další členění do oddílů obvykle není nutné.
- **Složitější prompty**: Jakmile se uvádí více kontextu, konkrétní pokyny, role osob nebo požadovaný formát výstupu, doporučuje se text rozčlenit do oddílů. Nadpisy nebo značky předcházejí nedorozuměním a pomáhají, aby byl prompt přehledný.
