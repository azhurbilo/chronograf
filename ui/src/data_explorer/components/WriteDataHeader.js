import React from 'react'
import PropTypes from 'prop-types'
import DatabaseDropdown from 'shared/components/DatabaseDropdown'

const WriteDataHeader = ({
  handleSelectDatabase,
  selectedDatabase,
  errorThrown,
  toggleWriteView,
  isManual,
  onClose,
  source,
}) => (
  <div className="write-data-form--header">
    <div className="page-header__left">
      <h1 className="page-header__title">Write Data To</h1>
      <DatabaseDropdown
        source={source}
        onSelectDatabase={handleSelectDatabase}
        database={selectedDatabase}
        onErrorThrown={errorThrown}
      />
      <ul className="nav nav-tablist nav-tablist-sm">
        <li
          onClick={toggleWriteView(false)}
          className={isManual ? '' : 'active'}
        >
          File Upload
        </li>
        <li
          onClick={toggleWriteView(true)}
          className={isManual ? 'active' : ''}
          data-test="manual-entry-button"
        >
          Manual Entry
        </li>
      </ul>
    </div>
    <div className="page-header__right">
      <span className="page-header__dismiss" onClick={onClose} />
    </div>
  </div>
)

const {func, shape, string, bool} = PropTypes

WriteDataHeader.propTypes = {
  handleSelectDatabase: func.isRequired,
  selectedDatabase: string,
  toggleWriteView: func.isRequired,
  errorThrown: func.isRequired,
  onClose: func.isRequired,
  isManual: bool,
  source: shape({
    links: shape({
      proxy: string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default WriteDataHeader
