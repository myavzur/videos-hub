import { ChangeEvent, useState } from "react"

import { useDebounce } from "@/hooks/useDebounce"
import { videoApi } from "@/store/slices/api/videos.api"

export const useSearch = (delayBeforeRequest: number) => {
  const [ term, setTerm ] = useState('')
  const termDebounced  = useDebounce(term, delayBeforeRequest)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const response = videoApi.useGetVideoByTermQuery(termDebounced, {
    skip: !termDebounced,
    selectFromResult: ({data, ...rest}) => ({
      data: data?.slice(0, 4),
      ...rest
    })
  })

  return { handleSearch, term, termDebounced, response }
}