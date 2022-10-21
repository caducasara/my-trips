import * as S from './styles'

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>Carlos Casara</S.Title>
      <S.Description>
        Welcome to my portfolio! Here you can find some projects that developed,
        you can learn a little more about my career and follow my studies as a
        developer 😄.
      </S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Desenvolvedor de frente para uma tela de computador com algum código."
      />
    </S.Wrapper>
  )
}
