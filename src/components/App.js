import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import SelectComp from './SelectComp'

import Representatives from './Representatives'




class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            state: '',
            type: '',
            list: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {

        const { type, state } = this.state;
        const url = './' + type + '/' + state;
        const self = this;

        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the response
                response.json().then((data) => {
                    self.setState({ list: data.results });
                });
            }
            )
            .catch((err) => {
                console.log('Fetch Error :-S', err);
            });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { type, state, list } = this.state;
        return (
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: 225,
                    flexDirection: 'column'
                }}>
                    <SelectComp
                        label={'Search by: '}
                        name={'type'}
                        onChange={this.handleChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'representatives'}>Representative</MenuItem>
                        <MenuItem value={'senators'}>Senator</MenuItem>
                    </SelectComp>

                    <SelectComp
                        label={'State: '}
                        name={'state'}
                        onChange={this.handleChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="AL">Alabama</MenuItem>
                        <MenuItem value="AK">Alaska</MenuItem>
                        <MenuItem value="AZ">Arizona</MenuItem>
                        <MenuItem value="AR">Arkansas</MenuItem>
                        <MenuItem value="CA">California</MenuItem>
                        <MenuItem value="CO">Colorado</MenuItem>
                        <MenuItem value="CT">Connecticut</MenuItem>
                        <MenuItem value="DE">Delaware</MenuItem>
                        <MenuItem value="DC">District Of Columbia</MenuItem>
                        <MenuItem value="FL">Florida</MenuItem>
                        <MenuItem value="GA">Georgia</MenuItem>
                        <MenuItem value="HI">Hawaii</MenuItem>
                        <MenuItem value="ID">Idaho</MenuItem>
                        <MenuItem value="IL">Illinois</MenuItem>
                        <MenuItem value="IN">Indiana</MenuItem>
                        <MenuItem value="IA">Iowa</MenuItem>
                        <MenuItem value="KS">Kansas</MenuItem>
                        <MenuItem value="KY">Kentucky</MenuItem>
                        <MenuItem value="LA">Louisiana</MenuItem>
                        <MenuItem value="ME">Maine</MenuItem>
                        <MenuItem value="MD">Maryland</MenuItem>
                        <MenuItem value="MA">Massachusetts</MenuItem>
                        <MenuItem value="MI">Michigan</MenuItem>
                        <MenuItem value="MN">Minnesota</MenuItem>
                        <MenuItem value="MS">Mississippi</MenuItem>
                        <MenuItem value="MO">Missouri</MenuItem>
                        <MenuItem value="MT">Montana</MenuItem>
                        <MenuItem value="NE">Nebraska</MenuItem>
                        <MenuItem value="NV">Nevada</MenuItem>
                        <MenuItem value="NH">New Hampshire</MenuItem>
                        <MenuItem value="NJ">New Jersey</MenuItem>
                        <MenuItem value="NM">New Mexico</MenuItem>
                        <MenuItem value="NY">New York</MenuItem>
                        <MenuItem value="NC">North Carolina</MenuItem>
                        <MenuItem value="ND">North Dakota</MenuItem>
                        <MenuItem value="OH">Ohio</MenuItem>
                        <MenuItem value="OK">Oklahoma</MenuItem>
                        <MenuItem value="OR">Oregon</MenuItem>
                        <MenuItem value="PA">Pennsylvania</MenuItem>
                        <MenuItem value="RI">Rhode Island</MenuItem>
                        <MenuItem value="SC">South Carolina</MenuItem>
                        <MenuItem value="SD">South Dakota</MenuItem>
                        <MenuItem value="TN">Tennessee</MenuItem>
                        <MenuItem value="TX">Texas</MenuItem>
                        <MenuItem value="UT">Utah</MenuItem>
                        <MenuItem value="VT">Vermont</MenuItem>
                        <MenuItem value="VA">Virginia</MenuItem>
                        <MenuItem value="WA">Washington</MenuItem>
                        <MenuItem value="WV">West Virginia</MenuItem>
                        <MenuItem value="WI">Wisconsin</MenuItem>
                        <MenuItem value="WY">Wyoming</MenuItem>
                    </SelectComp>
                    {type != '' && state != '' ?
                        <Button variant="contained" color="primary" onClick={this.clickHandler}>
                            GET INFO
                    </Button>
                        :
                        null
                    }

                </div>
                {list && list.length ?
                    <Representatives data={list} />
                    :
                    null
                }
            </div>)
    }
}

export default App