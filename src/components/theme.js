/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { FiMoon, FiSun } from "react-icons/fi"

const Theme = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div className="carto">
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
        aria-label="Theme Color"
      >
        <div 
        // sx={themeStyles.modeIcons} 
        className="themer" >
          <div>{colorMode === "default" ? <FiMoon /> : <FiSun />}</div>
          <div className="themetext">
            {colorMode === "default" ? "dark" : "light"}
          </div>
        </div>
      </button>
    </div>
  )
}
export default Theme


