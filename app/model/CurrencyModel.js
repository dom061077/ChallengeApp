Ext.define('ChallengeApp.model.CurrencyModel',{
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {
            name: 'Value',
            type: 'string'
        },{
            name: 'Description',
            type: 'string'
        }
    ]   
});