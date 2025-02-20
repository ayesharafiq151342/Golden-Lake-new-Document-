// pages/index.js (or Home.js if it's a component)
"use client"; 
import React from "react";
// Correct path to Button.js

import Homepage from './Home/page'
import Footer from "./components/footer"
export default function Home() {
  return (
 <>  <Homepage/>
   <Footer/></>
  );
}
