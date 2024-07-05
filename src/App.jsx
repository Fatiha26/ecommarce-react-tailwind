import Slider from './components/Slider'
import DownNav from './components/DownNav'
import Second from './components/Second'
import New from './components/New'
import Category from './components/Category'
import NewsStories from './components/NewsStories'
import Stories from './components/Stories'
import StayTuned from './components/StayTuned'
import About from './components/About'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <div className='overflow-hidden'>
      <Slider />
      <DownNav />
      <Second />
      <New />
      <Category />
      <NewsStories />
      <Stories />
      <StayTuned />
      <About />
      <Footer />
      </div>
    </>
  )
}

export default App
