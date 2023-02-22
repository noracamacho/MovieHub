import { useEffect } from 'react'

export const useTabTitle = (title) => {
    useEffect(() => {
        document.title= `${title} / MovieHub`;
      })
  return null;
}
