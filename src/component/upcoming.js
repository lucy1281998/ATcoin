import React,{Component} from 'react'
import '../style/upcoming.css'

class Upcoming extends Component
{
    render(){
        return(
            <div className="container-fluid upcoming animated slideInUp">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">11</span><br/>
                        <p>March 2018</p>
                        <h5>Blockchain Week</h5>
                            <div className="details">
                            <p>Participation of ATcoin in blockchain week in London</p>

                            </div>
                        <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">14</span><br/>
                        <p>April 2018</p>
                        <h5>Ethyl Voting </h5>
                        <div className="details">
                            <p>“The Ethyl Community Fund Proposal has started their voting.”</p>

                            </div> 
                            <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">23</span><br/>
                        <p>May 2018</p>
                        <h5>Chainges Conference</h5>
                        <div className="details">
                            <p>Join the first world-class quality blockchain and cryptocurrency conference</p>

                            </div>                        
                            <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">19</span><br/>
                        <p>June 2018</p>
                        <h5>Catapult Release</h5>
                        <div className="details">
                        <p>Catapult ATcoin (version 2.0) will come sometime this year</p>

                            </div>
                            <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                    
            </div>

        );
    }
}
export default Upcoming