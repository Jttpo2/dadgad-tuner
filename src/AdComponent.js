import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsByGoogle = window.adsByGoogle || []).push({});
  }

  render() {
    return (
      <ins
        style={{}}
        className='adsbygoogle'
        google-ad-client='ca-pub-9797157880857851'
      />
    );
  }
}
