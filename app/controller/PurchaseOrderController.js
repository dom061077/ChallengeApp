Ext.define('ChallengeApp.controller.PurchaseOrderController',{
    extend: 'Ext.app.Controller',
    views: ['PurchaseOrderView','PurchaseOrderFormView'],
    stores: ['PurchaseOrderStore'],
    models: ['PurchaseOrderModel'],
    init: function(app){
        this.control({
            'purchaseorderview': {
                afterrender: this.initView,
                itemdblclick: this.OnDblClick
            }
        }
        );
    },
    initView: function(view){
        var store = this.getPurchaseOrderStoreStore();
        console.log('Header: ',view.headerCt);
        /*var headerCt = view.headerCt;
        no puede manejar el doble click en la columna. Creo que el SDK no es el correcto por eso salta un error en la consola
        cuando interactuuo con los headers.
        headerCt.on('headerdblclick', function (ct, column, e, t) {
            
        }); */       
        view.bindStore(store);
    },

   OnDblClick: function( grid, record, item, index, e, eOpts ){
    var form = Ext.widget('purchaseorderformview',{
        record: record,
        oldRecord: record
    });
     var win = Ext.widget('window',{

        title: 'Purchase Order View',
        width: 450,
        height: 380,
        border: false,
        modal: true,
        closeAction: 'destroy',
        items: [form]
     });
     win.show();
   }
});