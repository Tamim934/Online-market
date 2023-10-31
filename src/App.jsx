import './App.css'
import Burger from './components/Burger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from "react"
import Switcher from './components/Switcher'
import { useTranslation } from "react-i18next"
import {  IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  const {t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline dark:bg-blue-950 dark:text-[#FFF]" data-aos="fade-right">
      Hello world!
    </h1>                     
    <Burger/>
    <Switcher/>
    <h1>{t("hello")}</h1>
    <div className='flex'>
      <IconButton onClick={() => changeLanguage("en")}><TranslateIcon></TranslateIcon>En</IconButton>
      <IconButton onClick={() => changeLanguage("ru")}><TranslateIcon></TranslateIcon>Ru</IconButton>
    </div>
    </>
  )
}

export default App