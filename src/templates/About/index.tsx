import { LinkWrapper } from '../../components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

export const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <S.Heading>About page</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          dictum dui, a tempus justo. Ut odio enim, eleifend non neque vitae,
          egestas luctus sapien. Morbi vehicula justo id finibus lobortis.
          Aenean sollicitudin tincidunt arcu, nec egestas orci. Curabitur libero
          sagittis vel purus non, sagittis lobortis leo. Proin molestie nisi ex,
          vitae malesuada elit finibus eget. Vivamus mollis sodales imperdiet.
          hac habitasse platea dictumst.
        </p>
      </S.Body>
    </S.Content>
  )
}
