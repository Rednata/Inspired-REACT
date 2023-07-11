
// import { Footer } from './Components/Footer/Footer.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {Root} from './routes/Root';
import { MainPage } from './Components/MainPage/MainPage.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<MainPage/>} />
      <Route path='women' element={<MainPage gender='women'/>} />
      <Route path='men' element={<MainPage gender='men'/>} />
      <Route path='women/:category' element={<MainPage gender='men'/>} />
      <Route path='men/:category' element={<MainPage gender='women'/>} />
      <Route path='*' element={<ErrorPage/>} />
      
      </Route>
  )
);

export const App = () => (
  <RouterProvider router={router}></RouterProvider>
);
