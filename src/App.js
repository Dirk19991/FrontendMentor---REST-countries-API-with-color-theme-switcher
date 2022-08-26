import { Header } from './components/Header';
import { Search } from './components/Search';
import { Main } from './components/Main';
import { Controls } from './components/Controls';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
