import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider=({children})=>{

const [isSubmenuOpen , setIsSubmenuOpen] = useState(false)
const [isSidebarOpen , setIsSidebarOpen] =useState(false)
const [position , setPosition] =useState({})
const [page , setPage] =useState({page:'',links:[]})
const openSidebar=()=>{
    setIsSidebarOpen(true)
}
const closeSidebar=()=>{
    setIsSidebarOpen(false)
}

const openSubmenu=(text,cordinates)=>{
    const page = sublinks.find(item=>item.page === text)
    setIsSubmenuOpen(true)
    setPosition(cordinates)
    setPage(page)
}

const closeSubmenu=()=>{
    setIsSubmenuOpen(false)
}

    return (
        <AppContext.Provider 
        value={{isSubmenuOpen,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            openSubmenu
            ,closeSubmenu
            ,position
            ,setPosition
            ,page}}>
           
            {children}
        </AppContext.Provider>

    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}