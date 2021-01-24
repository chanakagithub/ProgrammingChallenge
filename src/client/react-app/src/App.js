import Header from './components/Header'
import Generate from './components/generate/Generate'
import Report from './components/report/Report'
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
