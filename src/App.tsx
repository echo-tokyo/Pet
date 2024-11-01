// TODO: затемнение фона при просмотре слайда проекта
// TODO: возможность менять обложку

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const App:React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/personalPage')
    } else {
      navigate('/registration')
    }
  }, [navigate])

  return null
}

export default App