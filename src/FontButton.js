import { useRecoilState, useRecoilValue } from 'recoil'
import { fontSizeState } from './Atoms'
import { fontSizeLabelState } from './Selectors'

const FontButton = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState)
  const fontSizeLabel = useRecoilValue(fontSizeLabelState)

  return (
    <>
      <div>Current font size: {fontSizeLabel}</div>

      <button onClick={() => setFontSize(fontSize + 1)} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  )
}

export default FontButton
