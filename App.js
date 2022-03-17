import React from "react";
import {Flex} from "@chakra-ui/core";
import BlogPost from "./components/ui/BlogPost";
import Navbar from "./components/ui/Navbar";
import LeftDownBar from "./components/ui/LeftDownBar";
import Footer from "./components/ui/Footer";
import AccountAreaUsing from "./components/ui/AccountAreaUsing";


const App = () => {
  const data = [
    {
      author : "Norbert Czubak", 
      posted: "5 min temu",
      localization: "Lublin, Poland",
      image: "https://images.unsplash.com/photo-1524414287096-c7fb74ab3ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
      isLicked: false
    },
    {
      author : "Norbert Czubak", 
      posted: "5 min temu",
      localization: "Lublin, Poland",
      image: "https://images.unsplash.com/photo-1524414287096-c7fb74ab3ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
      isLicked: false
    },
    {
      author : "Norbert Czubak", 
      posted: "5 min temu",
      localization: "Lublin, Poland",
      image: "https://images.unsplash.com/photo-1524414287096-c7fb74ab3ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
      isLicked: true
    },
  ]

  return (

    
    <Flex bg="gray.100" direction="column" >
    
    <Navbar/>

    
    
  

      
      <Flex  bg="gray.100"  justifyContent="flex-start" alignItems="flex-start" w="full" h="full" >
      
      <Flex h="full" w="25%" bg="white" mt="10px" direction="column" alignItems="flex-start">
      
      <LeftDownBar/>
      <Footer />
      </Flex>
      <Flex w="500px" my="15px" ml="150px"  alignItems="center" justifyContent="center" h="full" >
      
      
      <Flex direction="column">
      
      <AccountAreaUsing />
      
        {
          data.map((post, index) => (

            
        
      <BlogPost
      key={index}
      author={post.author} 
      when={post.posted} 
      where={post.localization}
      isLiked={post.isLicked}
      image={post.image}/>
          ))
}
    </Flex>
    </Flex> 
    </Flex>
    </Flex>
    
   
  )
}
export default App;