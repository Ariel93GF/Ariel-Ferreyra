import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";

import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import MainLayout from "./components/layout/MainLayout";




function App() {

  return (

    <ChakraProvider>

      {/*<NavBar />*/}
      <MainLayout>
      <ItemListConteiner greeting=" Bienvenidos a mi tienda"/>
      </MainLayout>

    </ChakraProvider>

  );

}
export default App;