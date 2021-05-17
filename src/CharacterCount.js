import { useRecoilValue } from 'recoil'
import { charCountState } from './Selectors'

const CharacterCount = () => {
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}
export default CharacterCount