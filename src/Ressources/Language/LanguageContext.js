import React from "react";

import en from '../JSON/contenten';
import fr from '../JSON/contentfr';

export const dictionaryList = {fr,en};

export const LanguageContext = React.createContext({
    dictionary: dictionaryList.fr
});
