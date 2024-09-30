Ext.application({
    //requires: ['Ext.container.Viewport'],
    name: 'ChallengeApp',
    controllers : [
        'PurchaseOrderController',
        'PurchaseOrderFormController'
    ],
    quickTips: false,
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            //layout: 'fit',
            items: [
                {
                    xtype:'purchaseorderview'
                }
            ]
        });
    }
});