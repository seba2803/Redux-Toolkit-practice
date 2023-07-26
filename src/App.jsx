import './App.css'
import PostForm from './components/PostForm/PostForm'

import PostsList from './components/PostsList/PostsList'

function App() {

  const saludo = 'Hola lucas! pruebo si se ven los cambios en un repo clonado';

  return (
    <div>
      <PostForm/>
      <PostsList/>
    </div>
  )
}

export default App
