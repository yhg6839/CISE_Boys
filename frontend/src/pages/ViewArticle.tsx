import { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ViewArticle() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getArticles')
    .then(articles => setArticles(articles.data))
    .catch(err => console.log(err))
  }, [])

  return (
      <div className = "w-100 vh-100 d-flex justify-content-center align-items-center">
        <div className = "w-100">
        <table className = "table">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Authors
              </th>
              <th>
                Source
              </th>
              <th>
                Publication Year
              </th>
              <th>
                DOI
              </th>
              <th>
                Claim
              </th>
              <th>
                Evidence
              </th>
            </tr>
          </thead>
          <tbody>
            {
              articles.map(articles => {
                return <tr>
                  <td>{articles.title}</td>
                  <td>{articles.authors}</td>
                  <td>{articles.source}</td>
                  <td>{articles.pubyear}</td>
                  <td>{articles.doi}</td>
                  <td>{articles.claim}</td>
                  <td>{articles.evidence}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        </div>
      </div>

  )
}

export default ViewArticle