import './index.css'
import MainLayout from './layout/MainLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import StartPage from './pages/StartPage';
import TransportPage, {createLoaderWithIndex} from './pages/TransportPage';
import HousingPage from './pages/HousingPage';
import EnergyPage from './pages/EnergyPage';
import CommunityPage from './pages/CommunityPage';
import AdditionalQuestions from './pages/AdditionalQuestions';


function App() {

  const router = createBrowserRouter( 
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<StartPage />} /> 
      <Route path='/transport' element={<TransportPage />} loader={createLoaderWithIndex(1)}/> 
      <Route path='/housing' element={<HousingPage />} loader={createLoaderWithIndex(2)}/> 
      <Route path='/energy' element={<EnergyPage />} loader={createLoaderWithIndex(3)}/> 
      <Route path='/community' element={<CommunityPage />} loader={createLoaderWithIndex(4)}/> 
      <Route path='/additional' element={<AdditionalQuestions />} /> 
    </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
