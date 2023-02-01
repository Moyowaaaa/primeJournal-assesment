
import './App.css'
import { QueryClientProvider, QueryClient,useQuery } from 'react-query'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Home/>)} />
          </Routes>
          </BrowserRouter>
          </QueryClientProvider>

  

  )
}

export default App
