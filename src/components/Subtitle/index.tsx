import { Container, Content } from './styles'

export const Subtitle = () => {
  return (
    <Container>
      <Content>
        <img
          src="/img/blue_marker.png"
          alt="Ponteiro para demarcar localização no mapa de cor azul"
        />
        <span>Marker para lugares que já foram visitados por mim.</span>
      </Content>
      <Content>
        <img
          src="/img/red_marker.png"
          alt="Ponteiro para demarcar localização no mapa de cor vermalha"
        />
        <span>Marker para lugares que ainda não foram visitados por mim.</span>
      </Content>
    </Container>
  )
}
