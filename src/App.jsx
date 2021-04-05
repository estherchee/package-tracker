import React, { Suspense } from 'react';

import Header from './components/Header';
import Home from './views/Home';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
