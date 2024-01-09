export const filterArray = (arr, filterValue) => {
    return arr.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()));
  };