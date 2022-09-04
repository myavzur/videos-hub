import { useDebounce } from "@/hooks/useDebounce"
import { videoApi } from "@/store/slices/api/videos.api"
import { ChangeEvent, useState } from "react"

export const useSearch = (delayBeforeRequest: number) => {
  const [term, setTerm] = useState('')
  const debouncedValue  = useDebounce(term, delayBeforeRequest)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const response = videoApi.useGetVideoByTermQuery(debouncedValue, {
    skip: !debouncedValue,
    selectFromResult: ({data, ...rest}) => ({
      data: data?.slice(0, 4),
      ...rest
    })
  })

  return { handleSearch, term, response }
}