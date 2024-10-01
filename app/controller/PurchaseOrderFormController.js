

Ext.define('ChallengeApp.controller.PurchaseOrderFormController',{
    extend: 'Ext.app.Controller',
    views: ['PurchaseOrderFormView'],
    stores: ['ClientStore','CurrencyStore'],
    models: ['PurchaseOrderModel','PurchaseOrderDetailModel'],
    init: function(app){
        this.control({
            'purchaseorderformview': {
                afterrender: this.initView,

            },
            'purchaseorderformview #cancel': {
                click: this.onCancel
            },
            'purchaseorderformview #reset': {
                click: this.onReset
            },
            'purchaseorderformview #save': {
                click: this.onSave
            }                        

        }
        );
    },
    initView: function(view){
        var controller = this;
        var currencyStore = this.getCurrencyStoreStore();
        var currencyCmb = view.down('#currencyCmb');
        currencyCmb.bindStore(currencyStore);
        var clientCmb = view.down('#clientCmb');
        var store = this.getClientStoreStore();
        clientCmb.bindStore(store);
        store.load({
            callback: function(){
                view.loadRecord(view.record); //estoy teniendo una race condition por eso hago el loadrecord aquí
                controller.loadDetail(view.record.get('Detail'), view);
            }
        });
        
    },

    onRemoveDetail: function(item){
        console.log('Item del action remove',item);
    },

    loadDetail: function(jsonStr, view){
        var json = Ext.decode(jsonStr);
        var detailModel = this.getPurchaseOrderDetailModelModel();
        var store = Ext.create('Ext.data.Store', {
            model: detailModel
        });
        store.loadData(json);
        var gridDetail = view.down('#detail');
        gridDetail.bindStore(store);
    },   


    onCancel: function(btn){
        var view = btn.up('purchaseorderformview');
        var win = btn.up('purchaseorderformview').up('window');
        var record = view.getForm().getRecord();
        view.getForm().updateRecord(record);   
        console.log('Is dirty: ',record.getChanges());     
        if(record.dirty){
            Ext.MessageBox.show({
                title: 'Warning',
                msg: 'There are changes to save. Are you sure to leave?',
                buttons: Ext.MessageBox.YESNO,
                icon: Ext.MessageBox.QUESTION,
                fn: function(btn){
                    if(btn=='yes'){
                        record.reject();
                        win.close();
                    }
                }
            });
        }else{
            win.close();
        }
    },
    onReset: function(btn){
        var view = btn.up('purchaseorderformview');
        var record = view.getForm().getRecord();
        view.getForm().updateRecord(record);
        record.reject();
        view.loadRecord(record);
    },
    onSave: function(btn){
        var view = btn.up('purchaseorderformview');
        var record = view.getForm().getRecord();
        view.getForm().updateRecord(record);        
        //el API REST no soporta POST ni PUT

        Ext.MessageBox.show({
            title:'Message',
            icon: Ext.MessageBox.WARNING,   
            buttons: Ext.MessageBox.OK,
            msg:'Record saved',
            fn: function(btn){
                view.up('window').close();
            }
        });
    }

});

