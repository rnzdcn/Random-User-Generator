import { useAtom } from 'jotai'
import { paginationCounterAtom } from '@/atoms'
import { cn } from '@/lib/utils.ts'
import { Image } from '@/components/shared/custom-image.tsx'
import React from 'react'

export default function Pagination() {
  const [ page, setPage ] = useAtom(paginationCounterAtom)

  React.useEffect(() => {
    const storedPage = localStorage.getItem('page')
    if (storedPage) {
      setPage(JSON.parse(storedPage))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page))
  }, [ page ])

  function onChangePage(count: number) {
    setPage((prev) => {
      const newPage = prev + count
      if (newPage < 1) {
        return 1
      }
      return newPage
    })
  }

  return (
    <footer
      className={cn([
        'pagination',
        'fixed bottom-0 left-0 z-50',
        'w-full h-[75px]',
        'p-2.5',
        'border bg-background rounded-tl-3xl rounded-tr-3xl',
        'flex items-center justify-center',
      ])}
    >

      <div className={cn([
        'flex items-center gap-2 md:gap-8' ])}
      >
        <button
          disabled={page <= 1}
          onClick={() => onChangePage(-10)}
          className={cn([ 'p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed' ])}
        >
          <Image
            src={'/svg/chevrons-left.svg'}
            alt={'Chevrons Left Icon'}
          />
        </button>

        <button
          disabled={page <= 1}
          onClick={() => onChangePage(-1)}
          className={cn([ 'p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed' ])}
        >
          <Image
            src={'/svg/chevron-left.svg'}
            alt={'Chevron Left Icon'}
          />
        </button>

        <h4 className={cn([ 'text-card-foreground' ])}>{`Page ${page}`}</h4>

        <button
          onClick={() => onChangePage(1)}
          className={cn([ 'p-3 rounded-full' ])}
        >
          <Image
            src={'/svg/chevron-right.svg'}
            alt={'Chevron Right Icon'}
          />
        </button>

        <button
          onClick={() => onChangePage(10)}
          className={cn([ 'p-3 rounded-full' ])}
        >
          <Image
            src={'/svg/chevrons-right.svg'}
            alt={'Chevrons Right Icon'}
          />
        </button>
      </div>
    </footer>
  )
}
