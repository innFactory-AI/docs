---
title: Vyhledávání v souborech
description: Zjistěte, jak vyhledávání v souborech v CompanyGPT využívá RAG (Retrieval Augmented Generation) k obohacení odpovědí AI o konkrétní znalosti z interních dokumentů.
---

:::note[Nové rozhraní chatu]
Snímky obrazovky a popisky na této stránce ukazují [nové rozhraní chatu](/cs/company-gpt/neue-chat-oberflaeche/). Momentálně je k dispozici v demo přístupu a v pilotních prostředích; v ostatních prostředích se popisky a kroky mohou ještě lišit.
:::

Vyhledávání v souborech umožňuje prohledávat obsah souborů podle podobnosti s dotazem a obohacovat odpovědi o interní, specifické znalosti. Vyhledávání v souborech je k dispozici pouze pro jednotlivé uživatele.

V chatu vyhledávání v souborech aktivujete přes ikonu plus ve vstupu chatu (**Attach and tools**) volbou **File Search** v části **Tools**. Připojené soubory má pak v případě potřeby k dispozici; samostatný cíl nahrávání nemusíte volit. U [agenta](/cs/company-gpt/agenten/#vyhledávání-v-souborech) přidáváte soubory trvale v části **File Search**; agent tak může prohledávat i rozsáhlejší sbírky dokumentů.

:::note[K čemu se vyhledávání v souborech hodí?]
Nejlépe se hodí pro delší textový obsah, který není nutné zpracovat celý, ale ve kterém se mají vyhledat jednotlivé části relevantní pro dotaz a zahrnout do odpovědí.

Další informace zde: [Zpracování souborů](/cs/company-gpt/dateiverarbeitung/)
:::


Soubory se do kontextu nepřidávají celé; místo toho se pomocí vyhledávání podle podobnosti vrací pouze relevantní obsah. Tato funkce se nazývá [**RAG - Retrieval Augmented Generation**](/cs/prompt-engineering/prompt-techniken/rag) a rozšiřuje znalosti AI a agentů AI v CompanyGPT o oborové, interní nebo i důvěrné dokumenty. Obsah se pomocí modelu AI převádí na embeddingy (vektory). Při vyhledávání se na vektory převede i vyhledávací dotaz a jejich blízkost se vypočítá matematicky. Díky tomu lze **obsahovou blízkost** zachytit mnohem lépe než například fulltextovým vyhledáváním.
