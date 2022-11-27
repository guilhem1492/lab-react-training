//import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Title from './components/Title/Title';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';

function App() {
  return (
    <div className="App">
      <Title title="IdCard" />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Title title="Greetings" />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Title title="Random" />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
