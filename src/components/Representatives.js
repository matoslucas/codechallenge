import React, { Component } from 'react'
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import DemocratLogo from './svg/DemocratLogo'
import RepublicanLogo from './svg/RepublicanLogo'

import RepresentativeDetail from './RepresentativeDetail'

class Representatives extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            repData: {},
        }

        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClickOpen(item) {
        this.setState({
            open: true,
            repData: item,
        });
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    renderData() {
        const { data } = this.props

        return data.map((item) => {

            /*
            district: "0"
link: "http://donyoung.house.gov"
name: "Don Young"
office: "2314 Rayburn HOB; Washington DC 20515-0200"
party: "Republican"
phone: "202-225-5765"
state: "AK"
            */
            return (
                <ListItem onClick={() => { this.handleClickOpen(item) }}
                    style={{
                        backgroundColor: '#e8e8e8',
                        margin: 1,
                        cursor: 'pointer',
                    }}>
                    {item.party == 'Republican' ?
                        <RepublicanLogo size={48} />
                        :
                        <DemocratLogo size={48} />
                    }

                    <ListItemText
                        primary={item.name} secondary={item.party} />
                </ListItem>
            )
        })
    }

    render() {
        const { repData, open } = this.state
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                overflow: 'auto',
                height: '50vh',
            }}>
                <List>
                    {this.renderData()}
                </List>
                <RepresentativeDetail
                    open={open}
                    onClose={this.handleClose}
                    handleClose={this.handleClose}
                    data={repData} />
            </div>
        )
    }

}

Representatives.propTypes = {
    data: PropTypes.array
}

Representatives.defaultProps = {
    data: []
}

export default Representatives