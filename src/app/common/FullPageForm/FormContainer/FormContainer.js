/**
 * Created by ajaygaur on 17/06/17.
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  canUseDOM
} from 'fbjs/lib/ExecutionEnvironment';
import {
  noop as _noop,
  isFunction as _isFunction,
} from 'lodash';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './formContainer.scss';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import Portal from 'react-overlays/lib/Portal';

const bodyContainer = () => canUseDOM && document.body;

class FormContainer extends React.Component {
  static propTypes = {
    className: PropTypes.string,//Form Container Class Name
    closeIcnLabel: PropTypes.string,//Close Icon Label
    onHide: PropTypes.func,//Function on close form
    renderHeader: PropTypes.bool,//Whether to render Header or not
    renderFooter: PropTypes.bool,//Whether to render Footer or not
    showCloseIcon: PropTypes.bool,//Whether to render close icon
    closeIcnClassName: PropTypes.string,//Close Icon Class Name
    closeOnEscape: PropTypes.bool,//Whether to close form on escape or not
  };

  static defaultProps = {
    bgDark: false,
    closeIcnLabel: 'esc',
    onHide: _noop,
    renderHeader: true,
    renderFooter: true,
    showCloseIcon: true,
    closeIcnClassName: '',
    container: bodyContainer,
    closeOnEscape: true,
  };

  state = {
    show: true
  };

  render() {
    const props = this.props,
      {container} = props;

    return (
      <Portal container={_isFunction(container) ? container() : container}>
        <div>
          {'Hello world'}
        </div>
      </Portal>
    );
  }
}

const FormContainerHOC = FormContainer;
FormContainerHOC.Header = Header;
FormContainerHOC.Body = Body;
FormContainerHOC.Footer = Footer;

export default withStyles(styles)(FormContainerHOC);