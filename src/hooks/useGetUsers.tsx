import { useQuery } from '@tanstack/react-query'
import { Results } from '@/types'
import { useAtomValue } from 'jotai'
import { paginationCounterAtom } from '@/atoms'

export function useGetUsers() {
  const pageNumber = useAtomValue(paginationCounterAtom)

  return useQuery({
    queryKey: [ 'users', pageNumber ],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}?page=${pageNumber}&results=9`)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json()
    },
    refetchOnWindowFocus:false,
    select: ({ results }: { results: Array<Results> }) => {
      return results.map((result) => {
        return {
          img_url: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          email: result.email,
          phone: result.phone,
          gender: result.gender,
          birthdate: result.dob.date,
          age: result.dob.date,
          address: `${result.location.street.number} ${result.location.street.name}, ${result.location.city} ${result.location.country}`,
          nationality: result.nat,
        }
      })
    },
  })
}
