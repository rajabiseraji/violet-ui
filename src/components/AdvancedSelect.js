import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import '../assets/scss/components/select.css';

export default class AdvancedSelect extends React.Component {
  static PropType = {
    options: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    clearable: PropTypes.bool,
    delimiter: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    loadOptions: PropTypes.func,
    multiple: PropTypes.bool,
    noResultsText: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    searchable: PropTypes.bool,
    searchPromptText: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
  };

  static defaultProps = {
    clearable: true,
    delimiter: ',',
    disabled: false,
    isLoading: false,
    multiple: false,
    noResultsText: 'هیچ نتیجه‌ای یافت نشد',
    required: false,
    searchable: true
  };

  /**
     * This needs to implement the custom arrow TODO
     */
  arrowRenderer = props => {
    return <span />;
  };
  /**
     * Custom option renderer goes here
     */
  optionRenderer = option => {
    return <div />;
  };
  /**
     * This must be replaced by Value Renderer
     */
  valueRenderer = option => {
    return <div />;
  };

  render() {
    let finalOptions = this.props.options.map(option => {
      option.className = 'violet-option';
      return option;
    });
    let {
      options,
      name,
      clearable,
      delimiter,
      disabled,
      isLoading,
      loadOptions,
      multiple,
      noResultsText,
      placeholder,
      required,
      searchable,
      searchPromptText,
      value,
      ...attributes
    } = this.props;

    return (
      <Select
        {...attributes}
        multi={this.props.multiple}
        options={finalOptions}
        onChange={this.props.onChange}
        name={this.props.name}
        clearable={this.props.clearable}
        delimiter={this.props.delimiter}
        disabled={this.props.disabled}
        isLoading={this.props.isLoading}
        loadOptions={this.props.loadOptions}
        noResultsText={this.props.noResultsText}
        placeholder={this.props.placeholder}
        required={this.props.required}
        searchable={this.props.searchable}
        searchPromptText={this.props.searchPromptText}
        value={this.props.value}
        autoBlur={false}
        autosize={false}
        openOnFocus={true}
        openOnClick={true}
      />
    );
  }
}
