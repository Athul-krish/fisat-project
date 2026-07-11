import AddStudent from './components/AddStudent'
import DeleteStudent from './components/DeleteStudent'
import Navbar from './components/Navbar'
import SearchStudent from './components/SearchStudent'
import ViewAllStudent from './components/ViewAllStudent'

function App() {
  return (
    <>
      <AddStudent/>
      <SearchStudent/>
      <ViewAllStudent/>
      <DeleteStudent/>
      <Navbar/>
    </>
  )
}

export default App
