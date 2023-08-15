import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import "../styles/Home.css"


function Home() {
  return (
  <div className='home'>
    <div className='about'>
      <h2>Hello, My Name is Dahn Bey</h2>
      <div className='prompt'><p>Thanks for swinging by! I'm an energetic Full-Stack Developer who believes the magic happens where code meets creativity. With a solid foundation in JavaScript, SQL, HTML, CSS, and various other tech tools, I enjoy solving complex problems and turning them into simple, elegant solutions.
        </p>
        <LinkedInIcon />
        <GithubIcon />
        <EmailIcon/>
        </div>
    </div>
   <div className='skills'>
    <h1> Skills</h1>
    <ol className='list'></ol>
    <li className='item'>
      <h2>Front-End</h2>
      <span>HTML, CSS, JavaScript, React, GraphQL,PWA</span>
    </li>
    <li className='item'>
      <h2>Back-End</h2>
      <span>Node.js, Express, SQL, MySQL, mongoDB </span>
    </li>
    <li className='item'>
      <h2>Languages</h2>
      <span>JavaScript, Java</span>
    </li>
    
     </div>
   
   </div>
  
   
  );
  
}

export default Home