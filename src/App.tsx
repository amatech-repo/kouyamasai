import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SampleCard from './ListCards/SampleCards/SampleCard.tsx';
import Home from './Pages/Home.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/samplecards' element={<SampleCard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
