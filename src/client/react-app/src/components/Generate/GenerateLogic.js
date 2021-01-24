import { useState } from 'react'
import axios from '../../axios'

function GenerateLogic() {
  const [link, setlink] = useState('init')

  const generateReport = async () => {
    setlink('')
    const request = await axios.put('/api/v1/report')
    console.log(request.data)
    setlink(request.data.link)
  }

  return { link, generateReport }
}

export default GenerateLogic
