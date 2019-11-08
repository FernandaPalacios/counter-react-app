
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import VisibleCounter from '../components/VisibleCounter'


const mapStateToProps = state => ({
  value: state
})

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleCounter)

