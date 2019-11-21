import axios from 'axios';

export default {
    login:function(email,password)
    {
        return axios.post("/api/users/login",{
            email,
            password
            });
    },
    register:function(name,email,password)
    {
        return axios.post("/api/users/",{
            name,
            email,
            password
            });
        
    },
    getFields:function(id)
    {
        return new Promise ((resolve,reject)=>{
            resolve([
                {
                   name:"VKORG-",
                   description:"Sales organization"
                },
                {
                    name:"LKPOS-",
                    description:"Distribution Channel"
                },
                {
                    name:"BSART-",
                    description:"Division"
                },
                {
                    name:"WERKS-",
                    description:"Plant/Warehouse"
                },
                {
                    name:"LGORT-",
                    description:"Storage Location"
                }
            ])
        })
    },
    getApplications:function()
    {
        return new Promise ((resolve,reject)=>{
            resolve([
                {
                    _id:1,
                    title:"SAP",
                    description:"Logistics",
                    area:" Sales",
                    fields:5
                },
                {
                    _id:2,
                    title:"SAP",
                    description:"Logistics",
                    area:" Purchasing",
                    fields:5
                }
            ])
        })
    }
}