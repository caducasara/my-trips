import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: #06092b;
  color: #fff;
  text-align: center;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`
export const Logo = styled.img`
  width: 25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  width: min(80rem, 100%);
`

export const Illustration = styled.img`
  width: min(40rem, 100%);
`
