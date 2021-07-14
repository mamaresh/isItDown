import React from 'react';
import ContentEditable from 'react-contenteditable';

export default class  Description extends React.Component {
    constructor() {
        super()
        this.contentEditable = React.createRef();
        this.state = {html: "Add a description"};
    };
    handleChange = evt => {
        this.setState({html: evt.target.value});
    };

    render = () => {
        return (<>
                <h5>Description</h5>
                <ContentEditable
                  innerRef={this.contentEditable}
                  html={this.state.html} // innerHTML of the editable div
                  disabled={false}       // use true to disable editing
                  onChange={this.handleChange} // handle innerHTML change
                  tagName='article' // Use a custom HTML tag (uses a div by default)
                />
            </>
        );
    }
    
}