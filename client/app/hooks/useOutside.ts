import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type UseOutsideResult = [
	ref: any, 
	isVisible: boolean, 
	setVisible: Dispatch<SetStateAction<boolean>>
]

export const useOutside = (initialVisible = false): UseOutsideResult => {
	const [ isVisible, setVisible ] = useState(initialVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false)
		}
	}

	useEffect(() => {		
		document.addEventListener('click', handleClickOutside, false)

		return () => {
			document.removeEventListener('click', handleClickOutside, false)
		}
	}, [])

	return [ ref, isVisible, setVisible ]
}
