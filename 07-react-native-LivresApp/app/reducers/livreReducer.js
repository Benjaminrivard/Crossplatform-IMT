import uuidV4 from "uuid/v4";

const etatInitial = {
  livres: [{ nom: "Livre 1", auteur: "Auteur 1", id: uuidV4() }]
};

import { AJOUTER_LIVRE, SUPPRIMER_LIVRE } from "../actions";

const livreReducer = (etat = etatInitial, action) => {
  switch (action.type) {
    case AJOUTER_LIVRE:
      const { livre: nouveauLivre } = action;

      nouveauLivre.id = uuidV4();
      return {
        livres: [...etat.livres, nouveauLivre]
      };
    case SUPPRIMER_LIVRE: 
      const { id } = action;
      return {
        livres : etat.livres.filter(livre => livre.id != id)
      };
    default:
      return etat;
  }
};
export default livreReducer;
