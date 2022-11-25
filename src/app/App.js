import { Routes, Route } from 'react-router-dom';
import { Header } from '../features/homepage/header/Header';

import { Main } from '../features/homepage/Main';
import { Homepage } from '../features/homepage/Homepage';
import { Details } from '../features/details/Details';
import { NotFound } from '../features/notFound/NotFound.tsx';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/country/:name' element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
