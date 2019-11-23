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
                    description:"Financials",
                    area:" Controlling",
                    fields:5
                },
                {
                    _id:3,
                    title:"OneSource",
                    description:"Sales",
                    area:" Sales Reps",
                    fields:5
                },
                {
                    _id:4,
                    title:"OneSource",
                    description:"Sales",
                    area:" Customer Hierarchies",
                    fields:5
                },
                {
                    _id:5,
                    title:"Hybris",
                    description:"Cart-Quote",
                    area:" Products",
                    fields:5
                },
                {
                    _id:6,
                    title:"Hybris",
                    description:"Price-Quote",
                    area:" Customers",
                    fields:5
                }
            ])
        })
    }
}