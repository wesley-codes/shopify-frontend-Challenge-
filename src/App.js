import { useEffect, useState, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NasaCards from "./Components/NasaGem/NasaCards";
import Styled from "styled-components";
import NasaItems from "./Components/NasaGem/NasaItem";
import MyContext from "./Context/store"
const Section = Styled.section`

display: flex;
flex-wrap:wrap;
margin-top: 70px;
justify-content:center;
`;
function App() {
const ctx = useContext(MyContext)
 
  useEffect(() => {
    ctx.fetchRequest();
  }, []); 

  return (
    <>
      <Navbar />

      <Section>
       {!ctx.isLoading && ctx.data.length > 0 && <NasaItems  response={ctx.data}/>}
       {ctx.isLoading && <p>Loading...</p>}
      </Section>
    </>
  );
}

export default App;
