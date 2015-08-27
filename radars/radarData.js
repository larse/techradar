// This is the title for your window tab, and your Radar
document.title = "Mesan";


// This is the concentic circles that want on your radar
var radar_arcs = [
  {'r': 100, 'name': 'Bruk'}
  , {'r': 200, 'name': 'Vurder'}
  , {'r': 300, 'name': 'Tenk på'}
  , {'r': 400, 'name': 'Hold'}
];

// This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
  {
    "quadrant": "Teknikk og prosess",
    "left": 45,
    "top": 18,
    "color": "#8FA227",
    "items": [
      {name: "Prosjektveiviseren", pc: {r: 30, t: 120}, movement: "c"},
      {name: "PRINCE2", pc: {r: 30, t: 140}, movement: "c"},
      {name: "Integrasjonstester foran unittester", pc: {r: 80, t: 120}, movement: "c"},

      {name: "Kontinuerlige leveranser", pc: {r: 100, t: 110}, movement: "c"},
      {name: "Polyglot programmering", pc: {r: 220, t: 170}, movement: "c"},
      {name: "Smidig", pc: {r: 50, t: 150}, movement: "c"},
      {name: "Kanban", pc: {r: 170, t: 95}, movement: "c"},
      {name: "Scrum", pc: {r: 380, t: 100}, movement: "c"},

      {name: "Property-basert testing", pc: {r: 280, t: 125}, movement: "c"},
      {name: "Eget devops team", pc: {r: 350, t: 160}, movement: "c"},
      {name: "Produkt foran prosjekt", pc: {r: 150, t: 120}, movement: "c"},

      {name: "Felles UI-komponenter", pc: {r: 120, t: 160}, movement: "c"},
      {name: "Felles StyleGuide", pc: {r: 120, t: 170}, movement: "c"},

      {name: '"Minst mulig Prosess"', pc: {r: 220, t: 130}, movement: "c"},

      {name: "Pull Requests", pc: {r: 210, t: 150}, movement: "c"},
      {name: "Koordinerte releases", pc: {r: 350, t: 130}, movement: "c"}
    ]
  },
  {
    "quadrant": "Verktøy",
    "left": w - 200 + 30,
    "top": 18,
    "color": "#587486",
    "items": [
      {name: "Docker", pc: {r: 50, t: 19}, movement: "c"},
      {name: "Strukturert logging (ELK)", pc: {r: 210, t: 66}, movement: "c"},
      {name: "Swagger", pc: {r: 110, t: 80}, movement: "c"},
      {name: "apiary", pc: {r: 150, t: 82}, movement: "c"},
      {name: "miredot", pc: {r: 170, t: 84}, movement: "c"},

      {name: "Java EE", pc: {r: 380, t: 70}, movement: "c"},
      {name: "Spring", pc: {r: 350, t: 73}, movement: "c"},
      {name: "JPA/ORM", pc: {r: 320, t: 74}, movement: "c"},
      {name: "Java 8", pc: {r: 20, t: 78}, movement: "c"},
      {name: "Babel (ES6)", pc: {r: 160, t: 51}, movement: "c"},
      {name: "Webpack", pc: {r: 130, t: 45}, movement: "c"},
      {name: "React.js", pc: {r: 150, t: 41}, movement: "c"},

      {name: "AngularJS - vurder bort", pc: {r: 270, t: 72}, movement: "c"},
      {name: "Akka", pc: {r: 200, t: 20}, movement: "c"},

      {name: "Datomic", pc: {r: 220, t: 50}, movement: "c"},
      {name: "NoSQL", pc: {r: 280, t: 56}, movement: "c"},
      {name: "EventStore", pc: {r: 220, t: 45}, movement: "c"},

      {name: "Swift", pc: {r: 40, t: 76}, movement: "c"},
      {name: "Objective-C", pc: {r: 320, t: 56}, movement: "c"},
      {name: "CoreCLR og CoreFX", pc: {r: 270, t: 5}, movement: "c"},

      {name: "AssertJ", pc: {r: 80, t: 5}, movement: "c"},

      {name: "Gradle", pc: {r: 120, t: 5}, movement: "c"},
      {name: "Scala", pc: {r: 200, t: 15}, movement: "c"},
      {name: "Clojure", pc: {r: 230, t: 5}, movement: "c"},
      {name: "F#", pc: {r: 250, t: 5}, movement: "c"},
      {name: "Java 7 og tidligere", pc: {r: 330, t: 5}, movement: "c"},

      {name: "Flyway", pc: {r: 230, t: 25}, movement: "c"},
      {name: "Liquibase", pc: {r: 230, t: 18}, movement: "c"}
    ]
  },
  {
    "quadrant": "Arkitektur",
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#DC6F1D",
    "items": [
      {name: "Funksjonell", pc: {r: 130, t: 260}, movement: "c"},
      {name: "Reaktiv", pc: {r: 190, t: 260}, movement: "c"},
      {name: "Event-driven", pc: {r: 290, t: 265}, movement: "c"},
      {name: "Mikrotjenester", pc: {r: 30, t: 250}, movement: "c"},
      {name: "Containerization", pc: {r: 240, t: 268}, movement: "c"},
      {name: "Tjenesteorientering", pc: {r: 35, t: 220}, movement: "c"},
      {name: "Event sourcing & CQRS", pc: {r: 190, t: 265}, movement: "c"},
      {name: "Domain Driven Architecture", pc: {r: 220, t: 200}, movement: "c"},

      {name: "Immutability (også i JS)", pc: {r: 120, t: 240}, movement: "c"},
      {name: "Flux", pc: {r: 90, t: 245}, movement: "c"},

      {name: "REST uten PUT", pc: {r: 90, t: 190}, movement: "c"},
      {name: "REST nivå 3", pc: {r: 220, t: 215}, movement: "c"},

      {name: "Applikasjonsservere", pc: {r: 340, t: 255}, movement: "c"},
      {name: "JVM som plattform", pc: {r: 220, t: 255}, movement: "c"},

      {name: "Private PaaS", pc: {r: 220, t: 245}, movement: "c"},
      {name: "Mesos / Marathon", pc: {r: 220, t: 235}, movement: "c"},
      {name: "Kubernetes", pc: {r: 190, t: 250}, movement: "c"}
    ]
  },
  {
    "quadrant": "4.Kvadrant",
    "color": "#B70062",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
      {name: "Skytjenester", pc: {r: 60, t: 310}, movement: "c"},
      {name: "Cloud Hosting", pc: {r: 60, t: 278}, movement: "c"},

      {name: "BI/BigData/dataanalyse", pc: {r: 150, t: 298}, movement: "c"},
      {name: "UX-tjenester", pc: {r: 30, t: 345}, movement: "c"},

      {name: "Semantisk web, RDF og triplestores", pc: {r: 210, t: 300}, movement: "c"},
      {name: "TOTP to-faktor autentisering", pc: {r: 290, t: 320}, movement: "c"},
      {name: '"Sikkerhet"', pc: {r: 120, t: 275}, movement: "c"},

      {name: "Citrix/RemoteDesktop for utvikling", pc: {r: 385, t: 330}, movement: "c"},

      {name: "Mean-time-to-recovery", pc: {r: 180, t: 310}, movement: "c"},
      {name: "Clean Code", pc: {r: 250, t: 338}, movement: "c"},
      {name: "Coding architects", pc: {r: 110, t: 330}, movement: "c"},
      {name: "Kodeprinsipper", pc: {r: 50, t: 298}, movement: "c"},
      {name: "Grafdatabaser", pc: {r: 260, t: 330}, movement: "c"},
      {name: "Build Pipelines", pc: {r: 290, t: 290}, movement: "c"}
    ]
  }
];
