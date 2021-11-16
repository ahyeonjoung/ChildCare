import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import FadeIn from 'react-fade-in'
import ProfessorImage from './professor.jpg'
import ProfessorImage3 from './professor3.jpg'
import ewha1 from './ewha1.jpeg'
import ewha2 from './ewha2.jpg'
import ewha3 from './ewha3.jpg'
import ewha4 from './ewha4.jpg'
import dic1 from './dic1.png'
import dic2 from './dic2.png'
import Parking from './parking.png'
import ParkingEng from './parkingEng.png'
import img10 from './parking/1.0.png'
import img10eng from './parking/1.0eng.png'
import img11 from './parking/1.1.jpg'
import img12 from './parking/1.2.jpg'
import img13 from './parking/1.3.jpg'
import img20 from './parking/2.0.png'
import img30 from './parking/3.0.png'
import img40 from './parking/4.0.png'
import img20eng from './parking/2.0eng.png'
import img30eng from './parking/3.0eng.png'
import img40eng from './parking/4.0eng.png'
import { Typography, Divider } from 'antd'
import SimpleImageSlider from 'react-simple-image-slider'
import 'antd/dist/antd.css'
import AmChartEx from './AmchartsEX'
import AmchartsEng from './AmchartsEng'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
const ContentsWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
`

const WelcomeWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  border: lightgray 1px solid;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`

const ParkingWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DirectionWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
`
const ChartWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  border: lightgray 1px solid;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  margin-left: 5%;
  justify-content: center;
  border-radius: 10px;
  margin-top: 5%;
`
const ColumnParkingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  margin-left: 5%;
  justify-content: center;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const WelcomeImage = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 10px;
`

const DicImage = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 450px;
  height: 400px;
  @media (max-width: 1224px) {
    width: 350px;
    height: 300px;
  }
`
const ParkImage = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
  height: 350px;
  @media (max-width: 1224px) {
    width: 350px;
    height: 300px;
  }
`
const ParkingImage = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 550px;
  height: 500px;
  @media (max-width: 1224px) {
    width: 450px;
    height: 400px;
  }
`
const WelcomeText = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  background-color: rgba(237, 237, 237, 0);
  margin-right: 5%;
`
const ParkingText = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  background-color: rgba(237, 237, 237, 0);
  margin-right: 5%;
`
const RowImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const images = [{ url: ewha1 }, { url: ewha2 }, { url: ewha3 }, { url: ewha4 }]
const images1 = [{ url: img11 }, { url: img12 }, { url: img13 }]

function DetailPage({ num, lang }) {
  const { Title, Paragraph, Text, Link } = Typography

  if (num == 1) {
    return (
      <Wrapper>
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginTop: '5%',
            marginLeft: '5%',
            marginBottom: '3%',
          }}>
          {lang == 'kor' ? '연구소 소개' : 'Lab '}
        </Title>
        <ContentsWrapper>
          <ChartWrapper>
            {lang == 'kor' ? <AmChartEx /> : <AmchartsEng />}
          </ChartWrapper>
        </ContentsWrapper>
        <ContentsWrapper2>
          <Fade cascade>
            <Paragraph style={{ marginLeft: '10%' }}>
              <ul style={{ fontFamily: 'payboocBold' }}>
                <li style={{ marginBottom: '10px' }}>
                  {lang == 'kor'
                    ? '2018.12. 맞춤형 기술사업화 지원사업 선정 및 비즈니스모델 컨설팅(이화여자대학교 산학협력단)'
                    : '2018.12. Selected as a customized technology commercialization support project and conducted business model consulting (Ewha Womans University-Industry Collaboration Foundation)'}
                </li>
                <li style={{ marginBottom: '10px' }}>
                  {lang == 'kor'
                    ? '대학 창의적 자산 실용화 지원사업 선정(세종대학교 산학협력단), 사업비 지원'
                    : 'Selected as a university creative asset commercialization support project and received business expense support (Sejong University Industry Academy Cooperation Foundation) '}
                </li>
                <li style={{ marginBottom: '10px' }}>
                  {lang == 'kor'
                    ? '2020.09.01. 예비창업패키지 선정(중소벤처기업부), 사업비 지원'
                    : '2020.09.01. Selected as a preliminary start-up package and received business expense support (Ministry of SMEs and Startups) '}
                </li>
                <li style={{ marginBottom: '10px' }}>
                  {lang == 'kor'
                    ? '2020.11.25. 설립(이화여자대학교 기술지주회사 자회사)'
                    : '2020.11.25. Established business (Subsidiary of Ewha Womans University Technology Holding Company)'}
                </li>
              </ul>
            </Paragraph>
          </Fade>
        </ContentsWrapper2>
        <Divider />
        <ContentsWrapper2>
          <Typography>
            <Fade cascade>
              <Paragraph
                style={{
                  fontFamily: 'payboocBold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}>
                <Title level={5}>
                  {lang == 'kor'
                    ? '1) 신뢰할 수 있는 공인 전문가의 차별화된 언어치료 서비스 제공'
                    : '1) Provide differentiated speech therapy services from trusted and certified experts'}
                </Title>
                {lang == 'kor'
                  ? 'I Say Lab의 대표인 임동선 교수님은 이화여자대학교 언어병리학과 교수이자 한국 1급 언어재활사 및 미국 CCC-SLP(American Speech-Language Hearing Association) 자격증, 그리고 캐나다 Hanene centre의 부모교육 자격증을 보유한 국제적으로 공인된 임상 전문가입니다. I Say Lab에서는 임동선 교수님이 오랜 시간 연구 및 임상을 통해 그 효과를 검증한 근거 기반 치료 서비스를 제공합니다.'
                  : 'Professor Dongsun Yim, CEO of I Say Lab, is a professor of Communication Disorders at Ewha Womans University and an internationally recognized clinical expert with a level 1 Korean SLP certification, US CCC-SLP (American Speech-Language Hearing Association), and a parental education certificate from Hanen Centre in Canada.          I Say Lab provides evidence-based treatment services that Professor Yim has verified through long-term research and clinical trials.'}
              </Paragraph>
              <Paragraph
                style={{
                  fontFamily: 'payboocBold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}>
                <Title level={5}>
                  {lang == 'kor'
                    ? '2) 이중언어아동 특화 치료 서비스 제공'
                    : '2) Provide specialized treatment services for bilingual children'}
                </Title>
                {lang == 'kor'
                  ? 'I Say Lab에서는 공인된 언어재활 전문가가 영어와 한국어 언어치료교육 서비스를 제공합니다. 다문화 가정의 아동, 외국에서 한국으로 돌아와 정착하는 리터니(returnee) 및 외국인, 그리고 부모의 해외 파견, 유학 등으로 외국에 장·단기적으로 거주하는 아동 등 다양한 언어에 노출되는 아동에게 특화된 언어치료교육 서비스를 제공합니다.'
                  : 'With certified experts, I Say Lab provides specialized English and Korean speech-language therapy for children from multicultural families, returnees and foreigners who returned to Korea from abroad, and children who live in foreign countries for a long and short period of time due to their parents’ overseas work and education.'}
              </Paragraph>
              <Paragraph
                style={{
                  fontFamily: 'payboocBold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}>
                <Title level={5}>
                  {lang == 'kor'
                    ? '3) 부모 및 전문가 맞춤형 교육 프로그램 제공'
                    : '3) Provide customized parent and professional education programs'}
                </Title>
                {lang == 'kor'
                  ? 'I Say Lab의 대표인 임동선 교수님은 임상 현장에서 20년 이상 부모를 대상으로 부모교육을 진행해 왔으며, 또한 서울 및 경기 지역의 유아교육 기관에서 부모님들을 대상으로 책읽기 교육 프로그램을 실시하여 그 효과를 검증하였습니다. 부모님들이 자녀를 대상으로, 또 전문가들이 임상 및 교육 현장에서 바로 적용할 수 있는 양질의 정보들을 제공합니다.'
                  : 'Professor Yim, CEO of I Say Lab, has been conducting parental education for parents for more than 20 years in the clinical field, and book reading education programs in   the early childhood education institutions in Seoul and Gyeonggi Province, and she has verified its effectiveness. Also, she provides quality information that parents can apply directly to their children and experts in clinical and educational fields.'}
              </Paragraph>
              <Paragraph
                style={{
                  fontFamily: 'payboocBold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}>
                <Title level={5}>
                  {lang == 'kor'
                    ? '4) 사업화 및 기술 개발 네트워크 확보'
                    : '4) Secure a network for commercialization and technology development'}
                </Title>
                {lang == 'kor'
                  ? 'I Say Lab의 대표인 임동선 교수님이 오랫동안 연구에 기반하여 축적한 지식과 현장에서의 경험을 토대로, 언어치료교육 서비스 제공에 최적화된 온라인 플랫폼을 개발하여 자연발화 음성 빅데이터 구축, 인공지능 활용 진단 및 치료 자동화를 목표로 기술 개발 네트워크를 지속적으로 확보하고 있습니다.'
                  : 'Professor Yim, CEO of I Say Lab, continues to secure a technology development network to build big date of natural speech, diagnose through artificial intelligence, and    provide automating treatment by developing an online platform optimized for language therapy education services.'}
              </Paragraph>
              <Paragraph
                style={{
                  fontFamily: 'payboocBold',
                  marginLeft: '10%',
                  marginBottom: '3%',
                }}>
                <Title level={5}>
                  {lang == 'kor'
                    ? '5) 접근성 높은 유비쿼터스 서비스 제공'
                    : '5) Proovide ubiquitous services with high accessibility'}
                </Title>
                {lang == 'kor'
                  ? 'I Say Lab에서는 임상과 연구를 접목하여 STT(Speech To Text), TTS(Text To Speech) 등 AI 음성인식 기술을 활용한 빅데이터 기반의 언어치료교육 서비스를 실현하고자 합니다. 이를 통해 언제, 어디서나, 누구나 언어치료교육 서비스를 이용할 수 있는 편리한 유비쿼터스 환경을 제공하는 데에 선도적인 역할을 할 것입니다. '
                  : 'I Say Lab aims to realize big data-based speech therapy education services using AI speech recognition technologies such as STT (Speech To Text) and TTS (Text To Speech) by combining clinical and research. This will play a leading role in providing a convenient ubiquitous environment where anyone can use speech therapy education services anytime, anywhere.'}
              </Paragraph>
            </Fade>
          </Typography>
        </ContentsWrapper2>
      </Wrapper>
    )
  } else if (num == 2) {
    return (
      <Wrapper>
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginTop: '5%',
            marginLeft: '5%',
            marginBottom: '3%',
          }}>
          {lang == 'kor' ? '연구원 소개' : 'Researchers'}
        </Title>

        <ContentsWrapper>
          <WelcomeWrapper>
            <Fade cascade>
              <ColumnWrapper>
                <WelcomeImage src={ProfessorImage} />
                <Title
                  level={4}
                  style={{
                    fontFamily: 'payboocExtraBold',
                    textAlign: 'center',
                  }}>
                  {lang == 'kor'
                    ? '임동선(대표, 언어재활사)'
                    : 'Dongsun Yim (CEO, Speech-Language Pathologist) '}
                </Title>
              </ColumnWrapper>
            </Fade>
            <WelcomeText style={{ marginTop: '20px' }}>
              <Fade cascade>
                <Paragraph>
                  <ul style={{ fontFamily: 'payboocBold' }}>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '이화여자대학교 언어병리학과 교수'
                        : 'Professor at Ewha Womans University '}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '언어치료교육 서비스 현장에서 20년 이상 활동 중인 전문 임상가'
                        : 'Professional clinician active in the field of speech-language therapy education service for 20+ years'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '한국 1급 언어재활사, 미국 CCC-SLP, 캐나다 부모교육 자격증 보유'
                        : 'Level 1 Korean-SLP, American CCC-SLP, Canadian parent education certificate holder'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '국제논문 및 국내논문 총 102건 게재: SCI급(9건) 및 SCOPUS(44건), KCI(49건)'
                        : 'Published in a total of 102 international and domestic journals: SCI (9), SCOPUS (44), KCI (49)'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '특허등록 총 6건 보유: 연구를 통해 검증된 언어발달 스크리닝 및 재활 프로그램'
                        : '6 registered patents: language development screening and rehabilitation program verified through research'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '우수 연구 수상 총 15건'
                        : 'Received 15 Outstanding Research Awards'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '이화여자대학교 강의 우수 교원으로 선정(2021년)'
                        : 'Selected as Excellent Lecturer at Ewha Womans University (2021)'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? ' AI 스피커를 활용한 연구 공모전에서 우수상 , 장려상 수상(2020년)'
                        : 'Two Excellence in Research Awards using AI speakers (2020)'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '한국형 온라인 공개 강좌인 K-MOOC 강의는 우수 강좌 Blue Ribbon상 수상(2020, 2021년)'
                        : 'Awarded the Blue Ribbon Award for excellent lectures in the K-MOOC lecture, a Korean-style open online course (2020, 2021)'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '국내에서는 외국인 및 이중언어, 다문화 가정에 언어치료교육 서비스를 제공, 국외의 대상자(캐나다, 미국)에게도 온라인으로 치료 및 교육을 진행하고 있음.'
                        : 'Currently providing speech therapy education services to foreigners, bilingual and multicultural families in Korea, and online treatment and education to overseas families (Canada and USA).'}
                    </li>
                  </ul>
                </Paragraph>
              </Fade>
            </WelcomeText>
          </WelcomeWrapper>

          <WelcomeWrapper>
            <Fade cascade>
              <ColumnWrapper>
                <WelcomeImage src={ProfessorImage3} />
                <Title
                  level={4}
                  style={{
                    fontFamily: 'payboocExtraBold',
                    textAlign: 'center',
                  }}>
                  {lang == 'kor'
                    ? '김신영(사내이사)'
                    : 'Shinyoung Kim (Executive Director) '}
                </Title>
              </ColumnWrapper>
            </Fade>
            <WelcomeText style={{ marginTop: '20px' }}>
              <Fade cascade>
                <Paragraph>
                  <ul style={{ fontFamily: 'payboocBold' }}>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '이화여자대학교 사회학과 졸업'
                        : 'Ewha Womans University, B.A. in Sociology'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '이화여자대학교 언어병리학과 석사'
                        : 'Ewha Womans University, M.A. in Communication Disorders'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '이화여대 언어병리학과 박사 수료'
                        : 'Ewha Womans University, Completed Ph.D. program in Communication Disorders'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '언어재활사(1급)'
                        : 'Level 1 Korean-SLP '}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '평생교육사(2급)'
                        : 'Level 2 Lifelong Educator'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? ' (전) 아이코리아 아동발달교육연구원 언어재활사'
                        : '(Previous) Korean-SLP at Aicorea Research Institute for Child Development and Education'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '(전) 서울탑마음클리닉 소아정신과 언어재활사'
                        : '(Previous) Korean-SLP at Seoul Top Maeum Clinic Pediatric Psychiatry'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '국제 SCOUPS 7건, 국내 KCI 7건, 총 14건의 논문 게재'
                        : 'Published in a total of 14 international and domestic journals: SCOPUS (7), KCI (7) '}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '인문사회학술연구교수 연구비 수주'
                        : 'Received Humanities and Social Sciences Research Professor Research Grant Award'}
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      {lang == 'kor'
                        ? '2020 카카오 공모전 수상: AI 스피커를 활용한 청각장애 부모 대상 이야기 상호작용 교육'
                        : '2020 Kakao Contest Winner: Interactive Storytelling education for Deaf Parents Using AI Speakers'}
                    </li>
                  </ul>
                </Paragraph>
              </Fade>
            </WelcomeText>
          </WelcomeWrapper>
        </ContentsWrapper>
      </Wrapper>
    )
  } else if (num == 3) {
    return (
      <Wrapper>
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginBottom: '5%',
            marginTop: '5%',
            marginLeft: '5%',
          }}>
          {lang == 'kor' ? '연구소 전경' : 'Pictures'}
        </Title>

        <ContentsWrapper>
          <Fade cascade>
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </Fade>
        </ContentsWrapper>
      </Wrapper>
    )
  } else if (num == 4) {
    return (
      <Wrapper>
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginBottom: '5%',
            marginTop: '5%',
            marginLeft: '5%',
          }}>
          {lang == 'kor' ? '이용안내' : 'Service'}
        </Title>
        <ContentsWrapper></ContentsWrapper>
      </Wrapper>
    )
  } else if (num == 5) {
    return (
      <Wrapper>
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginTop: '3%',
            marginLeft: '5%',
          }}>
          {lang == 'kor' ? '오시는 길' : 'Address '}
        </Title>
        <Title
          level={5}
          style={{
            fontFamily: 'payboocExtraBold',
            marginTop: '3%',
            marginLeft: '5%',
            textAlign: 'center',
          }}>
          {lang == 'kor'
            ? '서울특별시 강남구 압구정로 29길 68, 금강아케이드상가 2층'
            : '68, Apgujeong-ro 29-gil, Gangnam-gu, Seoul, Republic of Korea'}
        </Title>
        <Title
          level={5}
          style={{
            fontFamily: 'payboocBold',
            marginLeft: '5%',
            marginBottom: '1%',
            textAlign: 'center',
          }}>
          {lang == 'kor'
            ? '지하철 3호선: 압구정역 1번 출구에서 도보 10분'
            : 'Subway Line number 3: 10 minute walking from Apgujeong Station'}
        </Title>

        <ContentsWrapper>
          <DirectionWrapper>
            <FadeIn>
              <RowImage>
                <DicImage src={dic1} />
                <DicImage src={dic2} />
              </RowImage>
            </FadeIn>
          </DirectionWrapper>
        </ContentsWrapper>
        <Divider />
        <Title
          level={3}
          style={{
            fontFamily: 'payboocExtraBold',
            marginLeft: '5%',
          }}>
          {lang == 'kor' ? '주차안내' : 'Parking'}
        </Title>
        <ContentsWrapper>
          <ParkingWrapper>
            <ColumnWrapper>
              <ParkingImage src={lang == 'kor' ? Parking : ParkingEng} />
            </ColumnWrapper>

            <ParkingText style={{ marginTop: '20px' }}>
              <Fade cascade>
                <Paragraph style={{ fontFamily: 'payboocBold' }}>
                  <Text
                    style={{
                      marginBottom: '10px',
                      fontSize: '16px',
                    }}>
                    {lang == 'kor' ? '1. 공영유료주차장' : '1. Commercial lot'}
                  </Text>
                  <br />
                  <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
                    {lang == 'kor'
                      ? '2. 아이세이연구소 앞 도로 주차'
                      : '2. Parallel parking in front of I Say Lab (No fee)'}
                  </Text>
                  <br />
                  <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
                    {lang == 'kor'
                      ? '3. 압구정 초등학교 앞 도로 주차 '
                      : '3. Parallel parking in front of Apgujeong Elementary School (No fee)'}
                  </Text>
                  <br />
                  <Text style={{ marginBottom: '10px', fontSize: '16px' }}>
                    {lang == 'kor'
                      ? '4. 금강쇼핑센터 앞 도로 주차'
                      : '4. Parallel parking in front of Geumgang Shopping Center (No fee)'}
                  </Text>
                </Paragraph>
              </Fade>
            </ParkingText>
          </ParkingWrapper>
          <Divider />

          <WelcomeWrapper>
            <ColumnParkingWrapper>
              <Fade cascade>
                <Title
                  level={5}
                  style={{
                    fontFamily: 'payboocBold',
                    textAlign: 'center',
                  }}>
                  {lang == 'kor' ? '1. 공영유료주차장' : '1. Commercial lot'}
                </Title>
              </Fade>
              <ParkImage src={lang == 'kor' ? img10 : img10eng} />
            </ColumnParkingWrapper>
            <Fade cascade>
              <RowImage>
                <SimpleImageSlider
                  width={280}
                  height={400}
                  images={images1}
                  showBullets={true}
                  showNavs={true}
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                />
              </RowImage>
            </Fade>
          </WelcomeWrapper>

          <WelcomeWrapper>
            <ColumnParkingWrapper>
              <Title
                level={5}
                style={{
                  fontFamily: 'payboocBold',
                  textAlign: 'center',
                }}>
                {lang == 'kor'
                  ? '2. 아이세이연구소 앞 도로 주차'
                  : '2. Parallel parking in front of I Say Lab (No fee)'}
              </Title>
              <ParkImage src={lang == 'kor' ? img20 : img20eng} />
            </ColumnParkingWrapper>
            <Fade cascade>
              <RowImage>
                <SimpleImageSlider
                  width={280}
                  height={400}
                  images={images1}
                  showBullets={true}
                  showNavs={true}
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                />
              </RowImage>
            </Fade>
          </WelcomeWrapper>
          <WelcomeWrapper>
            <ColumnParkingWrapper>
              <Title
                level={5}
                style={{
                  fontFamily: 'payboocBold',
                  textAlign: 'center',
                }}>
                {lang == 'kor'
                  ? '3. 압구정 초등학교 앞 도로 주차 '
                  : '3. Parallel parking in front of Apgujeong Elementary School (No fee)'}
              </Title>
              <ParkImage src={lang == 'kor' ? img30 : img30eng} />
            </ColumnParkingWrapper>
            <Fade cascade>
              <RowImage>
                <SimpleImageSlider
                  width={280}
                  height={400}
                  images={images1}
                  showBullets={true}
                  showNavs={true}
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                />
              </RowImage>
            </Fade>
          </WelcomeWrapper>
          <WelcomeWrapper>
            <ColumnParkingWrapper>
              <Title
                level={5}
                style={{
                  fontFamily: 'payboocBold',
                  textAlign: 'center',
                }}>
                {lang == 'kor'
                  ? '4. 금강쇼핑센터 앞 도로 주차'
                  : '4. Parallel parking in front of Geumgang Shopping Center (No fee)'}
              </Title>
              <ParkImage src={lang == 'kor' ? img40 : img40eng} />
            </ColumnParkingWrapper>
            <Fade cascade>
              <RowImage>
                <SimpleImageSlider
                  width={280}
                  height={400}
                  images={images1}
                  showBullets={true}
                  showNavs={true}
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                />
              </RowImage>
            </Fade>
          </WelcomeWrapper>
        </ContentsWrapper>
      </Wrapper>
    )
  } else {
    return <div>1입니다.</div>
  }
}
export default DetailPage