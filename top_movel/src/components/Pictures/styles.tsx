import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 4rem;

@media (max-width: 500px) {
  grid-template-columns: 1fr;
}

.environment {
position: relative;
background: ${({ theme }) => theme.colors.gray300};
padding: 1.75rem 1.5rem;
border-radius: 4px;

h2 {
margin-bottom: 0.75rem;
font-weight: 400;
font-size: 1,5rem;
text-align: center;
color: ${({ theme }) => theme.colors.gray700}
}

img {
object-fit: cover;
width: 100%;
height: 20rem;
border-radius: 4px;
margin-bottom: 0.375rem;
}

p {
font-size: 0.875rem;
font-weight: 500;
color: ${({ theme }) => theme.colors.gray700}

}

div {
margin-top:  0.875rem;
display: flex;
align-items: center;
justify-content: space-between;

strong {
font-size: 2rem;
font-weight: 500;
color: ${({ theme }) => theme.colors.gray800}
}


  }
}

`
