import React from 'react';
import styled from 'styled-components';

import { ColorModeContext } from '../../../contexts/ColorContext';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineBrightnessLow } from 'react-icons/md';

export const StyledToggleButton = styled.div`
  display: flex;
  align-items: center;
  /* The switch - the box around the slider */
  label.switch {
    background-color: inherit;
    border: none;
    background-color: inherit;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  label.switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  span.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.backgroundBase || '#181818'};
    border: 1px solid ${({ theme }) => theme.borderBase};
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  span.slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    /* cor bolinha */
    background-color: ${({ theme }) => theme.borderBase};
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .darkMode {
    position: absolute;
    left: 35px;
    bottom: 8px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .lightMode {
    position: absolute;
    left: 8px;
    bottom: 8px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  input:checked + span.slider {
    background-color: ${({ theme }) => theme.backgroundBase || '#181818'};
  }

  input:focus + span.slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.backgroundBase || '#181818'};
  }

  input:checked + span.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  span.slider.round {
    border-radius: 34px;
  }

  span.slider.round:before {
    border-radius: 50%;
  }

  svg {
    color: ${({ theme }) => theme.textColorBase || '#222222'};
  }
`;

export default function ToggleButton() {
  const colorContext = React.useContext(ColorModeContext);

  return (
    <>
      <StyledToggleButton>
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => {
              colorContext.themeToggler();
            }}
          />
          <span className="slider round">
            {colorContext.theme === 'light' ? <MdOutlineBrightnessLow className="lightMode" /> : <MdOutlineDarkMode className="darkMode" />}
          </span>
        </label>
      </StyledToggleButton>
    </>
  );
}
