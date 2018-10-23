import React,{Component} from 'react'
import LineChart from '../component/charts/Linechart'
import '../style/home.css'
import Resource from '../component/resources'
import Benefits from '../component/benefits'
import Evolution from '../component/evolution'
import Roadmap from '../component/roadmap'
import Network from '../component/network'
import Wallet from '../component/wallet'
import Team from '../component/team'
import Upcoming from '../component/upcoming'
import Footer from '../component/footer'
import Countdown from '../component/Countdown'
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';
class Home extends Component
{
    render(){
        const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
     
                    
        return(
            
           <div>
                <div className=" container-fluid home ">
                    <div className="container secon ">
                        <div className="row contain">
                            <div className="col-xl-6">
                            <ScrollAnimation animateIn='flipInY'animateOut='flipOutY'>
                            <h1 className="bounce">Secure and Anonymous<br/> Cryptocurrency</h1><br/><br/>

                           </ScrollAnimation>
                                    <button className="btn btn-lg hvr-bounce-to-top animated slideInUp">
                                        <Link  to="/registration">GET STARTED</Link>
                                        
                                    </button>  
                                                           
                            </div>
                           

                            <div className="col-xl-6 animated  ">
                            <ScrollAnimation  animateIn='bounceInRight'animateOut='bounceOutLeft'>
                                <img className="img-fluid " src={require('../asset/pic1.png')}/>
                                </ScrollAnimation>
  
                            </div>

                        </div>
                        
                    </div>
                </div>  
                 <Resource/>
                <div>
                     <h2>ICO SALE END IN</h2>
                      <Countdown date={`${year}-12-24T00:00:00`} />
                 </div>
                 <Benefits/>
                 <div>
                     <h2 style={{marginTop:20}}>Evolution</h2>
                     <Evolution/>

                 </div>
                 <Roadmap/>
                 <div>
                     <br/><h2 >Growing Global Network</h2>
                 <Network/>

                 </div>
                 <div>
                    <h2 className="">ATcoin Wallets</h2>
                     <Wallet/>
                </div>
                 <div>
                     <h2>Charts</h2>
                 <LineChart/>

                 </div>
                 <Team/> 
                 <div>
                 <h2 >Upcoming Events</h2>
                 <Upcoming/> 

                 </div>

                 <Footer/>
            </div>   


        );
    }

}
export default Home