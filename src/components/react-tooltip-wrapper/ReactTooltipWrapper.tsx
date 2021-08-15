//  Region Import External Lib (e.g React, Reactstrap, etc)
import React from 'react';
import ReactTooltip from 'react-tooltip';
import classnames from 'classnames';

//  Region Import Constants

//  Region Import Interfaces
import { ReactTooltipWrapperProps } from './ReactTooltipWrapper.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import './ReactTooltipWrapper.scss';

// you may change to class or function component
function ReactTooltipWrapper(props: ReactTooltipWrapperProps) {

  // props destruction
  const {
    effect, delayHide,
    delayShow, delayUpdate,
    place, border, type,
    className, textAlign,
    ...rest
  } = props;

  // state destruction

  // other variables if needed

  const textAlignStlye = `tooltip-text-${textAlign ? textAlign : "center"}`;

  return (
    <ReactTooltip
      data-html
      html
      {...rest}
      effect={effect || "solid"}
      delayHide={delayHide || 500}
      delayShow={delayShow || 500}
      delayUpdate={delayUpdate || 500}
      place={place || "top"}
      border={border || true}
      type={type || "dark"}
      className={classnames(`tooltip-react-container ${textAlignStlye}`, className)}
      multiline
      insecure
    />
  );
}

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default ReactTooltipWrapper;
