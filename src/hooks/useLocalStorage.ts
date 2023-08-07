import { useState } from 'react'

export function useLocalStorage <T> (itemName:string, initialValue:T) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem: T

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem:T) => {
    const stringifiedTodos = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedTodos)
    setItem(newItem)
  }
  const returnValue: [T, (newItem:T) => void] = [item, saveItem]

  return returnValue
}
