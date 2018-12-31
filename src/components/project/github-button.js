import React from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

const Button = styled.a.attrs({
  className: "btn border-primary"
})`
  border-radius: 100px !important;
`;
const Message = styled.span`
  padding: auto;
  margin-left: 10px;
  transition: 2s;
`;

class GithubButton extends React.Component {
  state = {
    mouseHover: false
  };

  onMouseOver = () => {
    this.setState({ mouseHover: true });
  };

  onMouseLeave = () => {
    this.setState({ mouseHover: false });
  };

  renderMessage = () => {
    if (this.state.mouseHover) return <Message>See in Github</Message>;
    return null;
  };

  render() {
    const { url } = this.props;
    return (
      <Button
        href={url}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        <FontAwesome name="github" size="2x" />
        {this.renderMessage()}
      </Button>
    );
  }
}

export default GithubButton;
