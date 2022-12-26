import Header from './components/Header'
import Player from './components/Player/Player'
import SideBar from './components/SideBar'

const MainLayout = ({ children }) => {
  return (
    <div className='flex h-[100vh] w-full items-start bg-main-500 scrollbar'>
      <SideBar />
      <div className=' grow flex-col items-start px-[59px]'>
        <Header />
        <main className='mt-[70px] w-full h-[1000px]'>{children}</main>
      </div>
      <Player />
    </div>
  )
}
export default MainLayout
