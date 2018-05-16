import React from 'react';

import Colors from './Colors.js';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsByGoogle = window.adsByGoogle || []).push({});
  }

  render() {
    return (
      <div
        style={styles.ad}
        className='ad'>
        Ad
      </div>
    );
  }

  // render() {
  //   return (
  //     <ins
  //       style={{}}
  //       className='adsbygoogle'
  //       google-ad-client='ca-pub-9797157880857851'
  //     />
  //   );
  // }
}

const styles = {
  ad: {
    height: '6em',
    maxHeight: '20%',
    display: 'flex',
    // alignSelf: 'flex-end',

    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: Colors.adBackground,
    color: Colors.adText,
    borderTop: '1px solid lightgrey' 
  }
}
