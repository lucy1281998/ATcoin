import React,{Component} from 'react'
import '../style/roadmap.css'

class Roadmap extends Component
{
    render(){
        return(
            <div className="container-fluid roadmap">
            <h2 className="">ROAD MAP</h2>
          
            <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <div className="timeline">
                        <a href="#" className=" card timeline-content">
                        <div className="timeline-year"><span>2018</span></div>
                        <h3 className="title">Contract <i><img src={require('../roadmap/contract.png')}/></i></h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div className="timeline">
                    <a href="#" className="card timeline-content">
                        <div className="timeline-year"><span>2019</span></div>
                        <h3 className="title">Rule <i><img src={require('../roadmap/notepad.png')}/></i></h3>
                        <p className=" description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div className="timeline">
                    <a href="#" className="card timeline-content">
                        <div className="timeline-year"><span>2020</span></div>
                        <h3 className="title">Development<i><img src={require('../roadmap/process.png')}/></i></h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
                <div className="timeline">
                    <a href="#" className="card timeline-content">
                        <div className="timeline-year"><span>2021</span></div>
                        <h3 className="title">Security <i><img src={require('../roadmap/shield.png')}/></i></h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>

        );
    }
}
export default Roadmap