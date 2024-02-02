import { ChangeEvent, FormEvent, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Workplaces = {
    firmenname: string;
    position: string;
    aufgaben: string;
    start: string;
    ende: string;
};

interface Props {
    workData: Workplaces;
    handleInputChange(e: ChangeEvent<HTMLInputElement>, type: string): void;
    workplacesToList(e: FormEvent): void;
}

export default function WorkData({ workData, handleInputChange, workplacesToList }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible((prevVisibility) => !prevVisibility);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleToggleVisibility}>
                {isVisible ? "Formular ausblenden" : "Berufliche Laufbahn"}
            </Button>
        {isVisible && (
            <Form id="allWorkInputs" onSubmit={(e) => workplacesToList(e)}>
                <h2>Berufslaufbahn</h2>

                <Form.Group className="mb-3">
                    <Form.Label>Firmenname:</Form.Label>
                    <Form.Control
                        type="text"
                        value={workData.firmenname}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "firmenname")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Position:</Form.Label>
                    <Form.Control
                        type="text"
                        value={workData.position}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "position")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Aufgaben:</Form.Label>
                    <Form.Control
                        type="text"
                        value={workData.aufgaben}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "aufgaben")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Beginn:</Form.Label>
                    <Form.Control
                        type="text"
                        value={workData.start}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "start")}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ende:</Form.Label>
                    <Form.Control
                        type="text"
                        value={workData.ende}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, "ende")}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Hinzufügen</Button>
            </Form>
            )}
        </div>
    );
}
