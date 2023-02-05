import React from "react";
import { MantineProvider, Text } from "@mantine/core";
import { HeaderSimple } from "../../components/header";
import { Routes, Route } from "react-router-dom";



import DAOhome from "./DAOhome";
import Deploy from "./deploy";
import Lock from "./lock";
import NFT from "./NFT";
import Calc from "./calc"
import Mint from "./mint"





const link = [
  { link: "DAO/calculator", label: "Calculator" },
  { link: "DAO/deploy", label: "Deploy" },
  { link: "DAO/home", label: "Home" },
];
function DAO() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Greycliff CF, sans-serif' },
      colorScheme: 'dark'
    }}>
      <MantineProvider inherit>
        
      
      <HeaderSimple links={link}></HeaderSimple>
      <Routes>
        
        <Route path="/DAO" element={<DAOhome />} />

        <Route path="/DAO/deploy" element={<Deploy />} />
        <Route path="/DAO/deploy/lock" element={<Lock />} />
        <Route path="/DAO/deploy/NFT" element={<NFT />} />
        <Route path="/DAO/deploy/mint" element={<Mint />} />
        <Route path="/DAO/calculator" element={<Calc />} />
        
      </Routes>
      </MantineProvider>
    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default DAO;
