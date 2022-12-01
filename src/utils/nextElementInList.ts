const nextelement = (list: string[], val: string) => {
  const currActionId = list.indexOf(val);
  return list[(currActionId + 1) % list.length];
};
export default nextelement;
