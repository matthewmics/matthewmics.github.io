import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
    return (
        <>
            <div>
                <Toaster position='bottom-right' reverseOrder={false} />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
