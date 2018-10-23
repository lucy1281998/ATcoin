import React,{Component} from 'react'
import '../style/benefits.css'

class Benefits extends Component{
    render(){
        return(
            <div className="container  Benefits">
                <h2>ATcoin Benefits</h2>
                <div className="row">
                

                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body benefits">
                            <img className="d-block mx-auto" src={require("../asset/blockchain.svg")}/>
                            <h4 class="sc_icons_item_title">Access</h4>
                            <div class="sc_icons_item_description">Instant, on-demand
                                 settlement</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3">
                    <div className="card">
                            <div className="card-body">
                            <img className="d-block mx-auto" src={require("../asset/trust.svg")}/>
                            <h4 class="sc_icons_item_title ">Trust</h4>
                            <div class="sc_icons_item_description">Instant, on-demand
                                 settlement</div>

                             </div>
                        </div>

                    </div>
                    <div className="col-xl-3">
                    <div className="card">
                            <div className="card-body">
                            <img className="d-block mx-auto" src={require("../asset/reward.svg")}/>
                            <h4 class="sc_icons_item_title">Reward</h4>
                            <div class="sc_icons_item_description">Instant, on-demand
                                 settlement</div>

                            </div>
                        </div>

                    </div>
                    <div className="col-xl-3">
                    <div className="card">
                            <div className="card-body">
                            <img className="d-block mx-auto" src={require("../asset/wallet.svg")}/>
                            <h4 class="sc_icons_item_title">Wallet</h4>
                            <div class="sc_icons_item_description">Instant, on-demand
                                 settlement</div>

                            </div>
                        </div>
                    </div>
                     
                </div>

            </div>
        );
    }
}
export default Benefits