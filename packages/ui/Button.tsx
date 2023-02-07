import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
`

export const Button = () => {
  return <StyledButton>Kamity</StyledButton>
}
