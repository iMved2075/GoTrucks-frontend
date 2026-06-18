import './App.css'
import Header from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Body />
      </main>
      <Footer />
    </div>
  )
}

export default App
