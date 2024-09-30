Ext.define('ChallengeApp.store.PurchaseOrderStore',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'ChallengeApp.model.PurchaseOrderModel',
    pageSize:10000,
    remoteSort: false,
    remoteFilter: false
});