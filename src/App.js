import './App.css'
import {
  RecoilRoot,
} from 'recoil'
import CharacterCounter from './CharacterCounter'

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
