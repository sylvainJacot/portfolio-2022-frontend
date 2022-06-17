// TUTO FOUND ON : https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
import styled  from 'styled-components';

export default function ThemeToggler({theme,  toggleTheme }) {

    return (
    
       <>
        <Button onClick={toggleTheme}>Switch Theme</Button>
       </>
    )
}


const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem;
`
