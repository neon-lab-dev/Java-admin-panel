const searchObjects =  (array,queryString,keys)=>{
    
    const queryStringf = queryString.toLowerCase();
    const searchResults = array.filter(item => {
        // Check for matches in multiple properties (modify as needed)
        const searchFields = keys;  // Adjust this array
        return searchFields.some(field =>
          item[field].toLowerCase().includes(queryStringf)
        );
      });
    return searchResults;
}

export default searchObjects;