import React, { useEffect, useState } from 'react'
import './index.css'
import dataJson from '../../assets/data.json'

function FourPage() {
  const [json, setJson] = useState([])
  const [workForFilter, setWorkForFilter] = useState("")
  const [dataNotFound, setDataNotFound] = useState(false)

  useEffect(() => {
    setJson(dataJson)
  }, [])

  function handleFilterTitle(event) {
    const inputValue = event.target.value
    setWorkForFilter(inputValue)

    const filterData = dataJson.filter(item =>
      item.title.toLowerCase().includes(inputValue)
    )

    if (filterData.length == 0) {
      setDataNotFound(true)
    } else {
      setDataNotFound(false)
    }

    setJson(filterData)
  }

  return (
    <div className='container'>
      <h2 className='titleOne'>Howework Four</h2>

      <form className="form">
        <label htmlFor="work">Biror bir ma'lumotni kirgizing!</label>
        <input onChange={handleFilterTitle} id='work' name='work' type="text" placeholder='Enter for filter work...' />
      </form>

      <div className="cards">
        {
          dataNotFound ? <p>Siz qidirayotgan ishingiz bu yerda yo'q!</p> : ''
        }

        {
          json && json.map((value, index) => (
            <div key={index} className="cardOne">
              <span>{value.id}</span>
              <p><strong>Nomi:</strong>{" "} {value.title}</p>
              <p><strong>Tana:</strong>{" "} {value.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FourPage
