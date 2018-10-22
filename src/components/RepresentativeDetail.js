import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

class RepresentativeDetail extends Component {

    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }


    handleClose() {
        const { handleClose } = this.props

        handleClose()
    }

    render() {
        const { open, data } = this.props
        return (
            <Dialog onClose={this.handleClose} open={open}>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{display: 'flex', justifyContent:'center', width: '100%'}}>
                <Typography variant="h5" >Information</Typography>
                </div>
                <CloseIcon onClick={this.handleClose} />
                </div>
                
                <Card >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> District:</Typography>
                        <Typography component="p" > {data.district}</Typography>

                        <Typography color="textSecondary" gutterBottom> Phone:</Typography>
                        <Typography component="p" > {data.phone}</Typography>

                        <Typography color="textSecondary" gutterBottom> Office:</Typography>
                        <Typography component="p" > {data.office}</Typography>
                        
                        

                    </CardContent>
                    <CardActions>
                        <a href={data.link} target="_blank">{data.link}</a>
                    </CardActions>
                </Card>
            </Dialog>
        )
    }
}

RepresentativeDetail.propTypes = {
    data: PropTypes.object,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
}

RepresentativeDetail.defaultProps = {
    data: null,
    handleClose: null,
    open: false,
    onClose: null,
}

export default RepresentativeDetail