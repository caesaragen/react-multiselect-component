import { useState } from 'react'
import { Select } from './Select'

const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
]

function App() {

  return (
    <Select options={options}/> 
  )
}

export default App
