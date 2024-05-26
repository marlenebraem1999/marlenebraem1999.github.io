import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { ProjectenPage } from './pages/ProjectenPage'
import { ProjectDetail} from './pages/ProjectDetails/ProjectDetail'
import { ContactPage} from './pages/ContactPage'


const App: React.FC = () => {

 return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projecten" element={<ProjectenPage />} />
    <Route path="/projectDetail" element={<ProjectDetail/>} />
    <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  </BrowserRouter>
 )
}
export default App