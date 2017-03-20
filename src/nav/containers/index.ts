import { Nav } from '../nav';
import { connect } from 'react-redux';

function mapStateToProps(state: any) {
    console.log('state--->', state);
    return Object.assign({}, state);
}

function mapDispatchToProps(dispatch: any) {

}

export default connect(mapStateToProps)(Nav);