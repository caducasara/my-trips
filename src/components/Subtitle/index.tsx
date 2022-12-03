import { Container, Content } from './styles'

export const Subtitle = () => {
  return (
    <Container>
      <Content>
        <img
          src="/img/blue_marker.png"
          alt="Ponteiro para demarcar localização no mapa de cor azul"
        />
        <span>Marker for places that have already been visited by me.</span>
      </Content>
      <Content>
        <img
          src="/img/red_marker.png"
          alt="Ponteiro para demarcar localização no mapa de cor vermalha"
        />
        <span>Marker for places that haven't been visited by me yet.</span>
      </Content>
    </Container>
  )
}
