import React from 'react'
import styled from 'styled-components'

const StyledImg=styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:60%;
`

const Home=(props)=> {

    return (
        <div>

            <StyledImg src='blog-image.jpg' alt='photo' class="center"/>

        </div>
    )
}

export default Home