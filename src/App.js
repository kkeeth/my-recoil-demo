import './App.css'
import { RecoilRoot } from 'recoil'
import CharacterCounter from './CharacterCounter'
import FontButton from './FontButton'
import TodoList from './todo/TodoList'

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
        <hr />
        <FontButton />
        <hr />
        <TodoList />
      </RecoilRoot>
    </div>
  )
}

export default App
