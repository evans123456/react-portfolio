import React , { Component } from 'react'
import {Grid , Cell} from 'react-mdl'
import './../App.css'
import {Link} from 'react-router-dom';

class Landing extends Component{


    render(){
        return(

            <div style={{ width:'100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <img src="https://user-images.githubusercontent.com/11985549/28127746-9f32e1ec-66fb-11e7-827b-491f6835679e.png" alt='avatar' className='avatar-img'/>
                <div className="banner-text">
                    <h1>Web Developer</h1>
                    
                    <hr/>

                    

                    <p>HTML/CSS | React | C | Python | SQL </p>

                    <div className='social-links'>

                        <Link to='//google.com' rel='noopener noreferrer' target='_blank'>
                        <i class="fab fa-linkedin-in" aria-hidden = 'true'></i>  
                        </Link>

                        <Link to='//github.com/evans123456' rel='noopener noreferrer' target='_blank'>
                        <i class="fab fa-github" aria-hidden = 'true'></i>  
                        </Link>

                        <Link to='//instagram.com/darity100/?hl=en' rel='noopener noreferrer' target='_blank'>
                        <i class="fab fa-instagram" aria-hidden = 'true'></i>  
                        </Link>

                        <Link to='//theevanseyetest.000webhostapp.com/' rel='noopener noreferrer' target='_blank'>
                        <i class="far fa-eye" aria-hidden = 'true'></i>  
                        </Link>
                        
                    </div>

                </div>
                </Grid>
            </div>
            
                
        )
    }
}

export default Landing;