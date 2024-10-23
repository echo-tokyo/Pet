import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectPage from './components/projectPage/ProjectPage'
import { Fragment } from 'react/jsx-runtime'
import ScrollToTop from './ScrollToTop.ts'

const Router = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<App />}/>
					<Route path='/admin' element={<App />}/>
					<Route path='*' element={<h3 style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>404 Page not found</h3>}/>
					<Route path='/project/:id' element={<ProjectPage />}/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default Router