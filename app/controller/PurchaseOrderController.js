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
            },
            /*
            'purchaseorderview button[action=groupDate]':{
                click: this.onGroupDate
            }
            */
        }
        );
    },
    initView: function(view){
        var store = this.getPurchaseOrderStoreStore();
        console.log('Header: ',view.headerCt);
        view.bindStore(store);
    },
    /*
    onGroupDate: function(button, event, options){

    }*/
   OnDblClick: function( grid, record, item, index, e, eOpts ){
    var form = Ext.widget('purchaseorderformview',{
        record: record,
        oldRecord: record
    });
     var win = Ext.widget('window',{
        //layout: 'fit',
        title: 'Purchase Order View',
        width: 450,
        height: 450,
        border: false,
        modal: true,
        closeAction: 'destroy',
        items: [form]
     });
     win.show();
   }
});