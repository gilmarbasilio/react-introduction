import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [
        ...this.state.techs,
        this.state.newTech
      ],
      newTech: ''
    })

  }

  render() {
    const { techs, newTech } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {techs.map((tech, index) => <li key={index}>{tech}</li>)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={newTech}
        />

        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;