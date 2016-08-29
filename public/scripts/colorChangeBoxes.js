var colorList = [
    {backgroundColor: 'yellow'},
    {backgroundColor: 'blue'},
    {backgroundColor: 'red'}
];

var ColorBoxes = React.createClass({
    handleClick: function(color){
        this.setState({
            color: color
        })
    },
    getInitialState: function(){
        return {color: this.props.initialColor};
    },
    render: function(){
        // this
        var ColorBox = this.props.colorList.map((color, i) => {
           return (
               <div onClick={ () => this.handleClick(color.backgroundColor)} key={i} style={{'height' : '100px', 'width': '100px', 'backgroundColor': color.backgroundColor}}>
               </div>
           )
        });
       return (
       <div>
           <h2 style={ {color: this.state.color}}>Click a box and I change</h2>
           {ColorBox}
       </div>
       )
    }
});


var Text = React.createClass({

   render: function(){
       return (
           <div>
               <ColorBoxes initialColor="purple" colorList={this.props.colorList} />
           </div>
       )
   }
});

ReactDOM.render(
  <Text colorList={colorList}  />,
  document.getElementById('content')
);
