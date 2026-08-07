import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Toaster
                position='bottom-right'
                reverseOrder={false}
                toastOptions={{
                    style: {
                        background: 'hsl(var(--card))',
                        color: 'hsl(var(--foreground))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.875rem',
                        fontSize: '0.875rem',
                        boxShadow: '0 20px 40px -20px hsl(var(--foreground) / 0.35)',
                    },
                }}
            />
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
