import React,{Component} from 'react'
import '../style/network.css'
import ScrollAnimation from 'react-animate-on-scroll';

class Network extends Component{
    render()
    {
        return(
            <div className="container-fluid network">
                <div className="container network1">
                <div className="row" >
                    <div className="col-xl-6">
                    <p>ATcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have 
                        adopted our coin already. There is much more to come. Stay tuned.</p>
                    </div>
                    <div className="col-xl-6 animated ">
                    <ScrollAnimation animateIn='bounce'initiallyVisible={true}animateOnce={false}>

                    <img className="img-fluid" src={require('../asset/p4.png')}/>
                    </ScrollAnimation>
                    </div>

                </div>
                </div>
                

            </div>

        );
    }
}
export default Network