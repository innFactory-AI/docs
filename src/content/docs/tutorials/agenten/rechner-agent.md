---
title: Rechner Agent
description: Rechner Agent
---

Damit wir mit einem Agenten korrekte Berechnungen durchführen können, gibt es im CompanyGPT das Tool `Rechner`. Das ist sinnvoll, denn LLMs sind nicht gerade bekannt dafür, korrekt rechnen zu können. Sie können allerdings sehr gut den Input für die Berechnungen liefern und mit den Ergebnisse weiterarbeiten. 

Wir erstellen also einen neuen Agenten, vergebenen einen `Namen` und geben einen einfachen Systemprompt ein: 

```markdown
Du bist ein Agent der immer einen Rechner nutzt
```

Als Werkzeug fügen wir den Rechner hinzu und speichern den Agenten.