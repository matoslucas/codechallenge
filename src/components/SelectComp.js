import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'


class SelectComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { onChange } = this.props
        this.setState({ name: event.target.value });
        onChange(event)
    }

    render() {
        const { label, name, children } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl style={{ display: 'flex', width: '300px' }}>
                    <InputLabel
                        htmlFor="select-id">{label}</InputLabel>
                    <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        inputProps={{
                            name: name,
                            id: 'select-id',
                        }}
                    >
                        {children}
                    </Select>
                </FormControl>
            </div>
        )
    }
}

SelectComp.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    name: PropTypes.string,
}

SelectComp.defaultProps = {
    children: null,
    label: 'Label',
    name:'',
}

export default SelectComp