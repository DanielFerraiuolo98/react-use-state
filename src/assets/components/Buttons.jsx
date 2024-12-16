import { useState } from "react";
import languages from "../../languages";

function Buttons() {
    const [selectedLinguaggio, setSelectedLinguaggio] = useState(null); // Stato per memorizzare il linguaggio selezionato
    const linguaggi = [...languages];

    // Funzione per gestire il click su un linguaggio
    const handleClick = (linguaggio) => {
        setSelectedLinguaggio(linguaggio); // Imposta il linguaggio selezionato
    };

    return (
        <>
            <h1>Learn Web Development</h1>

            <ul className="d-flex">
                {linguaggi.map((linguaggio) => (
                    <li
                        key={linguaggio.id}
                        onClick={() => handleClick(linguaggio)}
                        className={`btn m-2 p-3 ${selectedLinguaggio?.id === linguaggio.id ? 'btn-primary' : 'btn-outline-primary'}`} // Cambia il colore del bottone se è selezionato
                        style={{ cursor: "pointer" }} // Cambia il cursore per indicare che è cliccabile
                    >
                        {linguaggio.title}
                    </li>
                ))}
            </ul>

            {selectedLinguaggio && (
                <div className="mt-3">
                    <h3>{selectedLinguaggio.title}</h3>
                    <p>{selectedLinguaggio.description}</p>
                </div>
            )}
        </>
    );
}

export default Buttons;

