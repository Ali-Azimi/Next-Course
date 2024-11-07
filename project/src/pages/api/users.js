const handleUsers = (req, res) => {
  const users = [
    'sana samin',
    'arman pasyandeh',
    'shayan hadadi',
    'babak behnam',
  ];

  setTimeout(() => {
    res.json(users);
  }, 2000);
};

export default handleUsers;
