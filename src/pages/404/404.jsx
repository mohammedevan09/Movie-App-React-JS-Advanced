import React from 'react'
import './404.scss'
import Img from '../../components/lazyLoadImage/img'
import noResults from '../../assets/no-results.png'
const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <Img src={noResults} className="noResult" />
    </div>
  )
}

export default PageNotFound
