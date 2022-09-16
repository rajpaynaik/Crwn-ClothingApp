import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './navigation/navigation.components'
import { Authentication } from './routes/authentication/authencation.components'
import Shop from './routes/shop/shop.components'
import CheckOut from './routes/checkout/checkout.component'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckOut />} />
    </Route>
  </Routes>
)

export default App
