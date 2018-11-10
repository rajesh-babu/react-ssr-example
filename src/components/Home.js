import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import Comp1 from './Comp1';
import Comp2 from './Comp2';

class Home extends React.Component {
    componentDidMount( ) {
      //console.log(this.props.location);
        if ( this.props.CMSData) {
           // this.props.fetchData(this.props.location.pathname );
        }
    }
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
      }
    }
    onRouteChanged() {
      console.log('changed');
      this.props.fetchData(this.props.location.pathname );
    }

    render( ) {
        const { CMSData } = this.props;
        const componentMap = {
            Comp1: Comp1,
            Comp2: Comp2
          };
            
          return (
            <div>
              {CMSData && CMSData.compArr.map(d => {
                const Appcomp = componentMap[d.component];
                return <Appcomp key={d.data.id} data={d.data} />;
              })}
            </div>
          );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    CMSData: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
