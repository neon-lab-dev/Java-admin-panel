let userData =[
    {
        ID:"65f317a55deeaa0008f31cae1",
        Name:"Radsdaadashul Kuma",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae2",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae3",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae4",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae5",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae6",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae7",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae8",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae9",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae10",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae11",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae12",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae13",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae14",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae15",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae16",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae17",
        Name:"Rahul Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },{
        ID:"65f317a55deeaa0008f31cae18",
        Name:"Rahudsadsadl Kumar",
        Email:"rahulkumar@gmail.com",
        Mobile:"9236578931",
        DOB:"1999-06-03"
    },
]



const searchByID = userData.filter(user => user.ID === "");
const searchByMobile = userData.filter(user => user.Mobile === "9236578931");
const searchByName = userData.filter(user => user.Name === "Rahul Kumar");

const searchResults = [].concat(searchByMobile).concat(searchByName).concat(searchByID);
// console.log(searchResults); 

// let TotalData ={searchResults,userData};
export default  searchResults;