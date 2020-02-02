import React, { createContext, useContext, useState } from 'react'

export const AccordionContext = createContext()

export const AccordionProvider = ({ children }) => {
    const [activeIds, setActiveIds] = useState([])
    const [focusedIndex, setFocusedIndex] = useState(-1)

    const toggleId = id => event => {
        // remove the given id if it's in the activeIds array; add it if it's not
        const newActiveIds = activeIds.includes(id) ? activeIds.filter(j => j !== id) : [...activeIds, id]
        setActiveIds(newActiveIds)
    }

    return (
        <AccordionContext.Provider
            value={{
                activeIds,
                toggleId,
                focusedIndex,
                setFocusedIndex,
            }}
        >
            { children }
        </AccordionContext.Provider>
    )
}

export const useAccordionContext = () => useContext(AccordionContext)
