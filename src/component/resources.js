import React,{Component} from 'react'
import '../style/resource.css'
import ScrollAnimation from 'react-animate-on-scroll';

class Resource extends Component{
    render(){
        return(
            <div className="container resources" >
                <div className="row">
                    <div className="col-xl-6">
                    <ScrollAnimation animateIn='bounce'initiallyVisible={true}animateOnce={false}>

                        <img className="img-fluid" src={require("../asset/pic3.png")}/>
                        </ScrollAnimation>    
    
                    </div>
                    <div className="col-xl-6 animated ">
                    <h2>ATcoin is Digital Cash<br/> You
                            Can Spend<br/> Anywhere</h2>
                            <p>Use ATcoin to make instant, private payments online
                                 or<br/> in-store using our secure open-source<br/>
                        platform hosted by thousands of users around the world.</p>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Resource