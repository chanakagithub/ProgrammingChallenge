import { useState } from 'react'
import axios from '../../axios'

function ReportLogic() {

  const [alphabetical_count, setalphabetical_count] = useState('')
  const [real_numbers_count, setreal_numbers_count] = useState('')
  const [integers_count, setintegers_count] = useState('')
  const [alphanumerics_count, setalphanumerics_count] = useState('')

  const getReport = async () => {
    const response = await axios.get('/api/v1/report')

    setalphabetical_count('Alphabetical String: ' + response.data.alphabetical_count)
    setreal_numbers_count('Real Numbers: ' + response.data.real_numbers_count)
    setintegers_count('Integers: ' + response.data.integers_count)
    setalphanumerics_count('Alphanumerics: ' + response.data.alphanumerics_count)
  }

  return { alphabetical_count, real_numbers_count, integers_count, alphanumerics_count, getReport }
}

export default ReportLogic
