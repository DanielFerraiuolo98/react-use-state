import { useState } from "react";

function Card() {
    // Stato per memorizzare l'indice del linguaggio selezionato
    const [selectedLinguaggio, setSelectedLinguaggio] = useState(0);

    const selectLinguaggio = (index) => {
        setSelectedLinguaggio(index);
    };
}

export default Card;
