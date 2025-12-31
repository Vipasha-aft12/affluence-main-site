"use client"
import Header from "@/component/header/Header";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "@/component/footer/Footer";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/** <Header /> */}
        
        {children}
        
      {/**<Footer /> */}  
      </body>
      
    </html>
  );
}
