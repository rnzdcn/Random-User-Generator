import { cn } from '@/lib/utils.ts'
import { ChildrenType } from '@/types'
import Header from '@/components/shared/header.tsx'
import Pagination from '@/components/shared/pagination.tsx'

export default function MainLayout({ children }: ChildrenType) {
  return (
    <main className={cn([
      'flex flex-col',
      'min-h-screen',
    ])}>

      <Header />

      <section
        className={cn([ 'content', 'relative', 'flex-1', 'bg-background', 'text-foreground', 'pb-[100px] pt-8 px-4 lg:px-16 lg:pt-16' ])}>
        {children}
      </section>

      <Pagination />
    </main>
  )
}
