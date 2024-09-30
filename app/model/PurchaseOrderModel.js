Ext.define('ChallengeApp.model.PurchaseOrderModel',{
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {
            name: 'Id',
            type: 'int'
        },{
            name: 'Date',
            type: 'date',
            //dateFormat: 'MS',
        },{
            name: 'ClientId',
            type: 'int',
        },{
            name: 'Status',
            type: 'string' 
        },{
            name: 'Total',
            type: 'number'
        },{
            name: 'Currency',
            type: 'string'
        }

 /*       Status,
        ClientId, (hasOne association),
        Total,
        Currency,
        PurchaseOrderDetails (hasMany association)
*/        
    ],
    proxy: {
        type: 'rest',
        url: 'https://my-json-server.typicode.com/dom061077/domdemo/PurchaseOrder'

    }
});