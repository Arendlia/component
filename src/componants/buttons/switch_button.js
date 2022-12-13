import React from 'react'
import './button.scss';


import { ThemeContext, themes } from './../../themes/theme'


function SwitchButton() {
    const [darkMode, setDarkMode] = React.useState(true);
        return(
            <ThemeContext.Consumer>
            {({ changeTheme }) => (
                <label className="switch">
                <input type="checkbox" id="checkbox-toggle"
                
                onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                }}/>
                <span className="slider round"></span>
                </label>
             )}
          </ThemeContext.Consumer>
        );
    
}export default SwitchButton;