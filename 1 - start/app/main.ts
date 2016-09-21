import {SuperHero} from './superhero';

let wolverine = new SuperHero("Wolverine", "Healing Factor / Martial Arts / Adamantium Skeleton", "Logan");
let deadpool = new SuperHero("Deadpool", "Extreme Healing Factor / Crazy improvisation", "Wade Wilson");

document.getElementById('header1').textContent = deadpool.saveVictim(wolverine.name); 