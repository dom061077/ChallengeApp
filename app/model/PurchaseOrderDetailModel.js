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
            name: 'ProductDesc',
            type: 'string'
        },{
            name: 'Quantity',
            type: 'int',
        },{
            name: 'Price',
            type: 'number'
        }
    ]

});