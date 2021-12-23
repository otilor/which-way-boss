import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import NavigationBar from './NavigationBar';
import Hero from './Hero';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
      <NavigationBar />
      </header>
      <Hero />
    </div>
    </ChakraProvider>
  );
}

export default App;
