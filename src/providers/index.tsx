import { ChildrenType } from '@/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai/index'

const queryClient = new QueryClient()

export default function Providers({ children }: ChildrenType) {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </JotaiProvider>
  )
}
