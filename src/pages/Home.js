import Banner from '../components/Banner';

import { useContext } from 'react';

import UserContext from '../UserContext';

export default function Home() {

	const { user } = useContext(UserContext);

  const data = {
    title: "Welcome to our Movies Library",
    destination: "/movies",
    buttonLabel: "View our Movies" 
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Banner data={data} />
    </div>
  );
}
