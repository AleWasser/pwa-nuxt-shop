const checkUser = (usuarios, uid) => {
  if (usuarios.usuarios.find(element => element.uid == uid)) {
    return true;
  }
  return false;
}

export default checkUser;