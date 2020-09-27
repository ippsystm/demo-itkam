import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Loading from "../common/Loading/Global/index"
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

//вторая контейнерная компонента
class UsersContainer extends React.Component {
    /*constructor(props) {//если конструктор не делает ничего своего, а только передаёт props для базового класса, то конструктор можно опустить
        super(props);
    }*/

    componentDidMount() {
        const {currentPage, pageSize} = this.props;// в классовых компонентах лучше доставать значения из props-ов с помощью деструктуризации
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
        { this.props.isFetching ? <Loading /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
//первая контейнерная компонента, будет вызвана сначала по default-у, затем она вызовет вторую(второй вызов connect)
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*export default withAuthRedirect(connect(mapStateToProps,  {//автоматическое оборачиваение callback-ми перечисленных значений - как в mapDispatchToProps
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
}) (UsersContainer));*/

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
) (UsersContainer)

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
          dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
          dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

//export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);