import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'

export default function AIButton() {
    
    //AI generated page state
    const [AIPage, setAIPage] = useState(true);

    function handleClick() {
        alert('generate page')
    }
    return(
        <CustomButton onClick={() => handleClick()}>
            Ask AI to generate more looks
        </CustomButton>
    )
}

function Pages() {
    <BrowserRouter>

    </BrowserRouter>
}

const CustomButton = styled(ButtonUnstyled)`
  font-weight: bold;
  border-style: solid;
  border-width: 4px;
  border-color: red;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin: 15px;

  &:hover {
    background-color: red;
  }
`;