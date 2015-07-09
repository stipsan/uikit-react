import React from 'react';
import {SimpleTransitionGroup} from 'uikit-react';

export default class NotFound extends React.Component {

  state = {"items":[1,2,3,4,5,6,7,8,9],"next":10};

  render() {
    return <SimpleTransitionGroup className="uk-grid uk-text-center"
                          enterTimeout={500}
                          leaveTimeout={500}
                          transitionName="demo"
                          transitionAppear={false}>
                          {this.state.items.map(function(item, key) {
                            return (<div key={'item-'+item} className="bounceIn animateds uk-width-medium-1-5 uk-margin-bottom">
                                      <div className="uk-panel uk-panel-box uk-margin-bottom" 
                                           style={{minHeight: 20}} 
                                           onClick={function(i){
                                             this.state.items.splice(i, 1), this.setState(this.state);
                                           }.bind(this, key)}>
                                        <h1>{item}</h1>
                                      </div>
                                    </div>)}.bind(this))}
            </SimpleTransitionGroup>
    return <h1 className="uk-text-center uk-text-danger uk-heading-large">404 Not Found</h1>;
  }

};