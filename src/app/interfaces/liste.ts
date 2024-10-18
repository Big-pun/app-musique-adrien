import { Chanson } from "./chanson";

export interface Liste {
    id?: number;
    titre: string;
    sousTitre?: string;
    image?: string;
    description?: string;
    type: string;
    verifie?: boolean;
    date: string;
    visible: boolean;
    nbSauvegardes: number;
    chansons: Chanson[];
}