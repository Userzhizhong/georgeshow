import React,{Children} from 'react';
export default class ReactLife extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
    console.log('consturctor')
  };
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps');
    return {}
  }

  componentDidMount() {
    console.log('didMount')
  }

  render() {
    console.log('render')
    return <div>react life test</div>
  }
}