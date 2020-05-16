import { connect } from 'react-redux';
import SelectTimes from './SelectTimes';
import { selected, dragging, staticToggle } from '../store/Actions';

const mapStateToProps = ({ selected }) => {
  return {
    selectedPosition: selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDrop: (x, y) => {
      console.log(x, y);
      dispatch(selected(x, y));
    },
    toggleStatic: (x, y) => {
      console.log('toggling static');
      dispatch(staticToggle(x, y));
    },
    toggleSelected: (x, y) => {
      console.log('toggling: ', x, y);
      dispatch(selected(x, y));
    },
    updateDragging: (state) => {
      console.log('updating the "being dragged" object');
      dispatch(dragging(state));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTimes);
