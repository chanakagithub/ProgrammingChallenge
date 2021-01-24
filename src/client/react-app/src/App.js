import Header from './components/Header'
import Generate from './components/Generate/Generate'
import Report from './components/Report'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Header />
      <Generate />
      <Report />
    </div>
  );
}

export default App;
