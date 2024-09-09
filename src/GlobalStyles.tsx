import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	body{
		overflow: hidden;
	}
	header, .container, .wrapper, .stack, .services, .contacts, .projectPage{
		opacity: 0.2;
		transition: opacity 0.3s ease-out; 
		cursor: pointer;
	}	
`

export default GlobalStyles