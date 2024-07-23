import { useState, useEffect } from 'react'

/*****
 * 
 * useSelected
 *      list: (array) of objects, each with a key (string) field
 *      initial: (string) a key for the first object to
 *          be selected by default
 *      orZero: (boolean) if true, no objects may be selected, in
 *          which case the "selected object" is null
 * 
 * returns: [ selected object in list,
 *              setter func to select a new object by key ]
 * 
 * If initial contains the key of an object
 * in the list, that object is selected right away
 * 
 * NOTE: list ought to contain unique keys; otherwise,
 * only the object with the first matching key can
 * ever be selected
 * 
 * */
export function useSelectedOne(list, initial, orZero=false) {

    // Return the initial index if the initial key is
    // found in the list; otherwise, return -1
    const [selectedIndex, setSelectedIndex] =
        useState(() => list.findIndex(queried => initial.includes(queried.key)))

    // Choose a new selected object when the initial
    // key or list changes
    useEffect(() => {
        setSelectedIndex(list.findIndex(queried => initial.includes(queried.key)))
    }, [list, initial])

    const setKey = (key) => {
        let newIndex = list.findIndex(queried => queried.key === key)
        if (!orZero && newIndex === -1) {
            newIndex = 0
        }
        setSelectedIndex(newIndex)
        if (newIndex === -1 && !orZero) {
            console.warn(`Invalid key: ${key}. Please review the list of keys and select one.`)
        }
        console.log(list[newIndex])
    }

    return [
        (selectedIndex !== -1) ? list[selectedIndex] : null,
        setKey
    ]
}