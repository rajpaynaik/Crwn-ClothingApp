import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './navigation/navigation.components'
import { SigIn } from './routes/sign-in/sign-in.components'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SigIn />} />
    </Route>
  </Routes>
)

export default App
