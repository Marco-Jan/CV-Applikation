type Workplaces = {
    firmenname: string;
    position: string;
    aufgaben: string;
    start: string;
    ende: string
  };
  
  interface Props {
    allWorkplaces: Workplaces[]
    removeWork(name: string): void
  }

  function lastItem(allWorkplaces: Workplaces[], work: Workplaces) {
    if (allWorkplaces[allWorkplaces.length-1].firmenname !== work.firmenname) {
      return (<hr/>)
    }
    }


export default function WorkView({allWorkplaces, removeWork}: Props) {
    return (
      <>
      <h2 id="wHead">Berufslaufbahn</h2>
        {allWorkplaces.map(work => {
          return (
            <>
              <ul className="singleWork" key={work.firmenname} contentEditable>
                <li>{work.firmenname}</li>
                <li>{work.position}</li>
                <li>{work.aufgaben}</li>
                <li>{work.start}</li>
                <li>{work.ende}</li>
                <button onClick={() => removeWork(work.firmenname)}>Löschen</button>
              </ul>
              {lastItem(allWorkplaces, work)}
            </>
          )
        })}
      </>
    )
  }