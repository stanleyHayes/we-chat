import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const IndexPage = ({currentUser, loading}) => {

    if (!currentUser && !loading) {
        return <Redirect to="/login" />
    }else {
        return <Redirect to='/chat' />
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        loading: state.auth.loading,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(IndexPage) ;