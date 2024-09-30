Ext.define('ChallengeApp.store.ClientStore',{
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'ChallengeApp.model.ClientModel',
    pageSize:10000,
    remoteSort: false,
    remoteFilter: false
});