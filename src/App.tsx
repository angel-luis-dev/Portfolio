import { useRef } from 'react';
import './App.css';
import AboutMe from './components/sections/AboutMe';
import Navigation from './components/sections/Navigation';
import Presentation from './components/sections/Presentation';
import Tecnologies from './components/sections/Tecnologies';
import ConfigProvider from './context/ConfigProvider';
import useElementOnScreen from './hooks/useElementOnScreen';
import Projects from './components/sections/Projects';
import useAffix from './hooks/useAffix';
import Experience from './components/sections/Experience';
import Formation from './components/sections/Formation';

function App() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const affixed = useAffix(34);

  const isTriggerVisible = useElementOnScreen(triggerRef, {
    rootMargin: '0px', // puedes ajustar con "-64px" si usas un header alto
    threshold: 0, // dispara cuando cualquier parte del elemento deja de verse
  });

  return (
    <ConfigProvider>
      <Navigation isTriggerVisible={isTriggerVisible} isAffix={affixed} />
      <main className="main">
        <Presentation triggerRef={triggerRef} />
        <Tecnologies />
        <Formation />
        <Experience />
        <Projects />
        <AboutMe />
      </main>
    </ConfigProvider>
  );
}

export default App;
