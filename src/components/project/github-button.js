import React from "react";
import FontAwesome from "react-fontawesome";
import styled from 'styled-components'

const Button = styled.a.attrs({
  className: "btn border-primary"
})`
  border-radius: 100px !important;
`;

class GithubButton extends React.Component {
  render() {
    const { url } = this.props;
    return <Button href={url}>
        <FontAwesome name="github" size="2x" />
      </Button>;
  }
}

export default GithubButton;
