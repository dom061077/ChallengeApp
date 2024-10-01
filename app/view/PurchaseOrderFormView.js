

Ext.define('ChallengeApp.view.PurchaseOrderFormView',{
extend: 'Ext.form.Panel',
alias: [ 'widget.purchaseorderformview' ],
//closeAction: 'destroy',
preventHeader: true,
fieldDefaults: {
    labelAlign: 'left',
    labelWidth: 200,
    anchor: '100%'
},
//layout: 'vbox',
viewConfig:{
    loadMask: true
},    
autoScroll: true,
items:[
    {
        xtype: 'container',
        layout: 'vbox',
        items:[
            {
                xtype: 'displayfield',
                name: 'Id',
                fieldLabel: 'Id',
                
            },{
               xtype: 'datefield',
                name: 'Date',
                format:'d/m/Y',

                fieldLabel: 'Date',
                allowBlank: 'false'
            },{
                xtype:'combobox',
                fieldLabel: 'Client',
                name: 'ClientId',
                queryMode: 'local',
                itemId: 'clientCmb',
                allowBlank: 'false',
                valueField: 'Id',
                displayField: 'Name',
        
            },{
                xtype: 'textfield',
                fieldLabel: 'Status',
                allowBlank: 'false',
                name: 'Status',
        
            },{
                xtype: 'numberfield',
                fieldLabel: 'Total',
                allowBlank: 'false',
                name: 'Total'
            },{
                xtype: 'combobox',
                fieldLabel: 'Currency',
                forceSelection: true,
                itemId: 'currencyCmb',
                queryMode: 'local',
                valueField: 'Value',
                displayField: 'Description',
                name: 'Currency'
            }
        ]
    },{

        xtype: 'panel',
        height: 150,
        title: 'Detail',
        
        items: [

            {
                xtype: 'grid',
                itemId: 'detail', 
                columns:[
                    {
                        header: 'Id',
                        dataIndex: 'Id'
                    },{
                        header: 'Product',
                        dataIndex: 'ProductDesc'
                    },{
                        header: 'Quantity',
                        dataIndex: 'Quantity'
                    },{
                        header: 'Price',
                        dataIndex: 'Price'
                    }
                ]   
            }        
        ]
    }
],
buttons:[
    {
        text: 'Save',
        iconCls: 'icon-database-save',
        itemId: 'save'
    },{
        text: 'Reset',
        iconCls: 'icon-arrow-refresh',
        itemId: 'reset'
    },{
        text: 'Cancel',
        iconCls: 'icon-basket-remove',
        itemId: 'cancel'
    }
],
initComponent: function() {
    this.callParent(arguments);
}
});