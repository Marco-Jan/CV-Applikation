type Person = {
    vorname: string;
    nachname: string;
    dateOfBirth: string;
    strasse: string;
    plz: string;
    stadt: string;
    land: string;
    telefon: string;
  };
  
  interface Props {
    allPersonData: Person;
  }

  export default function PersonalView ({allPersonData}: Props) {
    return (
        <>
        <h2 id="pHead">Persönliche Daten</h2>
        <ul id="personalView">
            <li>{allPersonData.vorname} {allPersonData.nachname}</li>
            <li>{allPersonData.dateOfBirth}</li>
            <li>{allPersonData.strasse}</li>
            <li>{allPersonData.plz} {allPersonData.stadt}</li>
            <li>{allPersonData.telefon}</li>
        </ul>
        </>
      )
  }