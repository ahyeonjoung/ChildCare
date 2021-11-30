import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import BackgroundImage from './Main1.jpg'
import DetailPage from './DetailPage'
import { withRouter } from 'react-router'

const useStyles = makeStyles(theme => ({
  modal: {},
  footer: {
    height: '20vh',
    backgroundColor: '#F9BE00',
    fontFamily: 'payboocBold',
  },
}))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  width: 100%;
`

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 83%;
  height: 370px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-position: center;
  background-color: #f7f7f7;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
  margin-right: 1%;
  height: 100%;
`
const TextColumnWrapper = styled.div`
   display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  font-family: 'payboocExtraBold';
`

const TextWrapper = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 12}px;
  font-weight: ${props => props.weight || 'bold'};
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: rgba(249, 189, 0, 0.8);
  padding:5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    font-size: ${props => props.size - 5 || 12}px;
  }
`

function LabPage({ match }) {
  const [lang, setLang] = useState(match.params.lang)
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const classes = useStyles()
  const [numState, setNumState] = useState(1)
  useEffect(() => setLang(match.params.lang), [match.params.lang])
  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
           
           
          </ImageWrapper>
          <ColumnWrapper>
            <TextColumnWrapper style={{ fontFamily: 'payboocExtraBold' }}>
              <TextWrapper size="19">
                {' '}
                {lang == 'kor' ? '연구소 소개: ' : 'About Lab : '} 
            
                {' '}<br />
                <br />
                {lang == 'kor'
                  ? ' ISayLab을 '
                  : 'Welcome To '}
             
                  {lang == 'kor'
                  ? '소개합니다.'
                  : 'ISayLab'}
              </TextWrapper>
            </TextColumnWrapper>
            <Button
              block
              onClick={() => {
                setNumState(1)
              }}
              style={{
                color: 'black',
                height: '50px',
                borderRadius: '10px',
                fontFamily: 'payboocExtraBold',
                fontSize: '15px',
                backgroundColor: 'rgba(241, 245, 249, 0.7)',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구소 소개' : 'Lab'}
            </Button>
            <Button
              onClick={() => {
                setNumState(2)
              }}
              block
              style={{
                color: 'black',
                height: '50px',
                borderRadius: '10px',
                fontFamily: 'payboocExtraBold',
                fontSize: '15px',
                backgroundColor: 'rgba(241, 245, 249, 0.7)',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구원 소개' : 'Researchers'}
            </Button>
            <Button
              onClick={() => {
                setNumState(3)
              }}
              block
              style={{
                color: 'black',
                height: '50px',
                borderRadius: '10px',
                fontFamily: 'payboocExtraBold',
                fontSize: '15px',
                backgroundColor: 'rgba(241, 245, 249, 0.7)',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구소 전경' : 'Photo'}
            </Button>
            <Button
              onClick={() => {
                setNumState(4)
              }}
              block
              style={{
                color: 'black',
                height: '50px',
                borderRadius: '10px',
                fontFamily: 'payboocExtraBold',
                fontSize: '15px',
                backgroundColor: 'rgba(241, 245, 249, 0.7)',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '이용안내' : 'Service'}
            </Button>
            <Button
              onClick={() => {
                setNumState(5)
              }}
              block
              style={{
                color: 'black',
                height: '50px',
                borderRadius: '10px',
                fontFamily: 'payboocExtraBold',
                fontSize: '15px',
                backgroundColor: 'rgba(241, 245, 249, 0.7)',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '오시는 길' : 'Directions'}
            </Button>
          </ColumnWrapper>
        </RowWrapper>
        <DetailPage num={numState} lang={lang} />
      </Wrapper>

      <div className={classes.footer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: '3vh',
            marginBottom: '3vh',
          }}>
          <img src="/002.png" width="60px" height="60px" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '1.2vh',
            justifyContent: 'center',
          }}>
          <div>대표이메일 isaylab2020@gmail.com</div>
          <div style={{ margin: '0px 1vw' }}>|</div>
          <div>
            주소: 서울특별시 강남구 압구정로 29길 68, 금강아케이드상가 2층{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(LabPage)