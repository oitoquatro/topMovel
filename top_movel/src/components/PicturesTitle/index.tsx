import { ReactNode } from 'react'


interface TitleProps {
  children: ReactNode
}


export function EnvironmentsTitle({children}: TitleProps) {

  return <title>{children}</title>
  }
