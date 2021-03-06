/**
 *
 * ProjectStoreInteractingItemsListCount
 *
 */

import { Input } from 'semantic-ui-react';
import { Map } from 'immutable';
import { min, max, parseInt } from 'lodash';

import {
  getItemsListCount,
  getLimItemsListCount,
} from '~/containers/App/getters/projectStore';

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class ProjectStoreInteractingItemsListCount extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeValue = evt => {
      const { onChangeValue, store, isLimitedList } = this.props;
      const value = parseInt(evt.target.value) || 0;
      onChangeValue(store, min([max([0, value]), isLimitedList ? 16 : 200]));
    };
  }

  render() {
    const {
      store,
      storeNextValues,
      size,
      className,
      label,
      fluid,
      isLimitedList,
    } = this.props;

    const value = isLimitedList
      ? getLimItemsListCount(storeNextValues.get('nextValue'), { entry: store })
      : getItemsListCount(storeNextValues.get('nextValue'), { entry: store });

    return (
      <Input
        size={size}
        fluid={fluid}
        type="number"
        value={value}
        onChange={this.changeValue}
        className={className}
        label={label}
      />
    );
  }
}

ProjectStoreInteractingItemsListCount.propTypes = {
  store: PropTypes.instanceOf(Map).isRequired,
  storeNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ]),
  fluid: PropTypes.bool,
  isLimitedList: PropTypes.bool,
};

ProjectStoreInteractingItemsListCount.defaultProps = {
  size: 'mini',
  className: '',
  label: null,
  fluid: true,
  isLimitedList: false,
};

export default ProjectStoreInteractingItemsListCount;
