Ext.define('ChallengeApp.view.PurchaseOrderView',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.purchaseorderview',
    title: 'Purchase Order',
    viewConfig: {
        // This option ensures rows are highlighted on hover
        //stripeRows: true,
        /*enableTextSelection: true,  // optional for text selection on hover
        listeners: {
            itemmouseenter: function(view, record, item, index, e, options) {
                // This ensures that item highlighting occurs only if the item exists
                if (item) {
                    Ext.fly(item).addCls('my-highlight-class');
                }
            },
            itemmouseleave: function(view, record, item, index, e, options) {
                if (item) {
                    Ext.fly(item).removeCls('my-highlight-class');
                }
            }
        }*/
    },    
    features: [
        {
            ftype: 'grouping',
            //id: 'groupingMST',
            enableGroupingMenu: true,

          
        }

        

    ],  
    //autoHeight : true,
    columns : [
        {
            xtype: 'gridcolumn',
            header: 'Id',
            dataIndex: 'Id',
            sortable: true
        },{
            xtype: 'datecolumn',
            header: 'Date',
            format:'d/m/Y',
            renderer: function (value, obj, record) {
                return value ? Ext.Date.format(new Date(value), 'd/m/Y') : ''
            },
            dataIndex: 'Date',
            sortable: true

        },{
            xtype: 'gridcolumn',
            header: 'Status',
            dataIndex: 'Status',
            sortable:true
        },{
            xtype: 'numbercolumn',
            align: 'right',
            header: 'Total',
            format: '0,000.00',
            dataIndex: 'Total',
            sortable: true
        },{
            //xtype: 'gridcolumn',
            header: 'Currency',
            dataIndex: 'Currency',
            sortable: true
        }
    ],
    initComponent: function() {
        this.callParent(arguments);
        /*var toolbar = Ext.create('Ext.toolbar.Toolbar',{
            items:[
                {
                    text: 'Grouping',
                    menu: {
                        xtype: 'menu',
                        
                        items: [
                            {
                                xtype: 'panel',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        text: 'Date Group',
                                        enableToggle: true,
                                        toggleGroup: 'group',
                                        action: 'groupDate',
                                        width: 150  
                                    },                            {
                                        xtype: 'button',
                                        text: 'Status Group',
                                        enableToggle: true,
                                        toggleGroup: 'group',
                                        action: 'groupStatus',
                                        width: 150  
                                    },                            {
                                        xtype: 'button',
                                        text: 'Total Group',
                                        enableToggle: true,
                                        toggleGroup: 'group',
                                        action: 'groupTotal',
                                        width: 150                               
                                    },                            {
                                        xtype: 'button',
                                        text: 'Currency Group',
                                        enableToggle: true,
                                        toggleGroup: 'group',
                                        action: 'groupCurrency',
                                        width: 150  
                                    },
        
                                ]
                            }
                        ]
                    }
                }
            ]
        });
        this.addDocked(toolbar);*/
    }    
});