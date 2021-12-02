exports.nameSearch = (employeeArray) => {
    let result = employeeArray.filter((e) => {
        return e.name.includes("am");
    });
    return result;
};