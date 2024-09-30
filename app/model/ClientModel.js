Ext.define('ChallengeApp.model.ClientModel',{
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {
            name: 'Id',
            type: 'int'
        },{
            name: 'Name',
            type: 'string'
        }
    ],
    proxy: {
        type: 'rest',
        url: 'https://my-json-server.typicode.com/dom061077/domdemo/Client'

    }    
});