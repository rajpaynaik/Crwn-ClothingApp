import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './navigation/navigation.components'
import { Authentication } from './routes/authentication/authencation.components'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
)

export default App
