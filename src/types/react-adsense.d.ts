declare module 'react-adsense' {
  import { Component } from 'react';

  interface AdSenseProps {
    client?: string;
    slot?: string;
    style?: React.CSSProperties;
    format?: string;
    responsive?: string;
    className?: string;
    layout?: string;
  }

  class AdSenseGoogle extends Component<AdSenseProps> {}

  export default class AdSense extends Component<AdSenseProps> {
    static Google: typeof AdSenseGoogle;
  }
}
