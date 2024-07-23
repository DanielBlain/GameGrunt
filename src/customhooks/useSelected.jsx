import { useState, useEffect } from 'react'

/*****
 * 
 * useSelected
 *      list: (array) of objects, each with a key (string) field
 *      initial: (string) a key for the first object to
 *          be selected by default
 * 
 * returns: [ selected object in list,
 *              setter func to select a new object by key ]
 * 
 * If initial contains the key of an object
 * in the list, that object is selected
 * 
 * The array ought to contain unique keys; otherwise,
 * only the object with the first matching key can
 * ever be selected
 * 
 * */
export function useSelected(list, initial) {

    // Finds the index of the object with the given key
    function findIndexByKey(key) {
        return list.findIndex(item => key.includes(item.key))
    }

    // Return the initial index if the initial key is
    // found in the list; otherwise, return -1
    const [selectedIndex, setSelectedIndex] =
        useState(() => findIndexByKey(initial))

    // Choose a new selected object when the initial
    // key or list changes
    useEffect(() => {
        setSelectedIndex(findIndexByKey(initial))
    }, [list, initial])

    const setKey = (key) => {
        const newIndex = findIndexByKey(key)
        setSelectedIndex(newIndex)
        if (newIndex === -1) {
            console.warn(`Invalid key: ${key}. Please review the list of keys and select one.`)
        }
    }

    return [
        (selectedIndex !== -1) ? list[selectedIndex] : null,
        setKey
    ]
}