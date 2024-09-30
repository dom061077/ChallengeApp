Ext.define('ChallengeApp.store.CurrencyStore',{
    extend: 'Ext.data.Store',
    model: 'ChallengeApp.model.CurrencyModel',
    remoteSort: false,
    remoteFilter: false,    
    data: [
        {Value:'DOLLAR', Description: 'DOLLAR'},
        {Value:'EURO', Description: 'EURO'},        
        {Value:'PESOS', Description: 'PESOS'}
    ]
});