import { fetchData } from '../actions'
import { Module1 } from '../index'
import { connect } from 'react-redux'

const mapStateToProps = (state: any, ownProps: any) => {
    return Object.assign({}, state, ownProps);
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Module1);