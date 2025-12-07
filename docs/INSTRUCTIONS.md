
# User Interface Events

Een oefening in ui-events waarin je experimenteert met muis, keyboard, touch én apparaat interactie en de afhandeling daarvan door middel van JavaScript.

## Doel van deze opdracht

In het college S05W2-01-User-Interface-Events wordt deze opdracht uitgelegd.

Op websites zijn veel verschillende vormen van interactie met gebruikers mogelijk. Deze worden *User Interface Events* (UI Events) genoemd. Als frontender wordt je geacht deze _events_ te beheersen. 


## Werkwijze

In onderstaande afbeelding zie je 20 verschillende links, aan tenminste 12 daarvan ga jij een gebruikersinteractie toevoegen.

![](screenshot.png)

In deze opdracht experimenteer je met verschillende UI events en gaandeweg leer je de mogelijkheden van de browser beter kennen. Zoek niet naar kant-en-klare oplossingen op Internet, maar werk ze zelf stap-voor-stap uit. Daar leer je het meest van.

Fork allereerst deze repository naar jouw eigen GitHub account, en Clone deze naar je eigen computer. Zet Issues aan, publiceer de repository alvast op GitHub Pages, en zorg dat je een live link bij About hebt staan.

De eerste interactie (met een _click_ event) hebben we al voor je voorgedaan: als je op het 2e linkje (“Design”) klikt, springt deze omhoog. Je gaat nu voor de overige links ook interacties bedenken, maken en bespreken met een mentor.

Omdat deze deeltaak uit maximaal 20 kleinere taken (er zijn namelijk nog 19 elementen!) bestaat, doorloop je voor elke nieuwe interactie die je gaat maken de _Development Lifecycle_. Je weet ondertussen dat je dit bij elke opdracht, issue of taak meerdere malen doet. Je gaat hieronder voor elke interactie een issue aanmaken en alle stappen doorlopen.


### Analyseren

Onderzoek kort welke interactie je nu gaat maken. De volgorde mag je zelf bepalen, afhankelijk van welke uitdaging je wilt. Ze zijn opgebouwd van simpel naar steeds moeilijker. Kies bijvoorbeeld “Laat de Development link shaken als ik erop dubbelklik”.

Maak een nieuw issue aan op jouw ui-events repository, en geef deze de titel van je UI event, het linkje dat deze triggert, en de interactie (bijvoorbeeld “Laat de Development link shaken als ik erop dubbelklik”). Link naar specifieke bronnen die je denkt nodig te hebben, en beschrijf kort hoe je dit probleem denkt op te gaan lossen.

#### Hints en verwachting per link

##### Basic events en animaties

1. Frontend: Click + scale animatie
2. Design: Click + jump animatie
3. &: Click + translate animatie
4. Development: Double click + shake animatie
5. Sprint 5: Focus + kleuren animatie
6. Fix: Mouseover + skew animatie
7. The: Mouseout + rotate animatie
8. Flow: Mousedown en mouseup + flip en terug
9. User: Keypress + kleur veranderen op basis van ingedrukte letter
10. Interface: Keydown + blaas de link op als een ballon, en laat leeglopen als je het toetsenbord loslaat
11. Events: Wheel of scroll + typografie wordt groter of kleiner, afhankelijk van hoe je scrollt
12. Interaction: Mousemove + radial gradient die de muis volgt

##### Advanced events en animaties

13. User flow: Mousemove + de overige elementen vallen naar beneden
14. Wireflow: Long press + linear gradient animatie
15. Feedback: Pas na 10 keer klikken verandert de button kleur
16. Feedforward: Escape toets indrukken op deze link + alle andere links worden grijs
17. Labels: Deviceorientation of devicemotion + shake alle links
18. States: Drag & drop + plaats deze link ergens anders
19. Navigation: Deze link wil heel graag geklikt worden
20. Code: Deze link wil niet geklikt worden

#### Bronnen

- [Microinteraction @ Dribbble](https://dribbble.com/search/microinteraction)
- [Mouse Events in Javascript @ Kirupa](https://www.kirupa.com/html5/mouse_events_in_javascript.htm)
- [Working with the Keyboard @ Kirupa](https://www.kirupa.com/html5/keyboard_events_in_javascript.htm)
- [Introduction to events @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [UI Events @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- [DeviceMotionEvent @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)


### Ontwerpen

Onderzoek hoe je de interactie zou kunnen maken met CSS en JavaScript. Als je helemaal zonder ideeën zit, kunnen onderstaande bronnen helpen.

Maak eerst een snelle schets van de interactie en feedback/feedforward die je de gebruiker wilt geven.

Maak een breakdownschets om te onderzoeken welke JS en CSS je nodig hebt.

Voeg je schetsen toe als comment op je issue, beschrijf de interactie die je wilt maken, en link naar bronnen die je gebruikt hebt of gaat gebruiken.

#### Bronnen

- [Interactions: thinking & sketching them. @ UX-Planet](https://uxplanet.org/interactions-thinking-sketching-them-f3d4c1d11149)
- [How to Apply Disney’s 12 Principles of Animation to UI Design @ interaction-design.org](https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design)


### Bouwen

Implementeer de interactie door `main.js` en `style.css` aan te vullen met jouw code. Denk telkens na over nieuwe namen voor CSS classes en variabelen in JS, zodat je eerder gemaakte code niet breekt!

Tip: Gebruik in JavaScript regelmatig `console.log()` om te controleren of alles werkt zoals je verwacht.

💪 Wat meer uitdaging nodig nadat je keyframe animaties hebt uitgespeeld? Kijk ook eens of je bijvoorbeeld een geluid af kunt spelen, de browser fullscreen kunt krijgen, of de pagina kunt delen. Of een View Transition af kunt vuren (meer hierover dinsdag bij de JS challenge).

#### Bronnen

- [Keyframe animaties @ MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [Animations @ web.dev](https://web.dev/learn/css/animations)
- Video: [… if you only know one thing about JavaScript … @ CSS-Tricks](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
- Guide: [Mouse Events in Javascript @ Kirupa](https://www.kirupa.com/html5/mouse_events_in_javascript.htm)
- Guide: [Working with the Keyboard @ Kirupa](https://www.kirupa.com/html5/keyboard_events_in_javascript.htm)
- Guide: [Introduction to events @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- Reference: [querySelector @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- Reference: [classList @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 
- Reference: [UI Events @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- Reference: [DeviceMotionEvent @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent)


### Integreren

Commit jouw code met de interactie die je zojuist geïmplementeerd hebt, en noem in je commit message je interactie en het issue nummer waar je aan werkt (bijvoorbeeld “Bibberen als ik dubbelklik (#1)”.

Push daarna je code naar GitHub.


### Testen

Test in een browser of de versie die je net online gezet hebt ook via GitHub Pages werkt.

Open jouw repository via de directe link en check of alles werkt.

Laat jouw interactie ook testen door een klasgenoot en een mentor, en laat ze allebei feedback geven op jouw issue.

Schrijf als reactie op je issue heel kort op wat je opviel bij het testen.

Sluit daarna het issue, en ga door met de volgende interactie (door opnieuw te Analyseren).


## Definition of done

Deze opdracht is done als:

- [ ] Je hebt de 12 basis interacties stap voor stap voltooid, en je voortgang en breakdown schetsen zijn in issues opgenomen.
- [ ] Optioneel: Je hebt enkele of alle advanced interacties stap voor stap voltooid, en je voortgang en breakdown schetsen zijn in issues opgenomen.
