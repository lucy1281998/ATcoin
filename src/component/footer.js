import React,{Component} from 'react'
import '../style/footer.css'

class Footer extends Component
{
    render(){
        return(
            <div className="container-fluid footer ">
                <div className="container">
                    <div className="row">
                         <div className="col-xl-6 col-md-6 col-sm-6 offset-md-3">
                            <h3 className="text-center">i'd Like Learn More<br/> About ATcoin</h3><br/><br/>
                            <form className="form-group">
                            <div className="input-group ">
                            <input type="text" className="form-control" placeholder="Enter Your Email"/>
                            <div className="input-group-append">
                            <button className="btn btn-success" type="submit">Sign Up</button> 
                            </div>
                            </div>
                            </form>
                            <div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="javascript:void();"><i class="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i class="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i class="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				
			</div>	
                            
                            </div>
                         </div>
                    </div>
                </div>
            

        );
    }
}
export default Footer