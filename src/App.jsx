
import './App.css';
import {Suspense} from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import { Layout } from './Pages/Layout/';

import Home from './Pages/Home/';
import { NotFound } from './Pages/NotFound/';

//const Buscador = React.lazy(( ) =>  import('../pages/Buscador'))
//const ImagenesDeCartas = React.lazy(( ) =>  import('../pages/ImagenesDeCartas/'))

export const App = () => {
	return (
		<Suspense fallback={<div/>}>
		 	<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path='/' element={ <Home /> } />
					

						{/* <Route exact path='/Buscador' element={ < Buscador /> } />
						<Route exact path='/imgs' element={ < ImagenesDeCartas />} /> */}
						<Route exact path='*' element={ <NotFound /> } />	
					</Routes> 
				</Layout>
			</BrowserRouter> 
		</Suspense>
	)
	
}


