import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface UseOutsideResult {
	ref: any
	isShow: boolean
	setShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisible = false): UseOutsideResult => {
	const [isShow, setShow] = useState(initialVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return document.removeEventListener('click', handleClickOutside, true)
	})

	return { ref, isShow, setShow }
}
