import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 56,
  fromToken: '0xE62A9bc6eDe534E18Dd2793Dcaf5A2B6df112180',
  logoToken: 'https://i.postimg.cc/T3DWSPJ5/IMG-20230509-182205.jpg'
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
