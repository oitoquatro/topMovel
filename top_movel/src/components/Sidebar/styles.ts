import styled from 'styled-components'

export const Container = styled.aside`
background-color: ${({ theme }) => theme.colors.gray400};
width: 13rem;
padding: 2rem 2rem;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;

nav {
  flex: 1;
width: 100%;
height: 100%;

ul {
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 3rem;
}

li {
a{
width: fit-content;
position: relative;
padding-left: 1.875rem;
padding-right: 1.875rem;
display: flex;
align-items: center;
gap: 2rem;


svg {
fill: ${({ theme }) => theme.colors.white};
width: 4rem;
height: 4rem;
transition: fill 0.3s;
}

span {
font-size: 1rem;
font-weight: 500;
color: ${({ theme }) => theme.colors.gray800};
transition: color 0.3s;
}

&.active {
&::after {
content: '';
position: absolute;
left: 0;
top: 50%;
bottom: 0;
transform: translateY(-50%);
background-color: ${({ theme }) => theme.colors.red};
width: 7px;
height: calc(100% + 20px);
border-radius: 0 5px 5px 0;
        }
      }
    }
  }
}

`
