import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from 'src/store/';
import { toggleProfile } from 'store/profile/slice';

interface AboutProps {
  visible?: boolean;
  toggle: () => void;
}

export const About: FC<AboutProps> = (props) => {
  return (
    <>
      <h2>About</h2>
      <input type="checkbox" checked={props.visible} readOnly />
      <button onClick={() => props.toggle()}>change visible</button>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleProfile()),
});

// connect нужен для связки компонентов с redux
export const AboutWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
