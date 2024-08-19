import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";

import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";



function App() {

  return (

    <ChakraProvider>

      <NavBar />
      <ItemListConteiner greeting=" Bienvenidos a mi tienda"/>

    </ChakraProvider>

  );

}


export default App;