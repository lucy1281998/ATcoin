import React,{Component} from 'react'
import '../style/team.css'

class Team extends Component
{
    render(){
        return(
            <div className="container ">
            <div className="row team">
                    <div className="col-xl-12">
                    
                    <h2>Team &amp; Advisors</h2>
                    <p className="">With a team of top technology and finance professionals, the nonprofit ATcoin expands access 
                        to low-cost financial services to fight poverty and maximize individual potential.</p>
                        
                     <div className="container-fluid text-center ">
			        	<h1 className="text-center text-white " >Our Team</h1>
					        <div className="row">
						        <div className="col-md-3 col-sm-3 col-lg-3 col-xs-10">
							        <div className="imageBg a">
 								    <img className="image mx-auto d-block" src={require('../asset/user.png')}/>
 								    <h4 className="upperCase fontWeight">MOHAMMAD NASSER SULTAN </h4>
 								    <h4 className="fontWeight green">BUSINESS HEAD</h4>
									 <div className="middle">
    								<div className="text"><i className="fab fa-facebook"></i><i class="fab fa-linkedin"></i></div>
  									</div>
							        </div>
						        </div>
						
						        <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg b">
 								    <img className="image mx-auto d-block img-fluid" src={require('../asset/user.png')}/>
 								    <h4 className="upperCase fontWeight">ROSELLA.R </h4>
 								    <h4 className="fontWeight green">BUSINESS DEVELOPMENT HEAD</h4>
									 <div className="middle">
    								<div className="text"><i className="fab fa-facebook"></i><i class="fab fa-linkedin"></i></div>
  									</div>
							        </div>
						        </div>
                                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg c">
 								    <img className="image mx-auto d-block img-fluid" src={require('../asset/user.png')}/>
 								    <h4 className="upperCase fontWeight">ROSELLA.R </h4>
 								    <h4 className="fontWeight green">BUSINESS DEVELOPMENT HEAD</h4>
									 <div className="middle">
    								<div className="text"><i className="fab fa-facebook"></i><i class="fab fa-linkedin"></i></div>
  									</div>
							        </div>
						        </div>
                                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg d">
 								    <img className="image mx-auto d-block img-fluid" src={require('../asset/user.png')}/>
 								    <h4 className="upperCase fontWeight">ROSELLA.R </h4>
 								    <h4 className="fontWeight green">BUSINESS DEVELOPMENT HEAD</h4>
									 <div className="middle">
    								<div className="text"><i className="fab fa-facebook"></i><i class="fab fa-linkedin"></i></div>
  									</div>
							        </div>
						        </div>
					
						
					        </div>
		             </div>
					</div>
                </div>
            </div>

        );
    }
}
export default Team
