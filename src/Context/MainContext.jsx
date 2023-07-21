import React, { useState, useEffect, createContext } from 'react';


export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('');
    // console.log(activePage)

    return (
        <>
          <MainContext.Provider value={{
                activePage, 
                setActivePage
            }}>
            {children}
          </MainContext.Provider>
        </>
    )
}

export default MainContextProvider;