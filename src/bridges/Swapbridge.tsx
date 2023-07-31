import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'BOB 4.0',
  fromChain: 56,
  fromToken: '0xfa4C07636B53D868E514777B9d4005F1e9c6c40B',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};



export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};
