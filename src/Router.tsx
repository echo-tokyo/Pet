import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectPage from './components/projectPage/ProjectPage'
import { Fragment } from 'react/jsx-runtime'
import ScrollToTop from './ScrollToTop.ts'
import Landing from './components/Landing.tsx'
import Registration from './components/Registration.tsx'
import Login from './components/Login.tsx'

const Router = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<App />}/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/landing/:id' element={<Landing />} />
					<Route path='/landing/:landingId/project/:projectId' element={<ProjectPage />}/>
					<Route path='*' element={<h3 style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>404 Page not found</h3>}/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default Router