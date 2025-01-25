import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { SignatureFooter } from '../lib/components/SignatureFooter';


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React TESTIN</h1>

      <div className="card">

        <p>
          <p>TESTING</p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <SignatureFooter backgroundColor="black" fontColor="white" />
    </>
  )
}

export default App
