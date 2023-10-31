let accounts = require("../../accounts");

const accountGet = (req, res) => {
  res.status(200).json(accounts);
};
const createAnAccount= (req, res) => {
    const id = accounts[accounts.length - 1].id + 1;
    const { username } = req.body;
  
    if (!username) res.status(400).json("enter username");
    const newAccount = {
      id: id,
      username: username,
      funds: 0,
    };
    accounts.push(newAccount);
    res.status(201).json(accounts);
  };
  const deleteAnAccount= (req, res) => {
    const { id } = req.params;
    if (id != accounts.id) res.status(404).json(" id is not found");
    accounts = accounts.filter((account) => {
      if (account.id !== Number(id)) res.status(204).end();
    });
  };
const uppdatingAnAccount= (req, res) => {
    const { id } = req.params;
    const account = accounts.find((account) => {
      if (account.id == id) {
        if (account.username) username.req.body;
        if (account.funds) funds.req.body;
      } else res.status(404).json("id is not found");
    });
    res.status(200).json(account);
  };
  

module.exports={accountGet,createAnAccount, deleteAnAccount,uppdatingAnAccount}