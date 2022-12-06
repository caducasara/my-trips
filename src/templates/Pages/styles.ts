import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  padding: 0 2rem;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: 2rem;
    line-height: var(--medium);
  }
`
