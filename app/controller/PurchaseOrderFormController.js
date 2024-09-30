

Ext.define('ChallengeApp.controller.PurchaseOrderFormController',{
    extend: 'Ext.app.Controller',
    views: ['PurchaseOrderFormView'],
    stores: ['ClientStore','CurrencyStore'],
    models: ['PurchaseOrderModel'],
    init: function(app){
        this.control({
            'purchaseorderformview': {
                afterrender: this.initView

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
            /*
            'purchaseorderview button[action=groupDate]':{
                click: this.onGroupDate
            }
            */
        }
        );
    },
    initView: function(view){

        var currencyStore = this.getCurrencyStoreStore();
        var currencyCmb = view.down('#currencyCmb');
        currencyCmb.bindStore(currencyStore);
        var clientCmb = view.down('#clientCmb');
        var store = this.getClientStoreStore();
        clientCmb.bindStore(store);
        store.load({
            callback: function(){
                view.loadRecord(view.record); //estoy teniendo una race condition por eso hago el loadrecord aquí
            }
        });
        
    },
    isDirty: function(changes,oldRecord){
        var dirty=false;
        if(changes.Date){
            if(changes.Date!= oldRecord.get('Date'))
                dirty=true;
        }
        if(changes.ClientId){
            dirty=true;
        }
        if(changes.Status){
            dirty=true;
        }        
        if(changes.Total){
            dirty=true;
        }      
        if(changes.Currency){
            dirty=true;
        }                
        return dirty;
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
            msg:'Record saved',
            fn: function(btn){
                view.up('window').close();
            }
        });
    },
    loadDetail: function(orderId){

    }
    /*
    onGroupDate: function(button, event, options){

    }*/
});

/*


// Sample JSON string
var jsonString = '[{"id": 1, "name": "John Doe"}, {"id": 2, "name": "Jane Doe"}]';

// Convert JSON string to a JavaScript array
var jsonData = Ext.decode(jsonString);

// Define a model for the store
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name']
});

// Create a store
var store = Ext.create('Ext.data.Store', {
    model: 'User'
});

// Load the data into the store
store.loadData(jsonData);

// Verify the store content (For debugging purpose)
console.log(store.getData().items);

// Use the store in a grid or other component
Ext.create('Ext.grid.Panel', {
    title: 'Users',
    store: store,
    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name' }
    ],
    renderTo: Ext.getBody()
});


*/