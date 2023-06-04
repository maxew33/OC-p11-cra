import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Error from '../pages/error/Error'
import About from '../pages/about/About'
import Lodging from '../pages/lodging/Lodging'

export default function Router() {
    const path = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '*',
            element: <Error />,
        },
        {
            path: 'about',
            element: <About />,
        },
        {
            path: 'lodging/:id',
            element: <Lodging />,
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {path.map((e, idx) => (
                    <Route path={e.path} element={e.element} key={idx} />
                ))}
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
