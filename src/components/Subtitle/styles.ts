import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  z-index: 999;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 13px;
    height: 20px;

    @media only screen and (max-width: 768px) {
      width: 9px;
      height: 15px;
    }
  }
  span {
    font-size: 1rem;
    color: var(--background);
    margin-left: 0.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  &:last-child {
    img {
      width: 17px;
      height: 17px;

      @media only screen and (max-width: 768px) {
        width: 13px;
        height: 13px;
      }
    }
  }
`
