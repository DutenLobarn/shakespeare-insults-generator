import './App.css';
import React, { Component } from 'react'
import ShowTheInsults from './ShowTheInsults'
import AddInsult from './AddInsult'

const allInsults= [
{
  insult:'Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?', 
  play:'- Macbeth',
},

{
  insult:'Never hung poison on a fouler toad', 
  play:'- Richard III',
},

{
  insult:'He thinks too much: such men are dangerous.', 
  play:'- Julius Ceasar',
},

{
  insult:'Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs.', play:'- The Merchant of Venice',
},

{
  insult:'Give me your hand...I can tell your fortune. You are a fool.', 
  play:'- The Two Noble Kinsmen',
},

{
  insult:'He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!', 
  play:'- The Tempest',
},

{
  insult:'It is a tale Told by an idiot, full of sound and fury, Signifying nothing.', 
  play:'- Macbeth',
},

{
  insult:'Alas, poor heart, that kiss is comfortless As frozen water to a starved snake.',
  play:'- Titus',
},

{
  insult:'He hath eaten me out of house and home; he hath put all substance into that fat belly of his.', 
  play:'- Henry IV, Part 2',
},

{
  insult:'Out, you green-sickness carrion! Out, you baggage! You tallow-face!', 
  play:'- Romeo and Juliet',
},
];
// console.log(allInsults)

const random = Math.floor(Math.random()* allInsults.length)

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      allInsults,
      addOneInsultText: '',
      addOnePlayText: '',
    }
    // console.log(this.state.allInsults[random].insult)
    // console.log(this.state.allInsults[random].play)
  }
  // metoder
  handleOnChange1 = (e) =>{
    if (e.key === 'Enter') {
      this.setState({addOneInsultText: e.target.value})
    }
  }

  handleOnChange2 = (e) =>{
    if (e.key === 'Enter') {
      this.setState({addOnePlayText: e.target.value})
    }
  }

  render() {
    return (
      <div className="container">

        <h1>Shakespeare Insult Generator</h1>

        <ShowTheInsults 
        allInsults={this.state.allInsults[random].insult} 
        allPlay={this.state.allInsults[random].play} 

        addOneInsultText={this.state.addOneInsultText}
        addOnePlayText={this.state.addOnePlayText}
        />

        <AddInsult 
        // addOneInsultBtn={this.addOneInsultBtn}
        handleOnChange1={this.handleOnChange1}
        handleOnChange2={this.handleOnChange2}
        />

      </div>
    )
  }
}