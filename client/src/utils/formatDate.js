const formatDate = dateStr => {
    let dateInt = parseInt(dateStr)
    let dateObj = new Date(dateInt)
    let month = dateObj.toLocaleDateString('default', { month: "long" }); 
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    return `${month} ${day}, ${year}`
}

export { formatDate }; 
