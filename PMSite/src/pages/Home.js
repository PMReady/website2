import React from 'react'
import Navbar from '../components/NavBar/Navbar.js';
import Header from '../components/header/Header';
import Summary from '../components/summary/Summary.js';
import "./Home.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll'


// Header for the main home page


const Home = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const node = useRef(null);
  
  // const callBack = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0
  // }
  // useEffect(() => {
  //   const observer = new IntersectionObserver(callBack, options);
  //     if (node.current) observer.observe(node.current);

  //     return () => {
  //       if (isVisible) {
  //         observer.unobserve(node.current);
  //         observer.disconnect();
  //       }
  //     }

  // });

  return (
    <>
    <div className="home-container">
      <Navbar />
      <Header button={true} title="Main Page Statement" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
      {/* <div ref={node}></div> */}
      <div className="summary-container">
        <AnimationOnScroll offset={800} duration={0.7} animateIn="square-animation" animateOnce={true}>
          <Summary />
        </AnimationOnScroll>
      </div>
      
      {/* // className={`${isVisible ? "square-animation" : ''}`}>>  */}
    </div>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    <h2>empty</h2>
    </>
    
  )
}

export default Home;