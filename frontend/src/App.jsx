import React from 'react'
import Main from './components/Main'
import Info from './components/Info'
import Solutions from './components/Solutions'
import Roadmap from './components/Roadmap'
import ContactForm from './components/Contact'
import Logo from './components/Logo'
import AdvisorsSection from './components/People'
import CryptoDashboard from './components/Crypto'
import TokenAllocation from './components/Token'
import PlatformFAQ from './components/FAQ'
import SalesProgress from './components/Sales'

export default function App() {
  return (
    <>
    <Main/>
    <Info/>
    <Solutions/>
    <Logo/>
    <Roadmap/>
    <AdvisorsSection/>
    <CryptoDashboard/>
    <CryptoDashboard/>
    <TokenAllocation/>
    {/* <SalesProgress/> */}
    <PlatformFAQ/>
    <ContactForm/>
    </>
  )
}
