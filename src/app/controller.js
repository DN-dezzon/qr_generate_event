const qrcode = require('./utils/qr-code_gen');
const repository = require('./repository');

const detail = async (req, res) => {
  let resp = null;
  try {
    console.log(req.params.eventid);
    const result = await repository.findDetails(req.params.eventid);
    console.log(result);
    if (result = 1) {
      resp = {
        "version": "v2",
        "content": {
          "messages": [
            {
              "type": "image",
              "url": "https://dezzon.s3-ap-southeast-1.amazonaws.com/" + req.params.eventid + ".png",
              "buttons": []
            }
          ],
          "actions": [],
          "quick_replies": []
        }
      }
      // return resp
    }
    // res.send(resp).status(200);
  } catch (err) {
    res.send(err);
  }
};
 const generate = async (req, res) => {
  //  var array = []; 
  try {
  //  var array = await repository.getAll();
  //   console.log(array,zzzz);
    const result = await qrcode.generateqrcode();
    console.log(result,"zzzz")
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  detail,
  generate
}