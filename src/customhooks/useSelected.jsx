import { useState, useEffect } from 'react'

/*****
 * 
 * useSelected
 * 
 * If initialKey (string) contains the key of an object
 * in the objectList (array), that object becomes the
 * selected object
 * 
 * Returns the key of a selected object, and a function
 * returning the selected object
 * 
 * The array ought to contain unique keys; otherwise,
 * only the object with the first matching key can
 * ever be selected
 * 
 * */
export function useSelected(list, initialKey) {

    // Ensure the initial key is within the bounds of the list
    const [selectedIndex, setSelectedIndex] = useState(() => {
        if (initialKey >= 0 && initialKey < list.length) {
            return initialKey
        }
        // else initialKey value is not valid
        return 0
    })
    
    useEffect(() => {
        if (initialKey >= 0 && initialKey < list.length) {
            setSelectedIndex(initialKey)
        }
    }, [initialKey, list.length])

    const setSelectedKey = (key) => {
        if (key >= 0 && key < list.length) {
            setSelectedIndex(key)
        } else {
            console.warn(`Invalid key: ${key}. It should be between 0 and ${list.length - 1}`)
        }
    };

    return [list[selectedIndex], setSelectedKey]
}