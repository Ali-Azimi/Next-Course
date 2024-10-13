function handler(req, res) {
  console.log('METHOD:: ' + req.method);
  console.log('STATUS:: ' + req.statusCode);
  console.log('QUERY:: ' + req.query);
  console.log('BODY:: ' + req.body);

  res.send('DONE!');
}

export default handler;
