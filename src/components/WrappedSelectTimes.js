import { connect } from 'react-redux';
import SelectTimes from './SelectTimes';
import { selected } from '../store/Actions';

const mapStateToProps = ({ selected }) => {
  return {
    selectedPosition: selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (x, y) => {
      dispatch(selected({ x, y }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTimes);
