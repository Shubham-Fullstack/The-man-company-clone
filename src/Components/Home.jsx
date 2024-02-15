import React, { useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
import FeaturedBox from './FeaturedBox'
import Banner from './Banner'
import Heading from './Heading'
import Article from './Article'
import NewLaunches from './NewLaunches'
import GroomingInfleuncers from './GroomInfleuncers'
import { Route , Routes} from 'react-router-dom'
import BrandPromise from './BrandPromise'
import Account from './Account'
import Product from './Product'
import axios from 'axios'
import Title from './Title'
import ScrollToTop from './ScrollToTop'

export const Count = React.createContext()
export const Kartless = React.createContext()
export const Show = React.createContext()
export const Hide = React.createContext()
export const Visible = React.createContext()
export const Status = React.createContext()
export const Review = React.createContext()

const Home = (props) => {
  const[count,setCount]= useState(0);
  const[visible,setVisible]= useState({visibilty:"hidden"});
  const[status,setStatus]=useState("Your cart is already empty");
  

  const kartless = () => {
    if(count > 0){
      setCount(0)
    }
    else{
      // setCount(0)
      alert("Your Cart is Empty")
    }
  }
  const alerts = (msg) =>{
    alert(msg)
  }
  const kart = (callBack)=> {
    setCount(count+1);
     callBack("This Item will be added to your Cart");
    }
    const show = () => {
      setVisible({ opacity:"1",visibility:"visible"});
      if(count === 0){
        setStatus("your Cart is empty")
      }
      else{
        setStatus("empty kart now")
      }
    }
    const hide = () =>{
      setVisible({ opacity:"0",visibility:"hidden"});
    }
    const[title,setTitle]=useState("The man company - Home")

  const[articleproducts,setArticleProducts]= useState([])
  const[newlaunchproducts,setNewLaunchProducts] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:4000/article")
      .then((res)=>{
        setArticleProducts(res.data)
      })
      .catch(err=> console.log(err))
    })

    let articleproductComponent = articleproducts.map((articleproduct,index)=><Route key={articleproduct.id} path={"/"+articleproduct.link} element={<Count.Provider value={()=>kart(alerts)}><Review.Provider value={articleproduct.ratings}><Product cart={kart} price={articleproduct.price} title={articleproduct.title} discount={articleproduct.discount} description={articleproduct.description} beforeprice={articleproduct.beforeprice} url={articleproduct.src} ratings={articleproduct.ratings} type={articleproduct.type} id={articleproduct.link}/></Review.Provider></Count.Provider>}/>)


    useEffect(()=>{
      axios.get("http://localhost:4000/newlaunches")
      .then(res=>{
        setNewLaunchProducts(res.data)
      })
      .catch(err=> console.log(err))
    })
    let newlaunchesproductComponent = newlaunchproducts.map((newlaunchproduct,index)=><Route key={newlaunchproduct.id} path={"/"+newlaunchproduct.link} element={<Count.Provider value={()=>kart(alerts)}><Review.Provider value={newlaunchproduct.ratings}><Product cart={kart} price={newlaunchproduct.price} title={newlaunchproduct.title} discount={newlaunchproduct.discount} description={newlaunchproduct.description} beforeprice={newlaunchproduct.beforeprice} url={newlaunchproduct.src2}type={newlaunchproduct.type}/></Review.Provider></Count.Provider>}/>)
  return (
    <>
   <title>{title}</title>
  <div className="root">

   <Title/>
   <Kartless.Provider value={kartless}>
     <Show.Provider value={show}>
       <Hide.Provider value={hide}>
        <Visible.Provider value={visible}>
          <Status.Provider value={status}>
          <Count.Provider value={count}>
                <Header/>
          </Count.Provider>
          </Status.Provider>
        </Visible.Provider>
       </Hide.Provider>
     </Show.Provider>
   </Kartless.Provider>
   <ScrollToTop/>
    <Main>
      <Routes>
       <Route path='/' element={<><Count.Provider value={()=>kart(alerts)}><FeaturedBox/><Banner/><Heading heading="OUR" sub="MUST-HAVES"/><Article cart={kart}/><Heading heading="new" sub="launches"/><NewLaunches cart={kart}/><Heading heading="our" sub="Groom-influencers"/><GroomingInfleuncers/><Heading heading="the man" sub="club"/></Count.Provider></>}/>

       <Route path='home' element={<><Count.Provider value={()=>kart(alerts)}><FeaturedBox/><Banner/><Heading heading="OUR" sub="MUST-HAVEs"/><Article cart={kart}/><Heading heading="new" sub="launches"/><NewLaunches cart={kart}/><Heading heading="our" sub="Groom-influencers"/><GroomingInfleuncers/><Heading heading="the man" sub="club"/></Count.Provider></>} />

 {/* x-x-x--x-x-x--x-x-x-x-x--x-x-x-x--x-x-x-x-x--x-x-x--x-x-x-x--x-x-x--x-x-x--x-x-x--x-x-x-x--x-x-x--x-x-x-x--x-x-x- */}
 
       <Route path='account' element={<Account/>}/>
         {articleproductComponent}
         {newlaunchesproductComponent}
       <Route path='*' element={<h1 style={{margin:"150px auto",color:"red",fontSize:"4rem"}}>No Page Found</h1>} />
      </Routes>
    </Main>
    <BrandPromise/>
  <Footer/>
  </div>
  </>
  )
}

export default Home