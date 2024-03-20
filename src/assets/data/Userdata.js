let userData =[
    {
        ID:"65f317a55deeaa0008f31cae",
        Name:"Radsdaadashul Kuma",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae",
        Name:"Rahudsadsadl Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    }
]



const searchByID = userData.filter(user => user.ID === "65f317a55deeaa0008f31cae");
const searchByMobile = userData.filter(user => user.Mobile === "9236578931");
const searchByName = userData.filter(user => user.Name.includes === "Rahul Kumar");

const searchResults = [].concat(searchByMobile).concat(searchByName).concat(searchByID);
console.log(searchResults); 

// let TotalData ={searchResults,userData};
export default  userData;