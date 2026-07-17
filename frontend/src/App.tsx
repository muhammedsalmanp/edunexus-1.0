import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



import AppRouter from './router'
import Notification from './Components/common/Notification'
import LoadingPage from './Components/common/LoadingPage'



const App = () => {
  return (
    <>
      <LoadingPage />
      <Notification />
      <AppRouter />
    </>
  )
}

export default App
