Ext.define('ChallengeApp.model.PurchaseOrderDetailModel',{
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [

        /*
 PurchaseOrderDetail
{
Id,
PurchaseOrderId (belongsTo association),
ProductDesc,
Quantity,
Price
}
       
        */
        {
            name: 'Id',
            type: 'int'
        },{
            name: 'Date',
            type: 'string'
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
    ]

});