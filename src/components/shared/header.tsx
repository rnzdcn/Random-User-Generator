import { cn } from '@/lib/utils.ts'

export default function Header() {
  return (
    <header className={cn([
      'flex justify-center items-center',
      'p-5 sm:p-8 lg:p-12',
      'border-b',
    ])}>
      <h1
        className={cn([ 'text-xl md:text-2xl text-primary text-left', 'font-semibold tracking-wider uppercase italic' ])}
      >
        Random User <span className={cn([ 'text-foreground' ])}>Generator</span>
      </h1>
    </header>
  )
}
