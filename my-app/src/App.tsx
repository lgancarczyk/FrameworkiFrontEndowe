import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {FC} from 'react'
import { Home } from './home';
import { About } from './about';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
