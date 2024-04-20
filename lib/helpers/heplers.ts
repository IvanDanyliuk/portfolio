type Format = 'year' | 'month/year'

export const formatDate = (date: string, format?: Format) => {
  const initailDate = new Date(date);
  const day = initailDate.getDate();
  const month = initailDate.getMonth();
  const year = initailDate.getFullYear();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  switch(format) {
    case 'year':
      return `${initailDate.getFullYear()}`;
    case 'month/year':
      return `${months[month]} ${year}`;
    default:
      return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  }
};

export const getFilenameFromUrl = (url: string) => {
  const parsedFilename = new URL(url).pathname.split('/').pop();
  if(parsedFilename) {
    return parsedFilename.split('.')[0];
  }

  return null;
};
