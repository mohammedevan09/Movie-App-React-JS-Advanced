import React, { useState } from 'react'

import './videosSection.scss'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import VideoPopup from '../../../components/videoPopup/VideoPopup'
import Img from '../../../components/lazyLoadImage/Img.jsx'
import { PlayIcon } from '../PlayBtn'

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState(null)

  // console.log(data?.results)

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    )
  }

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!data?.results || data?.results.length === 0 ? (
          <div className="FailedResult">
            {' '}
            Sorry, No official videos here for this movie!
          </div>
        ) : (
          <>
            {!loading ? (
              <div className="videos">
                {data?.results?.map((video) => (
                  <div
                    className="videoItem"
                    key={video?.id}
                    onClick={() => {
                      setVideoId(video?.key)
                      setShow(true)
                    }}
                  >
                    <div className="videoThumbnail">
                      <Img
                        src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
                      />
                      <PlayIcon />
                    </div>
                    <div className="videoTitle">{video?.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
              </div>
            )}
          </>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  )
}

export default VideosSection
