import styled from 'styled-components'
import { colors, heights } from '../../constants/theme'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${heights.BTN_DESKTOP};
  width: ${heights.BTN_DESKTOP};
  background-color: ${colors.DARK};
  border-radius: 6px;
  svg {
    path {
      fill: ${colors.GREEN};
    }
  }
`
const Logo = () => {
  return (
    <StyledWrapper>
      <svg
        width='40px'
        height='40px'
        viewBox='0 0 76 76'
        version='1.1'
        baseProfile='full'
        enableBackground='new 0 0 76.00 76.00'
      >
        <path
          fill='#000000'
          fillOpacity='1'
          strokeWidth='0.2'
          strokeLinejoin='round'
          d='M 19,17L 41.25,17L 54,29.75L 54,37L 50,37L 50,34L 37,34L 37,21L 23,21L 23,55L 34.75,55L 35.25,59L 19,59L 19,17 Z M 41,22.25L 41,30L 48.75,30L 41,22.25 Z M 42,55L 51,55L 50,59L 43,59L 42,55 Z M 49,38L 53,38C 53,38 56,38 56,43L 56,46C 56,46 56,49 60,49L 60,52C 56,52 56,55 56,55L 56,58C 56,63 53,63 53,63L 49,63L 49,60L 51,60C 53,60 53,57 53,57L 53,53.5C 53,50.5343 55.9317,50.5004 55.9988,50.5C 55.9321,50.4996 53,50.4659 53,47.5L 53,44C 53,44 53,41 51,41L 49,41L 49,38 Z M 44,38L 44,41L 42,41C 40,41 40,44 40,44L 40,47.5C 40,50.4659 37.0678,50.4996 37.0012,50.5C 37.0683,50.5004 40,50.5343 40,53.5L 40,57C 40,57 40,60 42,60L 44,60L 44,63L 40,63C 40,63 37,63 37,58L 37,55C 37,55 37,52 33,52L 33,49C 37,49 37,46 37,46L 37,43C 37,38 40,38 40,38L 44,38 Z '
        />
      </svg>
    </StyledWrapper>
  )
}

export default Logo
