import React from 'react';



class JSXcode extends React.Component {
render() {
/* return (<div>

Hello  enter to jSX code file without create jsx
</div> 

 ) */
 return (
     
    React.createElement('div',{className:'divClass'},React.createElement('h1',{id:'h1tag',className:'dummyClass'},'inside h1 tag JSX code'))

 )


}

}

export default JSXcode;