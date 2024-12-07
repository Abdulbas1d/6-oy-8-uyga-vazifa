import React, { useState } from 'react'
import './index.css'

function TwoPage() {
  const [bookName, setBookName] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [datas, setDatas] = useState([])

  function validate() {
    if (!bookName) {
      alert("Kitob nomini kiritishingiz kerak!")
      return false
    }

    if (!authorName) {
      alert("Muallif ismini kiritishingiz kerak!")
      return false
    }

    return true
  }

  function handleAddBook(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const newDatas = {
      id: Date.now(),
      bookName: bookName,
      authorName: authorName,
      isRead: false,
    }

    setDatas([...datas, newDatas])

    setBookName("")
    setAuthorName("")
  }

  function handleChange(bookId) {
    setDatas((prevDatas) =>
      prevDatas.map((item) =>
        item.id == bookId ? { ...item, isRead: !item.isRead }
          : item
      )
    )
  }

  return (
    <div className='container'>
      <h2 className='titleOne'>Howework Two</h2>

      <form className="form">
        <label htmlFor="book">Kitob nomi:</label>
        <input value={bookName} onChange={(e) => { setBookName(e.target.value) }} id='book' name='book' type="text" placeholder='Enter book name...' />

        <label htmlFor="name">Muallif Ismi:</label>
        <input value={authorName} onChange={(e) => { setAuthorName(e.target.value) }} id='name' name='name' type="text" placeholder='Enter author name...' />

        <button onClick={handleAddBook} className="buttonOne">Add Book</button>
      </form>

      <div className="books">
        {
          datas && datas.map((value, index) => (
            <div key={index} className="book">
              <p><strong>Kitob nomi:</strong>{" "}{value.bookName}</p>
              <p><strong>Muallif Ismi:</strong>{" "}{value.authorName}</p>
              <button onClick={() => handleChange(value.id)}className={`buttons ${value.isRead ? 'read' : 'unread'}`}>{value.isRead ? "O'qilgan" : "O'qilmagan"}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TwoPage
