import { ChangeEvent, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Person = {
    vorname: string;
    nachname: string;
    dateOfBirth: string;
    strasse: string;
    plz: string;
    stadt: string;
    telefon: string;
};

interface Props {
    personData: Person;
    handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void
}


export default function PersonalpersonData({ personData, handleInputChange }: Props) {

    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible((prevVisibility) => !prevVisibility);
    };
    

    return (
        <div>
            <Button variant="primary" onClick={handleToggleVisibility}>
                {isVisible ? "Formular ausblenden" : "Persönliche Daten"}
            </Button>

            {isVisible && (
                <Form id="personalInputs">
                    <h2>Persönliche Daten</h2>

                    <Form.Group className="mb-3">
                        <Form.Label>Vorname:</Form.Label>
                        <Form.Control
                            type="text"
                            name="vorname"
                            value={personData.vorname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "vorname")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nachname:</Form.Label>
                        <Form.Control
                            type="text"
                            value={personData.nachname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "nachname")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Geburtsdatum:</Form.Label>
                        <Form.Control
                            type="date"
                            value={personData.dateOfBirth}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "dateOfBirth")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Straße:</Form.Label>
                        <Form.Control
                            type="text"
                            value={personData.strasse}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "strasse")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>PLZ:</Form.Label>
                        <Form.Control
                            type="text"
                            value={personData.plz}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "plz")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Stadt:</Form.Label>
                        <Form.Control
                            type="text"
                            value={personData.stadt}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "stadt")}
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Telefonnummer:</Form.Label>
                        <Form.Control
                            type="text"
                            value={personData.telefon}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "telefon")}
                        />
                    </Form.Group>
                </Form>
            )}
        </div>
    );
}
