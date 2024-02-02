import { ChangeEvent, FormEvent, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Schools = {
    abschluss: string;
    nameSchule: string;
    fach: string;
    datumAbschluss: string;
};

interface Props {
    schoolData: Schools;
    handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void;
    schoolToList(e: FormEvent): void;
}

export default function SchoolData({ schoolData, handleInputChange, schoolToList }: Props) {

    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible((prevVisibility) => !prevVisibility);
    };

    return (

        <div>
            <Button variant="primary" onClick={handleToggleVisibility}>
                {isVisible ? "Formular ausblenden" : "Schulische Laufbahn"}
            </Button>

            {isVisible && (
                <Form id="allSchoolInputs" onSubmit={(e) => schoolToList(e)}>
                    <h2>Schulbildung</h2>

                    <Form.Group className="mb-3">
                        <Form.Label>Schuleinrichtung:</Form.Label>
                        <Form.Control
                            type="text"
                            value={schoolData.nameSchule}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "nameSchule")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Abschlussdatum:</Form.Label>
                        <Form.Control
                            type="text"
                            value={schoolData.datumAbschluss}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "datumAbschluss")}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Hinzufügen</Button>
                </Form>
            )}
            </div>
            );
}
