import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils.ts'

export default function SkeletonCard() {
  return (
    <div
      className={cn([ 'grid grid-cols-3 gap-2.5', 'animate-pulse w-full h-[180px] p-6', 'rounded-lg shadow-sm shadow-card-foreground' ])}>
      <div className={cn([ 'flex flex-col items-center justify-center gap-2.5' ])}>
        <Skeleton className={cn([ 'w-20 h-20', 'rounded-full' ])} />
        <Skeleton className="h-5 w-full" />
      </div>

      <div className={cn([ 'col-span-2', 'flex flex-col justify-center items-start gap-2.5' ])}>
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-5 w-2/4" />
      </div>


      {/*</div>*/}
    </div>
  )
}
