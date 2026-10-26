---
title: Artefakty
description: Artefakty v CompanyGPT umožňují modelu AI vytvářet a spouštět kód, generovat diagramy a zobrazovat komponenty, s možnostmi pro shadcn/ui a vlastní prompty.
---

:::note[Nové rozhraní chatu]
Snímky obrazovky a popisky na této stránce ukazují [nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/). V současnosti je k dispozici v demo přístupu a v pilotních prostředích; v ostatních prostředích se popisky a kroky mohou ještě lišit.
:::

Artefakty umožňují modelu AI v CompanyGPT vytvářet kód a spouštět ho či zobrazovat. Lze tak například generovat diagramy, ale také generovat a zobrazovat komponenty kódu.

## Zapnutí artefaktů

V chatu zapnete artefakty pomocí ikony plus ve vstupním poli chatu (**Attach and tools**) volbou **Artifacts** v části **Tools**. Artefakty se pak zobrazí jako štítek ve vstupní liště; tam také zvolíte [režim](#režimy). U [agentů](/cs/company-gpt/agenten/#artefakty) přidejte **Artifacts** přes Tool Library a zvolte tam **Mode**.

Ve výchozím stavu se přidávají další speciální instrukce pro používání artefaktů, pokud nezvolíte režim **Custom prompt**.

![Chat se sloupcovým grafem jako artefaktem: vlevo chat se štítkem Artifacts v režimu Default; vpravo otevřený artefakt v náhledu](./artefakte-beispiel-en.png)

## Zobrazení a export artefaktů

Artefakty se otevírají v samostatné oblasti vedle chatu. Tam přepínáte mezi **Code** a **Preview**, kopírujete nebo stahujete obsah a pomocí **Enter full screen** otevřete artefakt v plné velikosti. Pomocí **Open in new window** jej otevřete v samostatném okně prohlížeče.

Diagramy Mermaid, které model AI vypíše v chatu, se vykreslují přímo jako diagram. Pomocí **Open as artifact** zobrazíte diagram v oblasti artefaktů. Přes **Export diagram** jej tam uložíte jako grafiku pomocí **Export as SVG** nebo **Export as PNG**.

## Režimy

V chatu zvolíte režim v seznamu **Attach and tools** vedle **Artifacts** nebo pomocí štítku **Artifacts** ve vstupní liště:

**Default**: Jsou zahrnuty výchozí instrukce pro používání artefaktů.

**shadcn/ui**: Navíc jsou zahrnuty instrukce pro používání komponent shadcn/ui. shadcn/ui je kolekce znovupoužitelných komponent vytvořených pomocí Radix UI a Tailwind CSS. Poznámka: Jde o rozsáhlé instrukce, které byste měli zvolit pouze tehdy, je-li pro Vás důležité informovat model AI o správných importech a komponentách. Další informace o těchto komponentách najdete na: https://ui.shadcn.com/

**Custom prompt**: Výchozí systémový prompt pro artefakty není zahrnut. V tomto režimu je nutné všechny instrukce pro generování artefaktů zadat ručně.

Příklad:

```
Pokud má být obsah prezentován jako artefakt, musí být použito následující formátování:

:::artifact{identifier=“unique-identifier” type="mime-type" title="Artifact Title"}
```

Zde obsah

```
:::

Pro atribut „type“ použijte jednu z následujících možností:
- „text/html“ pro obsah HTML
- „application/vnd.mermaid“ pro diagramy Mermaid
- „application/vnd.react“ pro komponenty React
- „image/svg+xml“ pro obrázky SVG
```
