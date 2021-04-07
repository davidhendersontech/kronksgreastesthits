import React, { Component } from 'react'

export default class main extends Component {

    state = {
        imgNumber : 2,
        imgArray : ['https://media.tenor.com/images/faa7904870d4661b3f077f1c49fbbb46/tenor.gif',
        'https://i.imgur.com/x1jWBog.gif',
        'https://i.imgur.com/0eq4fX9.gif'
    ]
    }

    handleClick = () => {
        let newNumber = this.state.imgNumber + 1
        if (newNumber > 2){
            newNumber = 0
        } 
        this.setState({imgNumber : newNumber})
    }

    render() {
        return (
            <div>
                <img src={this.state.imgArray[this.state.imgNumber]} onClick= {this.handleClick} />
            </div>
        )
    }
}
