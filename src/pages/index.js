import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Home from "../components/Home"
import Video from "../components/Video"
import Insta from "../components/Insta"
import SignIn from "../components/SignIn"
import ProductCard from "../components/ProductCard"
import NewList from "../components/NewList"
import Info from "../components/Info"
import Privacy from "../components/Privacy"

const IndexPage = () => (
  <Layout>
    <SEO title="CosmetiCs Homepage" />
     <Home/>
   <Video/>
  <Privacy/>

 <ProductCard
    id= 'first'
    topLine= 'FOR SKIN'
    headline= 'FACE MASKS'
    description= 'Duis luctus augue justo'
    seconddescription="Eget consequat nibh porta id" 
    thirddescription="Suspendisse et arcu ut ipsum ultrices convallis"
    alt='Bae Suzy'
    imgStart= {true}
    src="masks.png"
    price="$2.5"
    secondprice="$3"
    thirdprice="$1.39"
    />
    <ProductCard
    id= 'second'
    topLine= 'FOR SOUL'
    headline= 'PARFUMS'
    description= ' Integer id vulputate lacus'
    seconddescription=' Nullam tincidunt at nunc id venenatis'
    thirddescription=' Etiam ac tellus ultrices, varius sapien eu, varius massa'
    alt='Bae Suzy'
    imgStart= {false}
    src="parfumes.png"
    price="$25"
    secondprice="$89"
    thirdprice="$57"
    />

<ProductCard
    id= 'third'
    topLine= 'FOR YOU'
    headline= 'FULL MAKEUP BOX'
    description= ' Integer porttitor vel libero et fringilla'
    seconddescription=' Donec feugiat tristique interdum'
    thirddescription= ' Proin scelerisque dignissim mi'
    fourthdescription=' In aliquet tortor vitae dictum condimentum'
    alt='Bae Suzy'
    imgStart= {true}
    src="box.png"
    fourthprice="$39.99 TOTAL PRICE "
   />  
    
   <Info/>
     <SignIn/>
      <NewList/> 
      
    <Insta/>

  </Layout>
)

export default IndexPage
