import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import RawMaterialManager from './components/RawMaterialManager';
import ProductionAnalysis from './components/ProductionAnalysis';

function App() {
  return (
    <div className='App bg-light min-vh-100'>
      <nav className='navbar navbar-dark bg-dark mb-4 shadow'>
        <div className='container'>
          <span className='navbar-brand mb-0 h1'>MRA Factory Management</span>
        </div>
      </nav>

      <main className='container pb-5'>
        

        <hr/>

        <div className='row'>
          <div className='col-12 mb-5'>
            <RawMaterialManager />
          </div>
        </div>

        <hr/>

        <div className='col-12'>
          <ProductionAnalysis/>
        </div>
      </main>

      <footer className='text-center py-4 bg-white border-top mt-auto'>
        <p className='text-muted mb-0'>MRP System &copy; 2026 - English Standards (RNF007)</p>
      </footer>
    </div>
  )
}

export default App;