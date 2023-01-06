import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import LogoHBO from '../assets/logo.png';
import profileOne from '../assets/profileOne.png';
import profileTwo from '../assets/profileTwo.png';
import profileThree from '../assets/profileThree.png';
import profileFour from '../assets/profileFour.png';
import { GlobalStyle } from '../styles/global';
import { Container, LogoAndWatchingName, ProfileAccount, ManageProfile, } from '../styles/style';

export default function Home() {

  const [ pageYPosition, setPageYPosition ] = useState(0);

  function getPageYAfterScroll(){
      setPageYPosition(window.scrollY);
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll',getPageYAfterScroll)
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Website utilizando NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Container>
        <LogoAndWatchingName isScrolling={!!(pageYPosition >= 10)} >
          <div className='logo'>
            <Image className='image-logo' src={LogoHBO} alt=""/>
          </div>
          <div className='name-watching'>
              <h2>Quem está assistindo?</h2>
          </div>
        </LogoAndWatchingName>
        <ProfileAccount>
          <div className='profile'>
            <Image className='image-profile' src={profileOne} alt="" />
            <h3 className='name-profile'>jonatas</h3>
          </div>
          <div className='profile'>
            <Image className='image-profile' src={profileTwo} alt="" />
            <h3 className='name-profile'>marcelo</h3>
          </div>
          <div className='profile'>
            <Image className='image-profile' src={profileThree} alt="" />
            <h3 className='name-profile'>otis</h3>
          </div>
          <div className='profile'>
            <Image className='image-profile' src={profileFour} alt="" />
            <h3 className='name-profile'>Elieverton G.</h3>
          </div>
          <div className='profile'>
            <Image className='image-profile' src={profileFour} alt="" />
            <h3 className='name-profile'>bren bren</h3>
          </div>
        </ProfileAccount>
        <div className='flexgrow-fix'></div>
        <ManageProfile>
          <h4 className='profile-manager-text'>Gerenciar Perfis</h4>
        </ManageProfile>
      </Container>
    </>
  )
}
