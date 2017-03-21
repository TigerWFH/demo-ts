import { Nav } from '../nav';
import { signon, signup, signout } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state: any, ownProps: any) {
    return Object.assign({}, state);
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        signon: (params: any) => { dispatch(signon(params)) },
        signup: (params: any) => { dispatch(signup(params)) },
        signout: () => { dispatch(signout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);