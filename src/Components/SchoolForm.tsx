
type Schools = {
    abschluss: string;
    nameSchule: string;
    fach: string;
    datumAbschluss: string;
  };
  
  interface Props {
    allSchools: Schools[]
    removeSchool(name: string): void
  }
  
  function lastItem(allSchools: Schools[], school: Schools) {
  if (allSchools[allSchools.length-1].nameSchule !== school.nameSchule) {
    return 
  }
  }
  
  export default function SchoolView({allSchools, removeSchool}: Props) {
    return (
      <>
        <h2 id="SchoolTitel">Schulbildung</h2>
        {allSchools.map(school => {
          return (
            <>
              <ul className="singleSchool" key={school.nameSchule} contentEditable>
                <li className="sViewData">{school.nameSchule}</li>
                <li className="sViewData">{school.datumAbschluss}</li>
                <button onClick={() => removeSchool(school.nameSchule)}>Löschen</button>
              </ul>
              {lastItem(allSchools,school)}
  
            </>
          )
        })}
      </>
    )
  }