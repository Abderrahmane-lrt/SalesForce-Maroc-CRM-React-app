
import { Routes, Route } from 'react-router-dom'
import { SignIn } from '@clerk/clerk-react'
import HomePage from './home/home'


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sign-in"
          element={
            <div className="min-h-screen flex items-center justify-center ">
              <div className="w-full max-w-md p-6">
                <SignIn routing="path" path="/sign-in" />
              </div>
            </div>
          }
        />
        
      </Routes>
  )
}

export default App
