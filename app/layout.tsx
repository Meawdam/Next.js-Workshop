import Navbar from "./components/Navbar";
import { Metadata } from "next";
import './globals.css';

export const metadata:Metadata ={
  title: "Next.js Workshop",
  description: "Just workshop nothing expect",
  keywords: "Next.js, Workshop"
}

const layout = ({children}) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout