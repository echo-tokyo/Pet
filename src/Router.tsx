import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectPage from './components/projectPage/ProjectPage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='/admin' element={<App />}/>
				<Route path='*' element={<h3 style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>404 Page not found</h3>}/>
				<Route path='/project/:id' element={<ProjectPage />}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router