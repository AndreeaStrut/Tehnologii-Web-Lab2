# Tehnologii-Web-Lab2

1. Ce este o resursă (resource) în aplicația ta?
O resursă reprezintă o entitate de informație identificabilă din campus. În acest proiect, resursele sunt: Biblioteca, Cantina și Sala de Evenimente. Fiecare are proprietăți precum nume, locație, program și tag-uri.
   
2. Dă exemplu de un URI și explică componentele acestuia.
Protocol (Scheme): https:// — Indică setul de reguli prin care browserul comunică cu serverul pentru a transfera date securizat.
Cale (Path): /Lab_2/pages/library.html — Indică locația exactă a fișierului în ierarhia de foldere a proiectului. Arată browserului că fișierul library.html se află în folderul pages, care la rândul lui este în Lab_2.
Fragment (Fragment Identifier): #orar-detaliat — Este partea care indică o secțiune specifică din interiorul documentului (ancora). Acesta îi spune browserului să facă scroll automat până la elementul cu id="orar-detaliat".
   
4. Care părți sunt statice și care sunt dinamice?
Statice: Structura HTML a paginilor din folderul pages, fișierul style.css și imaginile de fundal.
Dinamice: Grid-ul de pe pagina principală (index.html), care este generat automat de JavaScript prin citirea fișierului resources.json, precum și funcționalitățile de filtrare prin tag-uri.

5. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?
Aplicația este ambele. Este document-centric deoarece oferă pagini detaliate de prezentare (ca nite documente informative pentru bibliotecă sau cantină), dar este și interactive deoarece permite utilizatorului să filtreze resursele în timp real și să navigheze dinamic între categorii.
