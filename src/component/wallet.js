import React,{Component} from 'react'
import '../style/wallet.css'
import ScrollAnimation from 'react-animate-on-scroll';

class Wallet extends Component
{
    render(){
        return(
            <div className="container-fluid ">
            <div className="row wallet">
                    <div className="col-xl-6">
                    <ScrollAnimation animateIn='bounce'initiallyVisible={true}animateOnce={false}>

                        <img className="img-fluid" src={require('../asset/pic7.png')}/>
                        </ScrollAnimation>

                    </div>
                    <div className="col-xl-6">

                    <img className="img-fluid" src={require('../asset/wallet.png')}/>
                    </div>

            </div>
            

            </div>

        );
    }
}
export default Wallet