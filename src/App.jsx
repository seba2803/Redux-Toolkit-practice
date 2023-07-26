import './App.css'
import PostForm from './components/PostForm/PostForm'

import PostsList from './components/PostsList/PostsList'

const saludo = "Hola mundo"

function App() {

  return (
    <div>
      <PostForm/>
      <PostsList/>
    </div>
  )
}

export default App
