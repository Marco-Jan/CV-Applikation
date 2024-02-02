import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

import PersonalData from "./Components/PersonData";
import PersonalView from "./Components/PersonalForm";
import SchoolData from "./Components/SchoolHistory";
import SchoolView from "./Components/SchoolForm";
import WorkData from "./Components/WorkHistory";
import WorkView from "./Components/WorkForm";
import 'bootstrap/dist/css/bootstrap.min.css';


type Schools = {
  abschluss: string;
  nameSchule: string;
  fach: string;
  datumAbschluss: string;
};

type Workplaces = {
  firmenname: string;
  position: string;
  aufgaben: string;
  start: string;
  ende: string
};


function App() {

  const initPerson = {
    vorname: "",
    nachname: "",
    dateOfBirth: "",
    strasse: "",
    plz: "",
    stadt: "",
    land: "",
    telefon: "",
  }

  const initSingleSchool = {
    abschluss: "",
    nameSchule: "",
    fach: "",
    datumAbschluss: "",
  }

  const initSingleWorkplace = {
    firmenname: "",
    position: "",
    aufgaben: "",
    start: "",
    ende: "",
  }


  const [personData, setPersonData] = useState(initPerson);
  const [singleSchoolData, setSingleSchoolData] = useState<Schools>(initSingleSchool);
  const [singleWorkData, setSingleWorkData] = useState(initSingleWorkplace);
  const [allSchoolData, setAllSchoolData] = useState<Schools[]>([])
  const [allWorkData, setAllWorkData] = useState<Workplaces[]>([])

  const handlePersonInputChange = (e:ChangeEvent<HTMLInputElement>, type:string) => {
    setPersonData({ ...personData, [type]: e?.target?.value })
  }

  const handleSchoolInputChange = (e:ChangeEvent<HTMLInputElement>, type:string) => {
    setSingleSchoolData({ ...singleSchoolData, [type]: e?.target?.value })
  }

  const handleWorkInputChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setSingleWorkData({...singleWorkData, [type]: e.target.value})
  }

  const saveSchool = (e: FormEvent<Element>) => {
    e.preventDefault();
    setAllSchoolData([...allSchoolData, singleSchoolData])
    setSingleSchoolData({nameSchule: "", abschluss: "", datumAbschluss: "", fach: ""})
  }

  const saveWorkplaces = (e: FormEvent<Element>) => {
    e.preventDefault();
    setAllWorkData([...allWorkData, singleWorkData]);
  }

  const removeSchool = (name: string) => {
    setAllSchoolData((prevSchool) => {
      return prevSchool.filter(school => school.nameSchule !== name)
    })
  }

  const removeWork = (name: string) => {
    setAllWorkData((prevWork) => {
      return prevWork.filter(work => work.firmenname !== name)
    })
  }
  
  return (
    <>
      <h1 className="header">Lebenslauf von {personData.vorname} {personData.nachname}</h1>
      <div id="allInputs" className="allInputsClass">
        <PersonalData personData={personData} handleInputChange={handlePersonInputChange}/>
        <SchoolData schoolData={singleSchoolData} handleInputChange={handleSchoolInputChange} schoolToList={(e) => saveSchool(e)}/>
        <WorkData workData={singleWorkData} handleInputChange={handleWorkInputChange} workplacesToList={(e) => saveWorkplaces(e)}/>
      </div>

      <div id="view" className="viewClass">
 
        <PersonalView allPersonData={personData}/>
        
        <SchoolView allSchools={allSchoolData} removeSchool={removeSchool}/>
        
        <WorkView allWorkplaces={allWorkData} removeWork={removeWork}/>
      </div>
    </>
  );
}

export default App;