import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

import '../styles/components/financial.css';

export default class Financial extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const { data } = this.props;
 
    return (
      <div id="card-financial">
        <h1>Financeiro:</h1>

        <div className="charts-financial">
          <div className="pie-chart">
            <ResponsivePie 
              data={[
                {
                  id: "win",
                  label: data?.win?.description,
                  value: data?.win?.quantity
                },
                {
                  id: "lost",
                  label: data?.lost?.description,
                  value: data?.lost?.quantity
                },
                {
                  id: "open",
                  label: data?.open?.description,
                  value: data?.open?.quantity
                },
                {
                  id: "discarded",
                  label: data?.discarded?.description,
                  value: data?.discarded?.quantity
                }
              ]}
              innerRadius={0.5}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              isInteractive={false}
            />
          </div>        
        </div>
      </div>
    )
  }
}