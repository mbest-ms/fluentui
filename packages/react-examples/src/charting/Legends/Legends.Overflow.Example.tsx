import * as React from 'react';
import { ILegend, Legends } from '@uifabric/charting';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export class LegendOverflowExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const legends: ILegend[] = [
      {
        title: 'Legend 1',
        color: DefaultPalette.red,
        action: () => {
          console.log('Legend1 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend1');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 2',
        color: DefaultPalette.green,
        action: () => {
          console.log('Legend2 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend2');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 3',
        color: DefaultPalette.yellow,
        action: () => {
          console.log('Legend3 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend3');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 4',
        color: DefaultPalette.blue,
        action: () => {
          console.log('Legend4 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend4');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 5',
        color: DefaultPalette.purpleLight,
        action: () => {
          console.log('Legend5 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend5');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 6',
        color: DefaultPalette.orange,
        action: () => {
          console.log('Legend6 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend6');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 7',
        color: DefaultPalette.magenta,
        action: () => {
          console.log('Legend7 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend7');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 8',
        color: DefaultPalette.themeDark,
        action: () => {
          console.log('Legend8 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend8');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 9',
        color: DefaultPalette.redDark,
        action: () => {
          console.log('Legend9 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend9');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 10',
        color: DefaultPalette.blueMid,
        action: () => {
          console.log('Legend10 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend10');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 11',
        color: DefaultPalette.blackTranslucent40,
        action: () => {
          console.log('Legend11 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend11');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 12',
        color: DefaultPalette.greenDark,
        action: () => {
          console.log('Legend12 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend12');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 13',
        color: DefaultPalette.yellowLight,
        action: () => {
          console.log('Legend13 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend13');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 14',
        color: DefaultPalette.magentaLight,
        action: () => {
          console.log('Legend14 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend14');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 15',
        color: DefaultPalette.purpleDark,
        action: () => {
          console.log('Legend15 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend15');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 16',
        color: DefaultPalette.blueMid,
        action: () => {
          console.log('Legend16 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend16');
        },
        onMouseOutAction: () => {},
      },
      {
        title: 'Legend 17',
        color: DefaultPalette.accent,
        action: () => {
          console.log('Legend17 clicked');
        },
        hoverAction: () => {
          console.log('Hover action for legend17');
        },
        onMouseOutAction: () => {},
      },
    ];

    return (
      <Legends
        legends={legends}
        overflowText={'Overflow Items'}
        allowFocusOnLegends={true}
        overflowProps={{ focusZoneProps: { 'aria-label': 'legends container' } }}
        canSelectMultipleLegends={false}
      />
    );
  }
}
