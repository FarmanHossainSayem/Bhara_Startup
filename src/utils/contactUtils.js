export const contactOwner = (contact, type) => {
  switch(type) {
    case 'call':
      window.open(`tel:${contact}`);
      break;
    case 'whatsapp':
      window.open(`https://wa.me/${contact.replace(/[^0-9]/g, '')}`);
      break;
    case 'email':
      window.open(`mailto:${contact}`);
      break;
    default:
      console.log('Unknown contact type:', type);
  }
};

