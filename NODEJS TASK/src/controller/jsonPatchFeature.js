import jsonpatch from 'jsonpatch';
import { User } from '../model/auth.js'
import {JsonPatch} from '../model/jsonPatchFeature.js'


const JsonPatchController ={
    JsonPatch: async (req, res) => {
      const {id} = req.params
        const { username, phonenumber, address, occupation } = req.body;
    
        if (!username || !phonenumber || !address) {
          return res
            .status(400)
            .json({ status: 'fail', message: 'Please fill all fields' });
        }
        const user = await User.findById(id)
        const profile = new Profile()
        profile.save();
      
        var patch = [
          {
          "op": "add",
          "path": "/username",
          "value":username
         },
         {
          "op": "add",
          "path": "/phonenumber",
          "value":phonenumber
         },
         {
          "op": "add",
          "path": "/address",
          "value":address
         },
         {
          "op": "add",
          "path": "/occupation",
          "value":occupation
         },
      ];
         
      const der = jsonpatch.apply_patch(user, patch);

      res.status(200).json({
          id:der._doc._id,
          email:der._doc.email,
          username:der.username,
          phonenumber:der.phonenumber,
          address:der.address,
          occupation:der.occupation,
      })
          }
        }
     
    export default JsonPatchController;








