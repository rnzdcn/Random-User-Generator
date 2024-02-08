import MainLayout from '@/components/layout/main-layout'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils.ts'
import { Image } from '@/components/shared/custom-image'
import { useGetUsers } from '@/hooks/useGetUsers.tsx'
import React from 'react'
import SkeletonCard from '@/components/shared/skeleton-card.tsx'

function App() {
  const users = useGetUsers()

  const [ isSmallScreen, setIsSmallScreen ] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 480)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <MainLayout>
      <div
        className={cn([
          'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ',
          'w-full',
          'gap-3.5 lg:gap-8',
        ])}
      >

        {
          users.isLoading && Array.from([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], (key) => <SkeletonCard key={key} />)
        }

        {
          users.data && Array.from(users.data, (user, key) => (
            <Card key={key}>
              <CardContent>
                <div className={cn([ 'grid grid-cols-3', 'gap-2.5' ])}>
                  <div className={cn([ 'flex flex-col items-center justify-center gap-2.5' ])}>
                    <Image
                      className={cn([ 'w-20 h-20' ])}
                      src={user.img_url}
                      alt={'User Picture'}
                    />
                    <h2
                      className={cn([ 'text-xl font-semibold text-center text-primary', 'hidden md:block' ])}>{user.name}</h2>
                  </div>

                  <div className={cn([ 'col-span-2', 'flex flex-col justify-center items-start gap-2.5' ])}>
                    <h2 className={cn([ 'text-xl font-semibold text-center text-primary', 'md:hidden' ])}>{user.name}</h2>

                    <div className={cn([ 'flex gap-2.5 items-center ' ])}>
                      <Image
                        className={cn([ 'w-5 h-5' ])}
                        src={'/svg/mail.svg'}
                        alt={'Mail Icon'}
                      />

                      <h4>{isSmallScreen && user.email.length > 20 ? `${user.email.substring(0, 17)} ...` : user.email}</h4>
                    </div>

                    <div className={cn([ 'flex gap-2.5 items-center flex-wrap' ])}>
                      <Image
                        className={cn([ 'w-5 h-5' ])}
                        src={'/svg/phone.svg'}
                        alt={'Phone Icon'}
                      />

                      <h4>{user.phone}</h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </MainLayout>
  )
}

export default App
