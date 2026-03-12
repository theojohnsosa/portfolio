import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
      </div>
    </>
  );
}