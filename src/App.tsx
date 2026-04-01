import { useRef } from 'react';
import './App.css';
import useElementOnScreen from './hooks/useElementOnScreen';
import useAffix from './hooks/useAffix';
import Navigation from './components/sections/Navigation';
import Presentation from './components/sections/Presentation';
import Tecnologies from './components/sections/Tecnologies';
import ConfigProvider from './context/ConfigProvider';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Formation from './components/sections/Formation';
import AboutMe from './components/sections/AboutMe';

function App() {
  const triggerRef = useRef<HTMLDivElement>(null); // element reference to trigger affix
  const affixed = useAffix(34); // affixed or not with 34 threshold

  const isTriggerVisible = useElementOnScreen(triggerRef, {
    rootMargin: '0px',
    threshold: 0, // It triggers when any part of the element is no longer visible.
  }); // the element is visible on screen?

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
