/**
 * Created by ajaygaur on 17/06/17.
 */

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  canUseDOM,
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
    className: PropTypes.string, //Form Container Class Name
    closeIcnLabel: PropTypes.string, //Close Icon Label
    onHide: PropTypes.func, //Function on close form
    renderHeader: PropTypes.bool, //Whether to render Header or not
    renderFooter: PropTypes.bool, //Whether to render Footer or not
    showCloseIcon: PropTypes.bool, //Whether to render close icon
    closeIcnClassName: PropTypes.string, //Close Icon Class Name
    closeOnEscape: PropTypes.bool, //Whether to close form on escape or not
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
    show: true,
  };

  renderCloseIcon() {
    return (
      <div>
        {'Hello world'}
      </div>
    );
    //  const props = this.props;
    //  return (
    //    <div className={classnames(s.closeContainer, props.closeIcnClassName, 'circular scp spf stc p-x-4')}
    //      onClick={this.handleCloseForm}
    //    >
    //      <div className={classnames(s.closeIconCont, "m-b-1")}>
    //        <Icon name="close" className={s.closeIcon}/>
    //      </div>
    //      <div className={`${s.closeLabel} txt-bd2`}>{props.closeIcnLabel}</div>
    //    </div>
    //  );
  }

  render() {
    const props = this.props,
      {container} = props;

    return (
      <Portal container={_isFunction(container) ? container() : container}>
        <div
          className={classnames(`${s.formContainer} ${props.className} full-width full-height spf`, {
          [s.bgDark]: props.bgDark,
          [s.withoutHeader]: !props.renderHeader,
          [s.withoutFooter]: !props.renderFooter,
          [s.withoutHeaderAndCloseButton]: !props.showCloseIcon && !props.renderHeader,
          [s.withoutHeaderAndFooter]:!props.renderHeader && !props.renderFooter,
        })}
        >
          {props.showCloseIcon && this.renderCloseIcon()}
          {props.children}
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