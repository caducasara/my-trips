import { LinkWrapper } from '../../components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

export interface PageTemplateProps {
  heading: string
  body: string
}

export const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}
