import styled from 'styled-components'

const MatchParent = styled.View`
  flex: 1;
  backgroundColor: ${({ backgroundColor }) => backgroundColor || '#fff'};
`

export default MatchParent
