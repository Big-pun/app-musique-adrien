import { Liste } from "../interfaces/liste";

export const LISTES: Liste[] = [
  {
    titre: 'Podcasts',
    type: 'Liste de lecture',
    sousTitre: "Les podcasts que j'écoute",
    chansons: [],
    date: '2023-01-01',
    visible: true,
    nbSauvegardes: 0,
  },
  {
    titre: 'Lucio Bukowsky',
    type: 'Artiste',
    sousTitre: "Les chansons de Lucio Bukowsky que j'écoute",
    chansons: [],
    date: '2024-01-01',
    visible: true,
    nbSauvegardes: 0,
  },
  {
    titre: '2001',
    type: 'Album',
    sousTitre: 'Best album of the year',
    chansons: [],
    date: '1991-16-11',
    visible: true,
    nbSauvegardes: 675,
  },
];
