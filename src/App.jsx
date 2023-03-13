import './App.css';
import FunkcijskaKompa from './components/FunkcijskaKompa';
import KompaKlasna from './components/KlasnaKompa';
import ChildrenKompa from './components/ChildrenKompa';



const korisnici = [
{
  name: 'Mario',
  age: 38
},
{
  name: 'Nina',
  age: 28
},
{
  name: 'Petra',
  age: 8
},
{
  name: 'Marija',
  age: 5
}
]


function App() {
  return (
    <div className="App">
     <FunkcijskaKompa name={korisnici[0].name} age={korisnici[0].age}/>
     <FunkcijskaKompa name={korisnici[1].name} age={korisnici[1].age}/>
     <KompaKlasna />
     <ChildrenKompa>Tekst iz App.jsx proslijeden kao props</ChildrenKompa>
    </div>
  );
}

export default App;
