const Influx = require('influx');

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'stock_data',
  schema: [
    {
      measurement: 'stock_prices',
      fields: {
        price: Influx.FieldType.FLOAT,
      },
      tags: [
        'symbol'
      ]
    }
  ]
});

influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('stock_data')) {
      return influx.createDatabase('stock_data');
    }
  })
  .then(() => {
    console.log('InfluxDB Database Created/Already Exists');

    return influx.createRetentionPolicy('one_year', {
      database: 'stock_data',
      duration: '52w',
      replication: 1,
      isDefault: true,
    });
  })
  .then(() => {
    console.log('InfluxDB Retention Policy Set');
  })
  .catch(err => console.error('Error initializing InfluxDB:', err));