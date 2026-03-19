import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Global';
import { 
  HomePage, 
  WebsLandingPage, 
  VideoContenidoPage, 
  SolucionesIAPage, 
  SobreNosotrosPage, 
  BlogPage, 
  ContactoPage 
} from './pages/Pages';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/webs-landing" element={<WebsLandingPage />} />
        <Route path="/video-contenido" element={<VideoContenidoPage />} />
        <Route path="/soluciones-ia" element={<SolucionesIAPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
