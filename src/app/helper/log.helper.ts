export const lg = (message: string, type = ''): void => {
  let backgroundColor = 'white';
  let color = 'black';
  switch (type) {
    case 'danger': {
      backgroundColor = '#B71C1C';
      color = 'white';
      break;
    }
    case 'warning': {
      backgroundColor = '#FF6F00';
      color = 'white';
      break;
    }
    case 'success': {
      backgroundColor = '#43A047';
      color = 'white';
      break;
    }
    default: {
      break;
    }
  }
  console.log(
    `%c ${message}`,
    `
    background-color: ${backgroundColor};
    color: ${color};
    padding: 4px;
    border-radius: 2px;`
  );
};
