import { BrowserRouter } from 'react-router';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <switch>
        <Router path='/' component={LandingPage} />
      </switch>
    </BrowserRouter>
  );
};

export default AppRouter;
