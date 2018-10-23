import React,{Component} from 'react'
import Countdown from '../component/ico-sale'


class Countdown extends Component{
    render(){
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return(

            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                    </div>
                         <Countdown date={`${year}-12-24T00:00:00`} />
                    </div>  
                    </div>


                
        );
    }
}
export default Countdown