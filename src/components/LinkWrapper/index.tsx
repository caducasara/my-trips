import Link from 'next/link'

import * as S from './styles'

interface LinkWrapperPrps {
  href: string
  children: React.ReactNode
}

export const LinkWrapper = ({ href, children }: LinkWrapperPrps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}
