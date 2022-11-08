import styled from 'styled-components';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineBrightnessLow } from 'react-icons/md';

export const StyledToggleButton = styled.div`
  display: flex;
  align-items: center;
  /* The switch - the box around the slider */
  .switch {
    background-color: inherit;
    border: none;
    background-color: inherit;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccc; */
    border: 1px solid ${({ theme }) => theme.border};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    /* background-color: white; */
    background-color: #dbd5d5;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .darkMode {
    position: absolute;
    left: 35px;
    bottom: 8px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .lightMode {
    position: absolute;
    left: 8px;
    bottom: 8px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #5e5c5c;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default function ToggleButton({ themeToggler, theme }) {
  return (
    <>
      <StyledToggleButton>
        <label className="switch">
          <input type="checkbox" onClick={themeToggler} />
          <span className="slider round">
            {theme === 'light' ? <MdOutlineDarkMode className="darkMode" /> : <MdOutlineBrightnessLow className="lightMode" />}
          </span>
        </label>
      </StyledToggleButton>
    </>
  );
}
