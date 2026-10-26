---
title: Paměti
description: Jak si CompanyGPT pamatuje fakta, preference a podrobnosti o projektech napříč jednotlivými chaty – automaticky nebo ručně.
---

Pokud jsou ve vašem prostředí paměti aktivní a máte zapnuté [odkazování na uložené paměti](/cs/company-gpt/einstellungen/#reference-saved-memories), může si CompanyGPT pamatovat fakta, preference a podrobnosti o projektech napříč jednotlivými konverzacemi. Vaše interakce jsou tak nejen osobnější a relevantnější, ale také výrazně efektivnější.

Paměti lze vytvářet dvěma způsoby: automaticky a ručně.

## Jak se paměti ukládají

Každá paměť se ukládá jako dvojice klíč–hodnota: klíč je klíčové slovo, hodnota je odpovídající informace. Automatické ukládání přiřazuje informace k osmi pevným klíčům:

| Klíč | Obsah |
| --- | --- |
| `user_profile` | Kdo jste: jméno, role, tým, zázemí |
| `company_context` | Čím se vaše organizace zabývá: produkty, služby, partneři, používané technologie, struktura |
| `rules_and_preferences` | Jak má CompanyGPT komunikovat a pracovat: tón, formát, jazyk, pevné požadavky |
| `active_work` | Na čem právě pracujete: projekty, cíle, termíny, otevřená rozhodnutí |
| `reference_data` | Kde co najdete: odkazy, dokumenty, nástroje, opakující se šablony |
| `glossary` | Firemní termíny, zkratky a interní názvy |
| `decisions` | Přijatá rozhodnutí s jejich odůvodněním |
| `corrections` | Vaše výslovné opravy, dokud nebudou zapracovány do příslušného klíče |

Ve standardní konfiguraci je pro vaše osobní paměti k dispozici až 12 000 tokenů; v některých prostředích se limit může lišit. [Agenti](#paměti-agentů) s vlastními pamětmi mají každý samostatnou kvótu. Procento v oblasti **Memories** v postranním panelu ukazuje, jak velká část vaší osobní kvóty je využita. Po najetí myší uvidíte přesný počet tokenů. Jakmile je limit dosažen, nelze v dané oblasti vytvářet další paměti.

## Automatické ukládání

Pokud máte tuto funkci zapnutou, CompanyGPT na pozadí analyzuje nejnovější zprávy vašich chatů a ukládá informace, které budou užitečné i později. Existující záznamy se aktualizují, místo aby se duplikovaly. Záznamy se ukládají ve vašem jazyce a s datem.

Automatické ukládání má pokyn neukládat jednorázové dotazy, spekulace, přihlašovací údaje, jako jsou hesla nebo klíče API, ani citlivé osobní údaje.

## Ruční ukládání

CompanyGPT můžete přímo požádat, aby si něco zapamatoval. To je užitečné zejména u faktů, které chcete uložit natrvalo.

### V chatu

Jednoduše zadejte pokyn, například:

```text
„Zapamatuj si, že jsem projektový manažer projektu ‚Phoenix‘.“
„Zapamatuj si: Marketingový rozpočet je 20 000 €.“
„Ulož si tuto informaci: Mým hlavním kontaktem u zákazníka X je Jan Novák.“
```

Pokud je ve vašem prostředí v nabídce **Tools** vstupního pole k dispozici volba **Memory** a je zapnutá, může model během chatu paměti také sám ukládat nebo mazat.

### Přes postranní panel

V levém postranním panelu najdete oblast **Memories**. Tam vidíte všechny uložené paměti, můžete je prohledávat pomocí **Filter memories...**, upravovat nebo mazat.

Ikonou plus (**Create Memory**) přidáte novou paměť. **Key** smí obsahovat pouze malá písmena a podtržítka; **Value** je volný text.

**Příklad**:

- Klíč: `active_work`
- Hodnota: `Project Phoenix | Project lead: [Your Name]`

Každý klíč může existovat pouze jednou. Pokud klíč již existuje, doplňte existující záznam pomocí **Edit**. Možné jsou i vlastní klíče; automatické ukládání však záznamy pod vlastními klíči neudržuje.

## Zapnutí a vypnutí pamětí

Pokud to vaše prostředí umožňuje, pomocí **Use memory** v oblasti **Memories** nebo volby [Reference saved memories](/cs/company-gpt/einstellungen/#reference-saved-memories) v nastavení určíte, zda CompanyGPT zahrnuje vaše paměti do svých odpovědí.

## Paměti agentů

[Agenti](/cs/company-gpt/agenten/) mohou také ukládat paměti, v závislosti na nastavení agenta i odděleně od vašich osobních pamětí. Pokud takové paměti existují, filtrujte oblast **Memories** podle **All memories**, **Personal** nebo konkrétního agenta.
